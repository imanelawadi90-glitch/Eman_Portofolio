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

    // For now, just return success without sending email
    // This will help us test if the function works
    console.log('Contact form submission:', { name, email, subject, message });
    
    return res.status(200).json({ 
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
    return res.status(500).json({ 
      message: 'Internal server error', 
      details: error.message 
    });
  }
}