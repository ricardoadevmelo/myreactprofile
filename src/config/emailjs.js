// EmailJS Configuration
// 
// To set up EmailJS for your contact form:
// 
// 1. Go to https://www.emailjs.com/
// 2. Create a free account
// 3. Create an email service (Gmail recommended)
// 4. Create an email template with these variables:
//    - {{from_name}} - sender's name
//    - {{from_email}} - sender's email
//    - {{subject}} - email subject
//    - {{message}} - email message
// 5. Get your Service ID, Template ID, and Public Key
// 6. Replace the values below:

export const emailjsConfig = {
  serviceId: 'service_ricardomelo', // Your actual EmailJS service ID
  templateId: 'template_1u3itg7', // Your actual EmailJS template ID
  publicKey: 'Bvf8Fx2PsIxme0qEl', // Your actual EmailJS public key
};

// Example template for EmailJS:
/*
Subject: New Contact from {{from_name}} - {{subject}}

Body:
You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
*/
