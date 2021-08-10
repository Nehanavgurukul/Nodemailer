const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.get("/nodemailer", (req, res) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD
        }
    });

    let mailOptions = {
        from: process.env.MAIL_USERNAME,
        to: process.env.MAIL_USERNAME,
        subject: 'Nodemailer Project',
        text: 'Hi ,ignore this email just for testing api'
    };


    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Email sent successfully");
        }
    });
})

module.exports = router;