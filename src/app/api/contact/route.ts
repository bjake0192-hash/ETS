import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, company, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Configure nodemailer transport
    // User needs to set these in their .env.local file
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com", // Default to gmail for example
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true" || false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Check if SMTP is configured, if not log it but return success for UI testing
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn("SMTP credentials not configured. Form submission received:");
      console.warn({ name, company, email, message });
      console.warn("Please configure SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS in .env.local");
      
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return NextResponse.json({ success: true, message: "Logged to console (SMTP not configured)" });
    }

    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL || `"ETS Website" <${process.env.SMTP_USER}>`,
      to: "info@ets-ltd.com",
      replyTo: email,
      subject: `New Website Inquiry from ${name}`,
      text: `
        Name: ${name}
        Company: ${company || "Not provided"}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Website Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <br/>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
