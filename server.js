const path = require('path');
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();
app.use('/', express.static('build'));
app.use(express.json());
app.use('/', router);

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Ready to Send');
    }
});

router.post('/contact', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
        from: name,
        to: process.env.MAIL_USER,
        subject: 'Contact Form Submission - Portfolio',
        html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error);
        } else {
            res.json({ code: 200, status: 'Message Sent' });
        }
    });
});

app.get('*', function (req, res) {
    const indexHtml = path.resolve('build', 'index.html');
    res.sendFile(indexHtml);
});

app.listen(PORT, () => console.log('Server Running'));
