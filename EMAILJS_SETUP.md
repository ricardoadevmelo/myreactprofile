# EmailJS Setup Instructions

Follow these steps to enable the contact form to send emails directly to your inbox:

## 1. Create EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account (200 emails/month free)

## 2. Connect Your Email Service
- In EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose "Gmail" (recommended)
- Follow the OAuth setup to connect your Gmail account

## 3. Create Email Template
- Go to "Email Templates" in dashboard
- Click "Create New Template"
- Use this template:

**Template Name:** Portfolio Contact Form

**Subject:** New Contact from {{from_name}} - {{subject}}

**Content:**
```
You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio contact form
Reply directly to this email to respond to {{from_name}}
```

## 4. Get Your Credentials
After creating the service and template, you'll have:
- **Service ID** (e.g., service_abc1234)
- **Template ID** (e.g., template_xyz5678)
- **Public Key** (found in Account settings)

## 5. Update Configuration
Open `src/config/emailjs.js` and replace:
```javascript
export const emailjsConfig = {
  serviceId: 'your_actual_service_id',
  templateId: 'your_actual_template_id', 
  publicKey: 'your_actual_public_key',
};
```

## 6. Test the Form
- The form will automatically use EmailJS once configured
- If not configured, it falls back to mailto (opens email client)
- Test by filling out the contact form on your website

## Security Notes
- The public key is safe to include in frontend code
- EmailJS handles the actual email sending securely
- Rate limiting is automatically applied

## Support
If you need help setting this up, the current fallback (mailto) will still work, but EmailJS provides a much better user experience.
