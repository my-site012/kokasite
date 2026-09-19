// api/report.js
// Vercel Serverless Function to handle ad reporting notifications

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { adId, adName, adCity, reason, details, profileUrl } = req.body;

  // Check for environment variables
  if (!process.env.SMTP_PASSWORD) {
    return res.status(500).json({ 
      error: 'SMTP Configuration Missing', 
      details: 'The SMTP_PASSWORD environment variable is not set in Vercel. Please add it to your project settings.' 
    });
  }

  // Configure nodemailer transporter using Gmail
  // The user MUST set SMTP_EMAIL and SMTP_PASSWORD in Vercel Environment Variables
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_EMAIL || 'orbyzaseo@gmail.com',
      pass: process.env.SMTP_PASSWORD, // This must be a 16-character Google App Password
    },
  });

  try {
    // Send Notification Email to Admin/Report Handler
    const mailOptions = {
      from: `"CallGirl4You System" <${process.env.SMTP_EMAIL || 'orbyzaseo@gmail.com'}>`,
      to: 'worksunil26@gmail.com',
      cc: 'orbyzaseo@gmail.com',
      subject: `🚨 Ad Reported: ${adName} (${adId})`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #D91E18;">New Ad Report Alert</h2>
          <p>A visitor has reported an ad on CallGirl4You. Details are provided below:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; width: 150px;"><strong>Ad ID:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${adId}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Model Name:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${adName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>City:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${adCity}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Reason:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #D91E18; font-weight: bold;">${reason}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Date:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${new Date().toLocaleString()}</td>
            </tr>
          </table>

          <div style="background: #fdf2f2; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin-top: 0; font-weight: bold; color: #D91E18;">Additional Comments:</p>
            <p style="margin-bottom: 0; color: #444;">${details || 'No additional comments provided.'}</p>
          </div>

          <div style="text-align: center; margin-top: 30px;">
            <a href="${profileUrl}" style="background-color: #D91E18; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">Review Reported Ad</a>
          </div>
          
          <p style="color: #888; font-size: 12px; margin-top: 30px; text-align: center;">This is an automated notification from the CallGirl4You System.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: 'Ad report submitted successfully' });
  } catch (error) {
    console.error('Error sending report email:', error);
    return res.status(500).json({ error: 'Failed to submit report', details: error.message });
  }
}
