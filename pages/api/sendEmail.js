import nodemailer from 'nodemailer';

const senderEmail = process.env.EMAIL_USER;
const senderPass = process.env.EMAIL_PASS;

let emailMessage = '';

export default async function sendEmail(req, res) {
    const { method } = req;

    if (method === 'POST') {

        // Grab Email Data
        const { name, number, email, description } = req.body;

        // Create Email Message
        emailMessage = `
            Name: <strong>${name}</strong><br />
            Phone Number: <strong>${number}</strong><br />
            Email Address: <strong>${email}</strong><br />
            Description: <strong>${description}</strong><br />;
        `;

        // Nodemailer Setup
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: senderEmail,
                pass: senderPass,
            },
        });

        const mailOptions = {
            from: senderEmail,
            to: senderEmail,
            subject: `Contact Form Submission from ${name}`,
            html: emailMessage,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ success: true });
        } catch (error) {
            res.status(500).json({ error: 'Failed to send email '});
        }

    };
}
