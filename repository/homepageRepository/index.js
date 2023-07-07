const CURDRepository=require("../CRUD")
const {requestFormModal}=require("./../../modal")


class homepageRepositories extends CURDRepository{
    constructor(){
        super(requestFormModal)
    }

}



module.exports={homepageRepositories}