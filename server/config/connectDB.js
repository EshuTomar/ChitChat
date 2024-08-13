const mongoose = require('mongoose');

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
         });
         const connection = mongoose.connection

         connection.on('connected', ()=>{
            console.log("connected to db")
         });
         connection.on('error',(e)=>{
            console.log("Couldn't connect to mongoDB", e);
         })
    }catch(e){
        console.log("Something went wrong " , e);
    }
}

module.exports = connectDB