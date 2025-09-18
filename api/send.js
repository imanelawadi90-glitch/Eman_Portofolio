const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        message: 'All fields are required: name, email, subject, message' 
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        message: 'Invalid email format' 
      });
    }

    // Check for reasonable length limits
    if (name.length > 100 || subject.length > 200 || message.length > 2000) {
      return res.status(400).json({ 
        message: 'Input too long. Name: max 100 chars, Subject: max 200 chars, Message: max 2000 chars' 
      });
    }

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email configuration');
      return res.status(500).json({ 
        message: 'Email service not configured. Please check environment variables.' 
      });
    }

    // Create transporter with error handling
    let transporter;
    try {
      transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
    } catch (transporterError) {
      console.error('Transporter creation error:', transporterError);
      return res.status(500).json({ 
        message: 'Failed to create email transporter', 
        details: transporterError.message 
      });
    }

    // Verify transporter configuration
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('Transporter verification error:', verifyError);
      return res.status(500).json({ 
        message: 'Email service authentication failed', 
        details: verifyError.message 
      });
    }

    // Send email
    try {
      await transporter.sendMail({
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        replyTo: email,
        to: process.env.EMAIL_USER,
        subject: `Portfolio Contact: ${subject}`,
        text: message,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0BCEAF; margin-bottom: 20px;">New Contact Form Message</h2>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
            </div>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
              <h3 style="color: #0BCEAF; margin-top: 0;">Message:</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            <p style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
              Sent via portfolio contact form at ${new Date().toLocaleString()}
            </p>
          </div>
        `,
      });

      return res.status(200).json({ message: 'Email sent successfully!' });
    } catch (sendError) {
      console.error('Email sending error:', sendError);
      return res.status(500).json({ 
        message: 'Failed to send email', 
        details: sendError.message 
      });
    }

  } catch (error) {
    console.error('Unexpected error:', error);
    return res.status(500).json({ 
      message: 'Internal server error', 
      details: error.message 
    });
  }
}