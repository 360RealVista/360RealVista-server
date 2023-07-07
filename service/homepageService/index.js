const { sendMailToOwner } = require("../../core/helper")
const {homepageRepositories}=require("./../../repository")

const repository=new homepageRepositories()

const homepageForm=async (data)=>{
    try {
        const res=await repository.post(data)
        if(res?.name){
           await sendMailToOwner(res)
        }

        return res
    } catch (error) {
            return error
    }

    
}




module.exports={homepageForm}
