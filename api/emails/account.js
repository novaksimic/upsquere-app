require('dotenv').config();
const sgMail = require("@sendgrid/mail");


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// send welcome email via sendgrid 
exports.sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: process.env.SGMAIL_EMAIL,
        subject: "Thanks for joining UpSquere",
        text: `Welcome to the app, ${name}.
               Let us know how you get alogn with the app!\n
               the UpSquere Team`
    });
}

// send cancellation email via sendgrid
exports.sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: process.env.SGMAIL_EMAIL,
        subject: "We are sorry to see you leave",
        text: `We're sorry to see you leave ${name}.
               Let us know what we could do differently next time in a reply email!\n
               the UpSquere Team`
    });
}
