import User from '../models/User.js';
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL, 
      pass: process.env.PASSWORD,
    }
});

module.exports = {
    async getUsers(req, res) {
        try {
            const users = await User.find();

            return res.json(users)
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async getSingleUser(req, res) {
        try {
           
            const user = await User.findOne({ _id: req.params.id })

            if (!user) {
                return res.status(404).json({ message: 'No user found with that ID' })
            }

            return res.json({ user })
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);

            let mailOptions = {
                from: process.env.EMAIL,
                to: process.env.PEMAIL,
                subject: 'New RSVP',
                text: `New RSVP from ${req.body.firstName} ${req.body.lastName}!
                \n
                \m
                They can be reached at ${req.body.email}`
            }

            transporter.sendMail(mailOptions, function(err, data) {
                if (err) {
                    console.log('Error occurs', err);
                } else {
                    console.log('Email sent!!!');
                }
            })

            res.json(user)
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
}