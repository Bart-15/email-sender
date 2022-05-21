const isEmpty = require('./isEmpty');
const validator = require('validator');


const mailInputValidator = (data) => {
    let errors = {};


    data.name = data.name ?  data.name : "";
    data.email = data.email ?  data.email : "";
    data.message = data.message ? data.message : "";


    if(validator.isEmpty(data.name)) {
        errors.name = "Name field is required.";
    }

    if(validator.isEmpty(data.email)) {
        errors.email = "Text field is required."
    }

    if(validator.isEmpty(data.message)) {
        errors.message = "Message field is required."
    }


    return {errors, isValid:isEmpty(errors)}

}

module.exports = mailInputValidator;