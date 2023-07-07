const {envConfig}=require("./configuration")
const app=require("./app")

envConfig.mongoConfig()


app.listen(envConfig.DEVELOPMENT_PORT,()=>{
    console.log(`app is listniing at ${envConfig.DEVELOPMENT_PORT}`)
})