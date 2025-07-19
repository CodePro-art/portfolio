const { JSDOM } = require('jsdom');
const DOMPurify = require('dompurify');
const nodemailer = require('nodemailer');

const { window } = new JSDOM('');
const { sanitize } = DOMPurify(window);

const { smtpHost, smtpUser, smtpPass } = process.env;
const mailTransport = nodemailer.createTransport({
  host: smtpHost,
  port: 465,
  secure: true,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const ORIGIN = process.env.ORIGIN || "https://netanel-mazuz.dev";

module.exports = async (req, res) => {
  console.log('=== API CALL START ===');
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    console.log('Handling OPTIONS request');
    return res.status(200).end();
  }

  try {
    console.log('=== VALIDATION START ===');
    const email = sanitize(req.body.email);
    const message = sanitize(req.body.message);
    
    console.log('Sanitized email:', email);
    console.log('Sanitized message:', message);
    
    // Debug logging
    console.log('Request headers:', req.headers);
    console.log('Origin header:', req.headers.origin);
    console.log('Expected origin:', ORIGIN);
    
    // Check if SMTP configuration is available
    console.log('SMTP Config Check:');
    console.log('- smtpHost:', smtpHost ? 'SET' : 'MISSING');
    console.log('- smtpUser:', smtpUser ? 'SET' : 'MISSING');
    console.log('- smtpPass:', smtpPass ? 'SET' : 'MISSING');
    
    if (!smtpHost || !smtpUser || !smtpPass) {
      console.error('Missing SMTP configuration');
      return res.status(500).json({ error: 'Email service not configured' });
    }
    
    // Reject unsupported origins - make this more flexible
    const requestOrigin = req.headers.origin;
    if (requestOrigin && requestOrigin !== ORIGIN) {
      console.log(`Origin mismatch: ${requestOrigin} !== ${ORIGIN}`);
      // Allow requests from the same domain, no origin, or localhost for development
      if (requestOrigin.includes('netanel-mazuz.dev') || 
          requestOrigin.includes('localhost') || 
          !requestOrigin) {
        console.log('Allowing request from same domain, localhost, or no origin');
      } else {
        console.log('Rejecting request from different origin');
        return res.status(403).json({ error: 'Origin not allowed' });
      }
    }

    console.log('=== VALIDATION COMPLETE ===');

    // Validate email request
    if (!email || !/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
      console.log('Email validation failed');
      return res.status(400).json({ error: 'Please enter a valid email address' });
    } else if (!message) {
      console.log('Message validation failed');
      return res.status(400).json({ error: 'Please enter a message' });
    } else if (email.length > MAX_EMAIL_LENGTH) {
      console.log('Email too long');
      return res.status(400).json({
        error: `Please enter an email fewer than ${MAX_EMAIL_LENGTH} characters`,
      });
    } else if (message.length > MAX_MESSAGE_LENGTH) {
      console.log('Message too long');
      return res.status(400).json({
        error: `Please enter a message fewer than ${MAX_MESSAGE_LENGTH} characters`,
      });
    }

    console.log('=== SENDING EMAIL ===');
    // Send email
    const mailOptions = {
      from: 'Portfolio <mailbot@netanel-mazuz.dev>',
      to: ['netazuz@gmail.com', 'netanel.mazuz@outlook.com'],
      subject: `New message from ${email}`,
      text: `From: ${email}\n\n${message}`,
    };

    console.log('Mail options:', mailOptions);
    
    const result = await mailTransport.sendMail(mailOptions);
    console.log('Email sent successfully:', result);

    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('=== ERROR DETAILS ===');
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    console.error('Full error object:', error);
    return res.status(500).json({ error: 'Message rejected' });
  }
};
