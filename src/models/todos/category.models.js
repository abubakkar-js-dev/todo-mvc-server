const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    todos:[ {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Todo',
    }]
},{timestamps: true})


const Category = mongoose.model('Category',categorySchema);
module.exports = Category;