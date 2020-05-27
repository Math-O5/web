/*
    Desenvolvido por:
    Nome: Mathias Fernandes
    USP:  10734352
    email: mathfernandes@usp.br
    email2: mathfern4@gmail.com

    Explicação das pastas em  README.md
*/ 
'use strict'

const StoreModel = require('./store');
let store = {}

function UserStore() {
    store = {};
}

function UserStore(id) {
    store[id] = new StoreModel();
}

/**
 *  @function add a note to a user.
 *  @param id user.
 *  @param key to a new note.
 *  @param value the text of a note.
 *  @return all notes created.
 */
UserStore.prototype.add = (id, key, value) => {
    // if the key is not valid or store does not exist
    if (!key.length)
        throw new Error('Error on search');
    
    // try create if not exist
    if(store[id] == undefined)
        new UserStore(id);

    if(store[id] == undefined)
        throw new Error('Error on search');

    try {
        return store[id].add(key, value);
    } catch(e) {
        throw new Error('Error on add'); 
    }
}

/**
 *  @function get all notes of the user.
 *  @param id user.
 *  @param key to a note.
 *  @return all notes already created.
 */
UserStore.prototype.getAll = (id) => {
    // try create if not exist
    if(store[id] == undefined)
        new UserStore(id);

    if(store[id] == undefined)
        throw new Error('Error on search user');

    try {
        return store[id].getAll();
    } catch(e) {
        throw new Error('Error on get notes'); 
    }
}

/**
 *  @function get all notes of the user.
 *  @param id user.
 *  @param key to a note.
 *  @return the value of associate key notes.
 */
UserStore.prototype.getKey = (id, key) => {
    // if the key is not valid or store does not exist
    if (!key.length)
    throw new Error('Error on search');

    // try create if not exist
    if(store[id] == undefined)
        new UserStore(id);

    if(store[id] == undefined)
        throw new Error('Error on search');

    try {
        return store[id].get(key);
    } catch(e) {
        throw new Error('Error on add'); 
    }
}

/**
 *  @function edit a note to a user.
 *  @param id user.
 *  @param key to a previous or new note.
 *  @param value the text of a note.
 *  @return all notes created.
 */
UserStore.prototype.edit = (id, key, value) => {
    // if the key is not valid or store does not exist
    if (!key.length)
        throw new Error('Error on search');
    
    // try create if not exist
    if(store[id] == undefined)
        new UserStore(req.body.id);

    if(store[id] == undefined)
        throw new Error('Error on search');

    try {
        return store[id].put(key, value);
    } catch(e) {
        throw new Error('Error on edit'); 
    }
}

/**
 *  @function remove a note of the user.
 *  @param id user.
 *  @param key to remove the note.
 *  @return all notes in the database.
 */
UserStore.prototype.remove = (id, key) => {
    // if the key is valid and notes exist not exist
    if (!key.length || store[id] == undefined)
        throw new Error('Error on search');

    try {
        store[id].remove(key);
        return;
    } catch(e) {
        throw new Error('Error on edit'); 
    }
}

module.exports = UserStore;