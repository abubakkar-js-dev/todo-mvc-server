const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
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
        ref: 'Category',
        required: true,
    },
    dueDate: {
        type: Date,
        required: true,
        validate: (v)=>{
            return v >= Date.now();
        }
    },
    priority: {
        type: String,
        required: true,
        enum: ['low','medium','high'],
    },
    complete: {
        type: Boolean,
        required: true,
        default: false,
    },
    creatBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
},{timestamps: true,})

todoSchema.methods.markComplete = ()=>{
    this.complete = true;
    return this.save;
}



const Todo = mongoose.model('Todo',todoSchema);
module.exports = Todo;