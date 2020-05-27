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

let notes = {}


function Store() {
    notes = {};
}

/**
 * @return value if sucess or error if fail
 * 
 */
Store.prototype.add = (key, value) => {
    // if the key is valid and does not exist
    if (!key.length || !value.length || notes[key] !== undefined || key.match(forbiden) !== null) {
        throw new Error('Error on search');
    }

    notes[key] = value;
    return notes[key];
}

Store.prototype.put = (key, value) => {

    // update or create key => value
    if (!key.length || !value.length || key.match(forbiden) !== null)
        throw new Error('Error on search');
    return notes[key] = value;
}

/*
    Return key => value
    if not exist return undefined
*/
Store.prototype.getKey = (key) => {
    if (!key.length || notes[key] == undefined || key.match(forbiden) !== null) {
        throw new Error('Error on search');
    }
    return notes[key];
}

// return all elements
Store.prototype.getAll = () => {
    return Object.entries(notes);
}


Store.prototype.remove = (key) => {
    if (!key.length || key.match(forbiden) !== null)
        return null;
    delete notes[key];
}

module.exports = Store;