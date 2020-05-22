# Instação dos pacotes
Pelo prompt abra a pasta api e digite ```npm install``` para instalar as dependencias descritas nos package*.json.

## Executação e compilação
Pelo prompt abra a pasta api e digite  ```npm start``` para compilar e executar o servidor.

## Usando a aplicação
Após iniciar o servidor, abra o arquivo index.html em um Broswer (Chorme, Firefox, Safari), 

Default user:
        username: 123345
        password: 123456789

/ api
   | -> bin : simple server node js
   | -> / src
             |  -> controllers : All methods of applcation.
             |  -> models      : Table User
             |  -> routes      : All path of aplication.
             |  -> validators  : validates before salve in database.
             |  config.js : conection with database (URL)
/ index.html : frontend of all aplication  

<img href="img/login.png"></img>

## Questões 
1. What is the Event Loop and how is it used by Node.js?
    O event loop é o mecânismo do node pensando para ele ser comportar assincronamente e de non-blocking I/O. Segundo a documentação do Node.js, este executa em uma única thread, e vai atendendendo as funções com a call stack. Todas funções são empilhadas lá e atendendidas em ordem LIFO (Last In First Out). Outra estrutura no event loop é o Message Queue, que guarda eventos de I/O, DOM events e funções passadas através do "setTimeout(() => {}, 0)", por exemplo. A fila server para a call stack executar e não acontecer nenhum comportamento inesperado. Essa fila só é executada quando a call stack está vazia.
    Assim, um ponto importante a se observar, se a call stack sobrecarregar, eventos da queue como eventos do usuários podem "congelar". 
    Por isso, no ES6 Job Queue (ECMAScript 2015), permite-se que um resultado de uma função assincrona seja calculado o quanto antes, em vez de esperar que a call stack fique vazia.

2. How can you access the DOM on Node.js? 
    O DOM é provida pelo browser e comumente acessada com javascript no client-side. No entanto, pode-se acessar o DOM também através de server-side com Node.js, o qual por default este não tem nenhuma ligação.
    Para acessa o DOM com Node, pode-se usar alguns m   ódulos como jsdom. 

3. Implemetantion of user-login application using node.js.

### Sources: 
http://code.google.com/apis/v8/intro.html
https://nodejs.dev/the-nodejs-event-loop