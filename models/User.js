const { Schema, model } = require('mongoose');
const Thought = require('./Thought')

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        LastName: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [
                /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                'Please enter a valid email address',
            ]
        },

    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
)

const User = model('User', userSchema)

module.exports = User;