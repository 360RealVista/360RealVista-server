const express=require("express")
const { homepageController } = require("../../../controller")
const homePageRouter=express.Router()

homePageRouter.post("/request-form",homepageController.postRequestForm)
homePageRouter.post("/contact-us",homepageController.postContactUsForm)

module.exports=homePageRouter