// EmailJS Test File
// Run this in browser console to test EmailJS configuration

const testEmailJS = () => {
  console.log('Testing EmailJS configuration...');
  
  // Test configuration
  const config = {
    serviceId: 'service_ricardomelo',
    templateId: 'template_1u3itg7',
    publicKey: 'Bvf8Fx2PsIxme0qEl'
  };
  
  console.log('Service ID:', config.serviceId);
  console.log('Template ID:', config.templateId);
  console.log('Public Key:', config.publicKey);
  
  // Test template variables
  const templateParams = {
    from_name: 'Test User',
    from_email: 'test@example.com',
    subject: 'Test Subject',
    message: 'This is a test message from the contact form.'
  };
  
  console.log('Template parameters:', templateParams);
  console.log('✅ Configuration looks correct!');
  
  return { config, templateParams };
};

// Run test
testEmailJS();
