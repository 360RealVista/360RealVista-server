const express=require("express")
const cors=require("cors")
const {v1Routes}=require("./routes")

const app= express()

app.use(cors({origin:"*"}))

app.use(express.json())

app.use("/",v1Routes)



module.exports=app