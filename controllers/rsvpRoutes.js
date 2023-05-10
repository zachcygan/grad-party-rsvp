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
        const user = await User.create(req.body);

        let mailOptions = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: 'New RSVP for Zach\'s Graduation!',
            text: `New RSVP from ${req.body.firstName} ${req.body.lastName} for Zach's Graduation!
            \n
            \n
            They can be reached at ${req.body.email}`
        }

        transporter.sendMail(mailOptions, function(err, data) {
            if (err) {
                console.log('Error occurs', err);
            } else {
                console.log('Email sent!!!');
            }
        })
        window.location.href = '/'
        res.json(user)
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
  });

module.exports = router;