require('dotenv').config();


const mongoose=require('mongoose');
const connectDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("MongoDB connection SUCCESSS");
    }catch(error){
        console.log("MongoDB connection FAIL");
        process.exit(1);


    }
}
module.exports=connectDB;
