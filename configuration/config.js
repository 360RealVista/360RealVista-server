const dotenv=require("dotenv")
const  mongoose = require("mongoose")
const nodemailer = require("nodemailer");

dotenv.config({
    path:"./configuration/config.env"
})

const nodemailerTransporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
      user: "sd703299@gmail.com",
      pass: "ljpahbfmhxjvrqbk"
   }
});

const mongoConfig=async()=>{
   const res=await mongoose.connect(process.env.PRODUCTION_MONGODB_URI)
   console.log("database connected to "+ res.connection.host)
}

module.exports={
    DEVELOPMENT_PORT:process.env.DEVELOPMENT_PORT,
    mongoConfig,
    nodemailerTransporter

}