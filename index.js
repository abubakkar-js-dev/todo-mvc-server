require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectMongoDb = require('./src/db');
const todosRouter = require('./src/routes/userRoute');
const port = process.env.PORT || 5000;
const app = express();



//middleware
app.use(cors());
app.use(express.json());


// connect mongodb
connectMongoDb(process.env.DB_URI);


// routes

app.use('/api/todos',todosRouter);


app.get('/',(req,res)=>{
    res.send('My Server is Running Now');
})

app.listen(port,()=>{
    console.log(`The server on running port: ${port}`);
})