const fetch = require('node-fetch');
const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT;
const smtpUser = process.env.SMTP_USER;
const smtpEmail = process.env.SMTP_EMAIL;
const smtpPassword = process.env.SMTP_PASSWORD;

async function sendMail({ subject, textMessage, from, }) {
    const message = {
        from: smtpEmail,
        to: smtpEmail,
        replyTo: from,
        subject: subject,
        text: textMessage
    };

    const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: true,
        auth: {
            user: smtpUser,
            pass: smtpPassword,
        },
    });

    const info = await transporter.sendMail(message);
    console.log(info);
};

module.exports = {
    sendMail
};