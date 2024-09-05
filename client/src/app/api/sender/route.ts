import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import db from '@/drizzle';
import { smtpconfig } from '@/drizzle/schema';
import { desc } from 'drizzle-orm';

export async function POST(req: Request) {
  try {
    const { to, name, subject, body } = await req.json();

    const [smtpConfig] = await db
      .select()
      .from(smtpconfig)
      .orderBy(desc(smtpconfig.createdAt))
      .limit(1);

    if (!smtpConfig) {
      return NextResponse.json({ success: false, message: 'SMTP configuration not found.' });
    }

    const transporter = nodemailer.createTransport({
      host: smtpConfig.host,
      port: smtpConfig.port,
      secure: smtpConfig.ssl,
      auth: {
        user: smtpConfig.username,
        pass: smtpConfig.password,
      },
    });

    const mailOptions = {
      from: `"${name}" <${smtpConfig.username}>`,
      to,
      subject,
      text: body,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: (error as Error).message });
  }
}
