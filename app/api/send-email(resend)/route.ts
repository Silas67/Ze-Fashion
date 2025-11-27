import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const { email, name } = await req.json();

    try {
        console.log("Sending email to:", email);
        await resend.emails.send({
            from: "Tickets <tickets@resend.dev>",
            to: email,
            subject: "Your ZË Ticket",
            text: `Hi ${name}, your ticket has been confirmed!`,
        });
        console.log("Email sent successfully");
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
}
