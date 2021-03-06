const DataModel = require('./data_model');

class User {
    constructor(id, firstname, lastname, email, password, matricNumber, program, graduationYear) {
        this.id = id,
        this.firstname = firstname,
        this.lastname = lastname,
        this.email = email,
        this.password = password,
        this.matricNumber = matricNumber,
        this.program = program,
        this.graduationYear = graduationYear
    }

    getFullName() {
        return `${this.firstname} ${this.lastname}`
    }
}

class Users extends DataModel {
    authenticate(email, password) {
       let check = this.data.filter(elem => (elem.email === email && elem.password === password))
       if (check.length > 0) {
           return true
       }
       return false
    }

    getByEmail(email) {
        let userObj = this.data.find(e => e.email === email)
        if (userObj) {
            return userObj
        }
        return null
    }

    getByMatricNumber(matricNumber) {
        let userObj = this.data.find(e => e.matricNumber === matricNumber)
        if (userObj) {
            return userObj
        }
        return null
    }

    validate(obj) {
        let checkValidation = true
        if (obj.graduationYear.length === 0||obj.password.length < 7||obj.program.length === 0||obj.password.length === 0 ||obj.lastname.length === 0 ||obj.matricNumber.length === 0 || obj.firstname.length === 0 ||obj.email.length === 0 ) {
            return false
        }

            if (checkValidation) {
               checkValidation = this.data.some(e => e.email === obj.email)
               return checkValidation
            }
            if(checkValidation) {
               checkValidation = this.data.some(e => e.matricNumber === obj.matricNumber)
                return checkValidation
            }
            if (checkValidation) {
                checkValidation = this.data.some(eachObj => JSON.stringify(eachObj) !== JSON.stringify(obj))
                return checkValidation
            }
            return false
            
            
       
        
    }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
    User,
    Users
};