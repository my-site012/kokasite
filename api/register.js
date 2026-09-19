// api/register.js
// Vercel Serverless Function to handle registration emails

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { accountType, email, name, phone } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  // Configure nodemailer transporter using Gmail
  // The user MUST set SMTP_EMAIL and SMTP_PASSWORD in Vercel Environment Variables
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_EMAIL || 'orbyzaseo@gmail.com',
      pass: process.env.SMTP_PASSWORD, // This must be a 16-character Google App Password, NOT the normal Gmail password
    },
  });

  try {
    // 1. Send Activation/Welcome Email to the Client
    const clientMailOptions = {
      from: `"Koka Site Support" <${process.env.SMTP_EMAIL || 'support@kokasite.com'}>`,
      to: email,
      subject: 'Welcome to Koka Site - Account Created',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0d0d12; color: #ffffff;">
          <h1 style="color: #f4b827; text-align: center;">Welcome to Koka Site!</h1>
          <p style="color: #cccccc;">Hello ${name || 'there'},</p>
          <p style="color: #cccccc;">Your <strong>${accountType}</strong> account has been successfully created.</p>
          <p style="color: #cccccc;">You can now manage your ads and directory listings on Koka Site.</p>
          <br/>
          <div style="text-align: center;">
            <a href="https://in.kokasite.com/login" style="background-color: #f4b827; color: #09090b; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">Log In to Your Account</a>
          </div>
          <br/>
          <p style="color: #888888; font-size: 12px; text-align: center;">If you did not request this, please ignore this email.</p>
        </div>
      `,
    };

    // 2. Send Notification Email to Admin
    const adminMailOptions = {
      from: `"Koka Site System" <${process.env.SMTP_EMAIL || 'support@kokasite.com'}>`,
      to: 'orbyzaseo@gmail.com',
      subject: `🚨 New Account Created: ${accountType.toUpperCase()}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Registration Alert</h2>
          <p>A new user just registered on the platform.</p>
          <ul>
            <li><strong>Type:</strong> ${accountType}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Name/Stage Name:</strong> ${name || 'N/A'}</li>
            <li><strong>Phone:</strong> ${phone || 'N/A'}</li>
            <li><strong>Date:</strong> ${new Date().toLocaleString()}</li>
          </ul>
        </div>
      `,
    };

    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(clientMailOptions),
      transporter.sendMail(adminMailOptions)
    ]);

    return res.status(200).json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
}
