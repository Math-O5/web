'use strict';

// this scrutre is from https://www.youtube.com/watch?v=PknC5SCkwjo&list=PLHlHvK2lnJndvvycjBqQAbgEDqXxKLoqn&index=24&t=485s
let errors = [];

function ValidationContract() {
    errors = [];
}

ValidationContract.prototype.isRequired = (value, message) => {
    if (!value || value.length <= 0)
        errors.push({ message: message });
}

ValidationContract.prototype.hasMinLen = (value, min, message) => {
    if (!value || value.length < min)
        errors.push({ message: message });
}

ValidationContract.prototype.hasMaxLen = (value, max, message) => {
    if (!value || value.length > max)
        errors.push({ message: message });
}

ValidationContract.prototype.isFixedLen = (value, len, message) => {
    if (value.length != len)
        errors.push({ message: message });
}

ValidationContract.prototype.isLowerCase = (value , message) => {
    if (value.toLowerCase() != value)
        errors.push({ message: message });
}

ValidationContract.prototype.hasSpace = (value , message) => {
    if (value.includes(" "))
        errors.push({ message: message });
}

ValidationContract.prototype.isEqual = (value , confirm, message) => {
    if (value === !confirm)
        errors.push({ message: message });
}

ValidationContract.prototype.isEmail = (value, message) => {
    var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    if (!reg.test(value))
        errors.push({ message: message });
}

ValidationContract.prototype.errors = () => { 
    return errors; 
}

ValidationContract.prototype.firstError = () => { 
    if(errors.length)
        return errors[0]; 
    return '';
}

ValidationContract.prototype.clear = () => {
    errors = [];
}

ValidationContract.prototype.isValid = () => {
    return errors.length == 0;
}

module.exports = ValidationContract;