class DataModel {
    constructor() {
        this.data = [];
    }

    getAll() {
        return this.data;
    }

  
    getById(id) {
        let user = this.data.find(obj => obj.id === id)
        if(!user) {
            return null
        }
        return user
    }

    save(obj) {

        if (obj.name) {
            if (obj.name.length == 0 && obj.abstract.length == 0 && obj.authors.length == 0 && obj.tags.length == 0){
                return false
            }else if (obj.tags instanceof Array && obj.authors instanceof Array) {
                this.data.push(obj)
                return true
            }else {
                return false
            }
   
        }
        for (const [key, value] of Object.entries(obj)) {
            if (value === "") {
                return false
            }    
        }
        for (const [key,value] of Object.entries(obj)) {
            if (key ==="password") {
                if (value.length < 7) return false
            }       
        }

        
         if (JSON.stringify(obj) === JSON.stringify({})) {
           return false
         }else {
            let emailCheck = this.data.find(e => (e.email === obj.email) || (e.matricNumber === obj.matricNumber))
            if (emailCheck === undefined) {
               this.data.push(obj)
                 return true
             }else if(emailCheck) {
                 return false
             }
             
         }

    }

    update(obj, id) {
        let index = this.data.findIndex((e) => e.id === id)
        if (index !== -1) {
            let res = this.data[index]
        //  res = {
        //      ...res,
        //      ...obj
        //  }
         for (let i in obj) {
             res[i] = obj[i]
         }
         this.data[index] = res
         
          return true
            
        }else {
            return false
        }
       
        
        
    }

    delete(id) {
        let search = this.data.findIndex((e) => e.id === id)
        if (search !== -1) {
            this.data.splice(search, 1)
        }
       return search !== -1 ? true : false
    }

    // this method will be overriden in the sub classes
    validate(obj) {
        return false;
    }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = DataModel;