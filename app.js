const express=require("express")
const cors=require("cors")
const {v1Routes}=require("./routes")

const app= express()

app.use(cors({origin:"*"}))

app.use(express.json())

app.use("/",v1Routes)
app.get("/",(req,res)=>{
    return res.status(200).send("hello ... i am live")
})



module.exports=app