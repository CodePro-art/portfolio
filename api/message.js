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
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const email = sanitize(req.body.email);
    const message = sanitize(req.body.message);
    
    // Debug logging
    console.log('Request headers:', req.headers);
    console.log('Origin header:', req.headers.origin);
    console.log('Expected origin:', ORIGIN);
    
    // Check if SMTP configuration is available
    if (!smtpHost || !smtpUser || !smtpPass) {
      console.error('Missing SMTP configuration');
      return res.status(500).json({ error: 'Email service not configured' });
    }
    
    // Reject unsupported origins - make this more flexible
    const requestOrigin = req.headers.origin;
    if (requestOrigin && requestOrigin !== ORIGIN) {
      console.log(`Origin mismatch: ${requestOrigin} !== ${ORIGIN}`);
      // Allow requests from the same domain or no origin
      if (requestOrigin.includes('netanel-mazuz.dev') || !requestOrigin) {
        console.log('Allowing request from same domain or no origin');
      } else {
        console.log('Rejecting request from different origin');
        return res.status(403).json({ error: 'Origin not allowed' });
      }
    }

    // Validate email request
    if (!email || !/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address' });
    } else if (!message) {
      return res.status(400).json({ error: 'Please enter a message' });
    } else if (email.length > MAX_EMAIL_LENGTH) {
      return res.status(400).json({
        error: `Please enter an email fewer than ${MAX_EMAIL_LENGTH} characters`,
      });
    } else if (message.length > MAX_MESSAGE_LENGTH) {
      return res.status(400).json({
        error: `Please enter a message fewer than ${MAX_MESSAGE_LENGTH} characters`,
      });
    }

    // Send email
    const mailOptions = {
      from: 'Portfolio <mailbot@netanel-mazuz.dev>',
      to: ['netazuz@gmail.com', 'netanel.mazuz@outlook.com'],
      subject: `New message from ${email}`,
      text: `From: ${email}\n\n${message}`,
    };

    await mailTransport.sendMail(mailOptions);

    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Rejected', error);
    return res.status(500).json({ error: 'Message rejected' });
  }
};
