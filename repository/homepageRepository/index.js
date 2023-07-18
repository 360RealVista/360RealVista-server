const CURDRepository=require("../CRUD")
const {requestFormModal,contactUsFormModal}=require("./../../modal")


class homepageRepositories extends CURDRepository{
    constructor(){
        super(requestFormModal)
    }
}

class contactFormRepositories extends CURDRepository{
    constructor(){
        super(contactUsFormModal)
    }
}



module.exports={homepageRepositories,contactFormRepositories}