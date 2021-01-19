const nodemailer = require('nodemailer')

const sendMail = async ({ service, user, pass }, { from, to, subject, text, html }) => {

    let transporter = nodemailer.createTransport({
        service,
        auth: { user, pass }
    })

    await transporter.sendMail({ from, to, subject, text, html });
}

const Mailer = { sendMail }

module.exports = Mailer