const { homepageService } = require("../../service")

async function postRequestForm(req,res){
    try {
        const data={
            name:req.body?.name,
            company_name:req.body?.company_name,
            company_size:req.body?.company_size,
            country:req.body?.country,
            governorate:req.body?.governorate,
            job_title:req.body?.job_title,
            number:req.body?.number,
            other_service_brief:req.body?.other_service_brief,
            service:req.body?.service,
            estimated_size:req.body?.estimated_size,
            
        }
       const response=await homepageService.homepageForm(data)
       
       if (response?.name === "ValidationError"){
           return  res.status(400).send(response)

       }
        return  res.status(200).send(response)
        
    } catch (error) {
        return  res.status(400).send(error)
    }
}
async function postContactUsForm(req,res){
    try {
        const data={
            name:req.body?.name,
            email:req.body?.email,
            phone:req.body?.phone,
            subject:req.body?.subject,
            message:req.body?.message,
            
        }
       const response=await homepageService.homepageContactForm(data)
       
       if (response?.name === "ValidationError"){
           return  res.status(400).send(response)

       }
        return  res.status(200).send(response)
        
    } catch (error) {
        return  res.status(400).send(error)
    }
}

module.exports={postRequestForm,postContactUsForm}