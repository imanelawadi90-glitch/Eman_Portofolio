module.exports = function handler(req, res) {
  // Set all security headers
  res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https: http:; connect-src 'self' https: http:; frame-src 'self' https://www.youtube.com https://youtube.com https://img.youtube.com https://www.facebook.com https://facebook.com https://www.instagram.com https://instagram.com https://player.vimeo.com https://vimeo.com; font-src 'self' data: https://fonts.gstatic.com;");
  res.setHeader('Permissions-Policy', 'unload=*, camera=(), microphone=(), geolocation=(), interest-cohort=()');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  res.status(200).json({ message: 'Headers set successfully' });
};
