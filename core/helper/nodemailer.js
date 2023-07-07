const {envConfig}=require("./../../configuration")

 const sendMail=async(res)=>{
    const html=`
    <div>
        <h1 style="color:#7634bf">Thank you for connecting with us </h1>
        <h2 style="color:#7634bf">Confirm your detail</h2>
    <div style="color:#333;padding :0px">
        <h3>name:${res?.name}</h3>
        <h3>company name:${res?.company_name}</h3>
        <h3>Estimated Size:${res?.estimated_size}</h3>
    </div>
    
    <h4 style="color:red">Soon our team will connect with you</h4>
    </div>
    <p>---If not belongs to you please ignore this mail---</p>
    `
    const mailOptions = {
        from: "sd703299@gmail.com",
        to: "sd70329@gmail.com",
        subject: "Request confirmed",
        html
     };

  await envConfig.nodemailerTransporter.sendMail(mailOptions, function(error, info){
         if(error){
             console.log(error);
            }else{
                console.log("Email sent: " + info.response);
                return info.response
            }
        })
     
        res.status(200).send("f")
    }

module.exports=sendMail    