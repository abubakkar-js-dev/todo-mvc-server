const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    photoUrl: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ['admin','user'],
        default: 'user',
    }

},{timestamps: true})


const User = mongoose.model('User',userSchema);
module.exports = User;