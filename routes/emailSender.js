const app = require('express');
const router = app.Router();
require('dotenv').config({path:'../.env'});
const mailInputValidator = require('../validaton/mailInpuValidator')
const nodemailer = require('nodemailer');

router.post('/sendmail', async (req, res) => {
    // validate first
    const {errors, isValid} = mailInputValidator(req.body)

    if(!isValid) {
        return res.status(400).json(errors)
    }


    // nodemailer config
   let config =  {
        service: 'gmail',
        port:465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    }

    const mailTransporter = nodemailer.createTransport(config)
    // all of information
    let details = {
        from: process.env.EMAIL,
        to:req.body.email,
        subject:'Testing nodemailer using node js and next js :)',
        html:`
            <h1>Node mailer test app</h1>
            <ul>
                <li>Name: ${req.body.name}</li>
                <li>Email: ${req.body.email}</li>
            </ul>

            <h4>Message</h4>
            <p>${req.body.message}</p>
        `
    }
    try{
        await mailTransporter.sendMail(details);
        mailTransporter.close()
        res.send({
            success: true,
            message:"Email sent successfully!"
        })

    }catch(err){
        res.status(400).json({success: false, message:"Error sending email."})
    }
})

module.exports = router;