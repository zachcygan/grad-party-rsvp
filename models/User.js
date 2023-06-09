const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        lastName: {
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
        partySize: {
            type: Number,
            required: true,
            default: 1
        },
        attendance: {
            type: Boolean,
            required: true,
        }

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