// Vercel serverless function
module.exports = function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      res.status(400).json({ 
        message: 'All fields are required: name, email, subject, message' 
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({ 
        message: 'Invalid email format' 
      });
      return;
    }

    // Check for reasonable length limits
    if (name.length > 100 || subject.length > 200 || message.length > 2000) {
      res.status(400).json({ 
        message: 'Input too long. Name: max 100 chars, Subject: max 200 chars, Message: max 2000 chars' 
      });
      return;
    }

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email configuration');
      res.status(500).json({ 
        message: 'Email service not configured. Please check environment variables.' 
      });
      return;
    }

    // For now, just return success without sending email
    console.log('Contact form submission:', { name, email, subject, message });
    
    res.status(200).json({ 
      message: 'Message received successfully! (Email sending temporarily disabled for testing)',
      received: {
        name,
        email,
        subject,
        message: message.substring(0, 100) + '...'
      }
    });

  } catch (error) {
    console.error('Unexpected error:', error);
    res.status(500).json({ 
      message: 'Internal server error', 
      details: error.message 
    });
  }
}