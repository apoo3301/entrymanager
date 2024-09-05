// import nodemailer from 'nodemailer';
// import db from '@/drizzle';
// import { smtpconfig } from '@/drizzle/schema';
// import { desc } from 'drizzle-orm';

// export async function sendMail({
//   to,
//   name,
//   subject,
//   body
// }: {
//   to: string;
//   name: string;
//   subject: string;
//   body: string;
// }) {
//   try {
//     const [smtpConfig] = await db
//       .select()
//       .from(smtpconfig)
//       .orderBy(desc(smtpconfig.createdAt))
//       .limit(1);

//     if (!smtpConfig) {
//       throw new Error('SMTP configuration not found.');
//     }

//     const transporter = nodemailer.createTransport({
//       host: smtpConfig.host,
//       port: smtpConfig.port,
//       secure: smtpConfig.ssl,
//       auth: {
//         user: smtpConfig.username,
//         pass: smtpConfig.password,
//       },
//     });

//     const mailOptions = {
//       from: `"${name}" <${smtpConfig.username}>`,
//       to,
//       subject,
//       text: body,
//     };

//     const info = await transporter.sendMail(mailOptions);

//     console.log('Email sent:', info.response);
//     return { success: true, message: 'Email sent successfully' };
//   } catch (error: unknown) {
//     console.error('Error sending email:', error);
//     return { success: false, message: (error as Error).message };
//   }
// }
