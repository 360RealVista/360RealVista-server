const homepageRoutes=require("./homepageRoutes")
const express =require("express")

const v1=express.Router()

v1.use("/v1/api/",homepageRoutes)

module.exports=v1