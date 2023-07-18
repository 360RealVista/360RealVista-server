const { sendMailToOwner } = require("../../core/helper")
const {homepageRepositories, contactFormRepositories}=require("./../../repository")

const repository=new homepageRepositories()
const contactForm=new contactFormRepositories() 

const homepageForm=async (data)=>{
    try {
        const res=await repository.post(data)
        if(res?.country){
            await sendMailToOwner(res)
            return {...res._doc,mailPassed:"okay"}
        }
        return res
    } catch (error) {
            return error
    }
}
const homepageContactForm=async (data)=>{
    try {
        const res=await contactForm.post(data)
        // if(res?.country){
        //     await sendMailToOwner(res)
        //     return {...res._doc,mailPassed:"okay"}
        // }
        return res
    } catch (error) {
            return error
    }
}

module.exports={homepageForm,homepageContactForm}
