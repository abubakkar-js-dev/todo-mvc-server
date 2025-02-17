const mongoose = require('mongoose');

const connectMongoDb= async(url)=>{
    await mongoose.connect(url)
    .then(()=>{
        console.log('Mongodb is connected')
    })
    .catch(err=>{
        console.log('Database connection Error',err);
    })
}


module.exports = connectMongoDb;