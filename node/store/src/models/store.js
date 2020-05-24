/*
    Desenvolvido por:
    Nome: Mathias Fernandes
    USP:  10734352
    email: mathfernandes@usp.br
    email2: mathfern4@gmail.com

    Explicação das pastas em  README.md
*/ 
'use strict'

const forbiden = /[\s!@#$%^&*()_+\-=\[\]{};:\\|,.<>\/?]/;

let user = {}


function Store() {
    user = {};
}

/**
 * @return value if sucess or error if fail
 * 
 */
Store.prototype.add = (key, value) => {
    // if the key is valid and does not exist
    if (!key.length || !value.length || user[key] !== undefined || key.match(forbiden) !== null) {
        throw new Error('Error on search');
    }

    user[key] = value;
    return user[key];
}

Store.prototype.put = (key, value) => {

    // update or create key => value
    if (!key.length || !value.length || key.match(forbiden) !== null)
        throw new Error('Error on search');
    return user[key] = value;
}

/*
    Return key => value
    if not exist return undefined
*/
Store.prototype.get = (key) => {
    if (!key.length || user[key] == undefined || key.match(forbiden) !== null) {
        throw new Error('Error on search');
    }
    return user[key];
}

Store.prototype.remove = (key, value) => {
    if (!key.length || key.match(forbiden) !== null)
        return null;
    delete user[key];
}

module.exports = Store;