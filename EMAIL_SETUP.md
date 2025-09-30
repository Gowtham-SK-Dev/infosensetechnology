# Email Setup Guide for Contact Form

The contact form is now fully functional and will send emails when properly configured. Follow these steps to set up email functionality:

## Quick Setup (Gmail)

1. **Create a `.env` file** in your project root (copy from `.env.example`)

2. **Set up Gmail App Password:**
   - Go to your Google Account settings
   - Navigate to Security > 2-Step Verification
   - Generate an "App Password" for this application
   - Use this app password (not your regular Gmail password)

3. **Update `.env` file:**
   \`\`\`
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-character-app-password
   \`\`\`

## Alternative Email Services

### SendGrid (Recommended for Production)
\`\`\`javascript
// In server/routes.ts, replace the transporter with:
const transporter = nodemailer.createTransporter({
  service: 'SendGrid',
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY
  }
});
\`\`\`

### Outlook/Hotmail
\`\`\`javascript
const transporter = nodemailer.createTransporter({
  service: 'hotmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
\`\`\`

### Custom SMTP
\`\`\`javascript
const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});
\`\`\`

## Features Implemented

✅ **Form Validation** - Client and server-side validation
✅ **Email to Business** - Formatted email sent to business owner
✅ **Auto-reply to Customer** - Professional thank you email
✅ **Error Handling** - Graceful fallback if email fails
✅ **Security** - Environment variables for credentials
✅ **Professional Templates** - HTML email templates with branding

## Testing

1. Fill out the contact form on your website
2. Check the business email (gowtham@infosensetechnologies.com) for the inquiry
3. Check the customer's email for the auto-reply confirmation
4. Monitor server logs for any email sending issues

## Troubleshooting

- **Gmail "Less secure app" error**: Use App Passwords instead
- **Connection timeout**: Check firewall/network settings
- **Authentication failed**: Verify credentials in `.env` file
- **Emails not received**: Check spam folders

The contact form will still work even if email sending fails - it will log the contact information for manual follow-up.
