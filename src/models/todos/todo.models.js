const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
        default: "",
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    dueDate: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        required: true,
        default: false,
    }
},{timestamps: true,})