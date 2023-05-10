const router = require('express').Router();
const User = require('../models/User');
const nodemailer = require('nodemailer');
require('dotenv').config();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL, 
      pass: process.env.PASSWORD,
    }
});

router.post('/', async (req, res) => {
    try {
        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            partySize: req.body.partySize // updated variable name
        });

        let mailOptions = {
            from: process.env.EMAIL,
            to: process.env.PEMAIL,
            subject: '🎊New RSVP for Zach\'s Graduation!🎊',
            text: 
            `${req.body.firstName} ${req.body.lastName} just RSVP'ed for Zach's Graduation!
            \n
            \n
            They can be reached at ${req.body.email}
            Their party size is ${req.body.partySize}`
        }

        transporter.sendMail(mailOptions, function(err, data) {
            if (err) {
                console.log('Error occurs', err);
            } else {
                console.log('Email sent!!!');
            }
        })

        res.redirect('/success')
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
  });

module.exports = router;