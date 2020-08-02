/**
 * autor: Mathias Fernandes
 * nusp: 10734352
 * email pessoal: mathfern4@gmail.com
 * emailUSP: mathfernandes@usp.br
 */

// source: https://www.w3schools.com/nodejs/nodejs_get_started.asp
// source: https://www.youtube.com/watch?v=Sk8oVqV0XEU&list=PLHlHvK2lnJndvvycjBqQAbgEDqXxKLoqn&index=26&t=0s
'use strict'

console.log("Iniciando Servidor ...");

const app = require('../src/app')
const http = require('http');
const debug = require('debug')('nodestr:server');

/********************************************************/
// Instancias
const port = choicePort(process.env.PORT || '3000');
app.set('port', port);
/********************************************************/

/********************************************************/
// Criar servidor
const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

console.log('API ouvindo na porta ' + port);
/********************************************************/

/********************************************************/
// Normalização da porta : escolhe uma porta disponível para 
// carregar o servidor
function choicePort(value) {
    const port = parseInt(value, 10);

    if(isNaN(port)) {
        return value;
    }

    if(port >= 0) {
        return port;
    }

    return false;
}
/********************************************************/

/********************************************************/
// Handler Error
function onError(error) {
    if(error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;
    
    switch(error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges')
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use')
            process.exit(1);
            break;
        default: 
            throw error;
    }
}
/********************************************************/

/********************************************************/
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
/********************************************************/
