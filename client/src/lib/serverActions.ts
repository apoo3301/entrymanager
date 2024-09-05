"use server";

import { sendMail, compileWelcomeTemplate } from "@/lib/mail";

export async function sendPass(email: string) {
    if (!email) {
        console.error("No email selected");
        return;
    }
    await sendMail({
        to: email,
        name: "Vahid",
        subject: "Test Mail",
        body: compileWelcomeTemplate("Vahid", "youtube.com/@sakuradev"),
    });
}
