"use server";

import { sendMail, compileWelcomeTemplate } from "@/lib/mail";

export async function sendPass(email: string) {
    if (!email) {
        console.error("No email selected");
        return;
    }
    await sendMail({
        to: email,
        name: "IGY vpdc",
        subject: "Visiteur Plaisance",
        body: compileWelcomeTemplate("IGY vpdc", "Visiteur Plaisance"),
    });
}
