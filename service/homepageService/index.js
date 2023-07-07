const { sendMailToOwner } = require("../../core/helper")
const {homepageRepositories}=require("./../../repository")

const repository=new homepageRepositories()

const homepageForm=async (data)=>{
    try {
        const res=await repository.post(data)
        console.log(res)
        return {...res._doc,mailResponse:"okay"}
        if(res?.name){
            // await sendMailToOwner(res)

        //    console.log({...res._doc,mailResponse:"okay"})
        }

        return res
    } catch (error) {
            return error
    }

    
}




module.exports={homepageForm}
