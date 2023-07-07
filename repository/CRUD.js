class CRUDRepositor{
 
    constructor(model){
        this.model=model
    }

    async post(data){
        try {
          const res= await this.model.create(data)
          return res
        } catch (error) {
            
            return error
        }
    }
}

module.exports=CRUDRepositor