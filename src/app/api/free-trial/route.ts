import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, phone, interest } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Free Trial Request" <${process.env.EMAIL_USER}>`,
    to: "CSDONLINE2023@GMAIL.COM",
    subject: "New Free Trial Request",
    html: `
      <h2>New Free Trial Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Interested In:</strong> ${interest}</p>
    `,
  });

  return NextResponse.json({ success: true });
}

