import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    res.status(400).json({ message: 'All fields are required' });
    return;
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({ message: 'Invalid email format' });
    return;
  }

  // Check for reasonable length limits
  if (name.length > 100 || subject.length > 200 || message.length > 2000) {
    res.status(400).json({ 
      message: 'Input too long. Name: max 100 chars, Subject: max 200 chars, Message: max 2000 chars' 
    });
    return;
  }

  try {
    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing email configuration");
      return res.status(500).json({ 
        message: "Email service not configured. Please check environment variables." 
      });
    }

    console.log('Creating transporter with:', {
      user: process.env.EMAIL_USER,
      hasPass: !!process.env.EMAIL_PASS
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // Add timeout for Vercel serverless environment
      connectionTimeout: 60000, // 60 seconds
      greetingTimeout: 30000,   // 30 seconds
      socketTimeout: 60000,     // 60 seconds
    });

    // Verify transporter configuration
    console.log('Verifying transporter...');
    await transporter.verify();
    console.log('Transporter verified successfully');

    console.log('Sending email to:', process.env.EMAIL_USER);
    console.log('From:', name, email);
    console.log('Subject:', subject);
    
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Use configured email as sender
      replyTo: email, // Set reply-to as the contact form email
      to: process.env.EMAIL_USER, // Send to your email
      subject: `Portfolio Contact: ${subject}`,
      text: message, // fallback for plain-text clients
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; padding: 30px; color: #333; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0BCEAF, #0BCEAF); padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h2 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">New Contact Form Message</h2>
            <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0; font-size: 14px;">From Iman Elawady Portfolio</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
            <div style="margin-bottom: 25px;">
              <h3 style="color: #0BCEAF; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">Contact Details</h3>
              <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #0BCEAF;">
                <p style="margin: 0 0 10px 0;"><strong style="color: #333;">Name:</strong> <span style="color: #666;">${name}</span></p>
                <p style="margin: 0 0 10px 0;"><strong style="color: #333;">Email:</strong> <span style="color: #666;">${email}</span></p>
                <p style="margin: 0;"><strong style="color: #333;">Subject:</strong> <span style="color: #666;">${subject}</span></p>
              </div>
            </div>
            
            <div>
              <h3 style="color: #0BCEAF; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">Message</h3>
              <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #0BCEAF;">
                <pre style="white-space: pre-wrap; font-family: 'Inter', Arial, sans-serif; line-height: 1.6; margin: 0; color: #333;">${message}</pre>
              </div>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px;">
            <p style="margin: 0; color: #666; font-size: 12px;">
              This message was sent via your portfolio contact form at ${new Date().toLocaleString()}
            </p>
            <p style="margin: 5px 0 0 0; color: #999; font-size: 11px;">
              Reply directly to this email to respond to ${name}
            </p>
          </div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully! Message ID:', info.messageId);
    console.log('Email response:', info.response);

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    console.error("Error details:", {
      code: error.code,
      response: error.response,
      message: error.message,
      stack: error.stack
    });
    
    // Provide more specific error messages
    let errorMessage = "Failed to send email.";
    let statusCode = 500;
    
    if (error.code === 'EAUTH') {
      errorMessage = "Authentication failed. Please check your email credentials.";
      statusCode = 401;
    } else if (error.code === 'ECONNECTION') {
      errorMessage = "Connection failed. Please check your internet connection.";
      statusCode = 503;
    } else if (error.code === 'ETIMEDOUT') {
      errorMessage = "Request timed out. Please try again.";
      statusCode = 408;
    } else if (error.message && error.message.includes('Invalid login')) {
      errorMessage = "Invalid email credentials. Please check your Gmail app password.";
      statusCode = 401;
    } else if (error.message && error.message.includes('Less secure app access')) {
      errorMessage = "Gmail security settings blocking access. Please use App Passwords.";
      statusCode = 401;
    }
    
    res.status(statusCode).json({ 
      message: errorMessage, 
      details: error.message,
      code: error.code
    });
  }
}