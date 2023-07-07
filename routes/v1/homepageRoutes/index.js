const express=require("express")
const { homepageController } = require("../../../controller")
const homePageRouter=express.Router()

homePageRouter.post("/request-form",homepageController.postRequestForm)

module.exports=homePageRouter