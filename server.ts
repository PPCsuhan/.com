import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json());

  // API Contact Endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, businessName, website, service, budget, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: 'Name, email, and message are required fields.' });
      }

      // Basic email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ success: false, error: 'Please provide a valid email address.' });
      }

      console.log('--- NEW CONTACT FORM SUBMISSION ---');
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Business: ${businessName || 'N/A'}`);
      console.log(`Website: ${website || 'N/A'}`);
      console.log(`Service: ${service || 'General Inquiry'}`);
      console.log(`Budget: ${budget || 'N/A'}`);
      console.log(`Message: ${message}`);
      console.log('-----------------------------------');

      // If Resend API key is configured, send actual email
      if (process.env.RESEND_API_KEY) {
        try {
          const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
            },
            body: JSON.stringify({
              from: 'Portfolio Contact <onboarding@resend.dev>',
              to: 'ahmadshibli927@gmail.com',
              subject: `New Inquiry from ${name} - ${service || 'Google Ads Consultation'}`,
              text: `
Name: ${name}
Email: ${email}
Business Name: ${businessName || 'N/A'}
Website: ${website || 'N/A'}
Service Interested: ${service || 'General'}
Estimated Monthly Budget: ${budget || 'N/A'}

Message:
${message}
              `
            })
          });

          if (!resendResponse.ok) {
            const errData = await resendResponse.text();
            console.error('Resend API error:', errData);
          }
        } catch (emailErr) {
          console.error('Failed to dispatch via Resend:', emailErr);
        }
      }

      return res.status(200).json({
        success: true,
        message: 'Thank you! Your message has been sent successfully. Ahmad Shibli will get back to you soon.'
      });
    } catch (err) {
      console.error('Error handling contact submission:', err);
      return res.status(500).json({ success: false, error: 'Internal server error. Please try again later or reach out via WhatsApp/Telegram.' });
    }
  });

  // Vite middleware for development or static serving for production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
