const dotenv=require("dotenv")
const  mongoose = require("mongoose")
const nodemailer = require("nodemailer");

dotenv.config({
    path:"./configuration/config.env"
})

const nodemailerTransporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
      user: process.env.NODEMAILER_MAIL,
      pass: process.env.NODEMAILER_MAIL_PASSWORD
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