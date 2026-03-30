const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API route for contact
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    // 1. Save to messages.json (Reflection in the backend)
    const fs = require('fs');
    const path = require('path');
    const messagesFile = path.join(__dirname, 'messages.json');
    
    let messages = [];
    if (fs.existsSync(messagesFile)) {
      messages = JSON.parse(fs.readFileSync(messagesFile, 'utf8'));
    }
    
    messages.push({
      id: Date.now(),
      date: new Date().toISOString(),
      name,
      email,
      message
    });
    
    fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2));

    // 2. Optional: Send Email if configured in .env
    if (process.env.EMAIL_USER && process.env.EMAIL_USER !== 'your-email@gmail.com') {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Portfolio Contact from ${name}`,
        text: `You have received a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`
      };

      await transporter.sendMail(mailOptions);
    }
    
    res.status(200).json({ success: 'Message successfully sent and saved to backend!' });
  } catch (error) {
    console.error('Submission error:', error);
    res.status(500).json({ error: 'Failed to process message.' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
