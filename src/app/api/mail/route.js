// pages/api/send-email.js
import nodemailer from "nodemailer";


export async function POST(request) {
    if (request.method === "POST") {
        const { name, email, subject, message } = await request.json();

        // Replace these with your actual email service settings
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.CONTACT_EMAIL,
                pass: process.env.CONTACT_EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.CONTACT_EMAIL,
            to: process.env.CONTACT_EMAIL,
            subject: subject,
            text: `mail from your portfolio by ${email}`,
            html: `<h1>name = ${name}</h1>, <h3>email = ${email} </h3>, <p>message = ${message}</p>`
        };

        try {
            await transporter.sendMail(mailOptions);
            return new Response(JSON.stringify({ success: true, message: "Email sent successfully" }), {
                status: 200,
                headers: { "Content-Type": "application/json" },
            });
        } catch (error) {
            return new Response(JSON.stringify({ error: "Email Sending Failed" }), {
                status: 500,
                headers: { "Content-Type": "application/json" },
            });
        }
    } else {
        return new Response(JSON.stringify({ error: "Method not allowed" }), {
            status: 405,
            headers: { "Content-Type": "application/json" },
        });
    }
}
