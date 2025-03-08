const mongoose =require("mongoose")

const Dconnetion=async()=>{
    try{
        await mongoose.connect(process.env.Mongo_Url,{useNewUrlParser:true,useUnifiedTopology: true})
        console.log("Connected to MongoDB")
    }catch (error){
        console.log("Failed to connect to MongoDB",error)
    }
}
module.exports = Dconnetion