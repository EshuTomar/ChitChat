 const express = require('express');
 const cors = require('cors');
 const connectDB = require('./config/connectDB');
 const router = require('./routes/index')
 const cookiesParser = require('cookie-parser')

 require('dotenv').config();

 const app =express();
 app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials: true
 }))

app.use(express.json());
app.use(cookiesParser());

const PORT = process.env.PORT || 4000


 app.get('/',(req,res)=>{
    res.send("hello world")
 })

 //api endpoints
 app.use('/api', router)

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log("server is listening at " + PORT)
     })
})

 