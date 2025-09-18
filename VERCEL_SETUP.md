# Vercel Deployment Setup Guide

## Email Service Configuration

To enable the contact form email functionality on Vercel, you need to set up environment variables:

### 1. Gmail App Password Setup

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Copy the 16-character password

### 2. Vercel Environment Variables

In your Vercel dashboard:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add these variables:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
```

### 3. Redeploy

After adding the environment variables:
1. Go to "Deployments" tab
2. Click "Redeploy" on the latest deployment
3. Or push a new commit to trigger automatic deployment

## Security Headers

The following security headers are configured:

- **Content Security Policy**: Allows Google Fonts and embedded content
- **Permissions Policy**: Allows unload events for embedded videos
- **CORS**: Configured for contact form API

## Testing

1. Visit your deployed site
2. Go to the Contact section
3. Fill out and submit the contact form
4. Check your email for the message

## Troubleshooting

### Contact Form Not Working
- Check Vercel function logs in the dashboard
- Verify environment variables are set correctly
- Ensure Gmail app password is valid

### Console Errors
- Clear browser cache and reload
- Check if security headers are applied correctly
- Verify CSP allows required resources

### Permissions Policy Violations
- These are warnings from embedded content (Facebook videos)
- They don't affect functionality but can be suppressed with the configured permissions policy
