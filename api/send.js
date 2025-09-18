// Simple Vercel function
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

  // Just return success for now
  res.status(200).json({ 
    message: 'Message received successfully!',
    data: { name, email, subject, message: message.substring(0, 50) + '...' }
  });
}