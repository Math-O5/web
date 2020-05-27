# Login and Store Notes App!
App Store Key-Value with Login!
  
<img src="assets/login.png"></img>

# Instação dos pacotes

Pelo prompt abra a pasta ```cd api/``` e digite ```npm install``` para instalar as dependencias descritas nos package*.json. Optionally, run nodemon with ```nodemon .api/bin/server.js```.
 
## Executação e compilação

Pelo prompt abra a pasta ```cd api/``` api e digite  ```npm start``` para compilar e executar o servidor.

## Usando a aplicação

Após iniciar o servidor, abra o arquivo index.html em um Broswer (Chorme, Firefox, Safari), 

/Default users:</br>
|        email: enrico@hotmail.com</br>
|        password: miojomiojo</br>
|
```
/ backend
| - | -> bin : simple server node js
| - | -> / src
|     -      |  -> controllers : All methods of applcation.
|     -      |  -> models      : Table User
|     -      |  -> routes      : All path of aplication.
|     -      |  -> validators  : validates before salve in database.
|     -      |  config.js : conection with database (URL)
/ index.html : frontend of all aplication  
```

## Requisições

Registration on http://localhost:3001/users/newUser/register, , METHOD: POST
```
{
    "username": "juliano",
    "email": "enrico@hotmail.com",
    "password": "miojomiojo",
    "confirm_password": "miojomiojo",
    "address": "moroAquiNaoSenho So morado de rua"
}
``` 

Response success:
```
{
    "message": "User cadastrado com sucesso."
}
```
Login in http://localhost:3001/users/login, METHOD: POST
```
{
    {
	    "email":"enrico@hotmail.com",
	    "password":"miojomiojo"
    }
}
``` 
Response success, (atenção o token é válido por um dia):
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlY2Q5ZmQ5ZDgyNmU5NDAwODA3OTdmZiIsImVtYWlsIjoiZW5yaWNvQGhvdG1haWwuY29tIiwibmFtZSI6Imp1bGlhbm8iLCJpYXQiOjE1OTA1MzY2ODksImV4cCI6MTU5MDYyMzA4OX0.NJtD9j0kgrZfaRcn1jQt1jePiEQBLFkSvTA0v5mHczU",
    "data": {
        "id": "5ecd9fd9d826e940080797ff",
        "username": "juliano",
        "email": "enrico@hotmail.com",
        "address": "moroAquiNaoSenho So morado de rua",
        "sucess": true
    },
    "message": "Acesso liberado!"
}
```

Add nota http://localhost:3001/store, , METHOD: POST
```
{
    {
	    "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlY2Q5ZmQ5ZDgyNmU5NDAwODA3OTdmZiIsImVtYWlsIjoiZW5yaWNvQGhvdG1haWwuY29tIiwibmFtZSI6Imp1bGlhbm8iLCJpYXQiOjE1OTA1MzY2ODksImV4cCI6MTU5MDYyMzA4OX0.NJtD9j0kgrZfaRcn1jQt1jePiEQBLFkSvTA0v5mHczU",
	    "key":"AnyKey",
        "value":"AnyValueKey"
    }
}
``` 
Recuperar todas as notas http://localhost:3001/store, , METHOD: GET
```
{
    {
	    "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlY2Q5ZmQ5ZDgyNmU5NDAwODA3OTdmZiIsImVtYWlsIjoiZW5yaWNvQGhvdG1haWwuY29tIiwibmFtZSI6Imp1bGlhbm8iLCJpYXQiOjE1OTA1MzY2ODksImV4cCI6MTU5MDYyMzA4OX0.NJtD9j0kgrZfaRcn1jQt1jePiEQBLFkSvTA0v5mHczU",
    }
}
``` 
Response success, (atenção o token é válido por um dia):
```
{
    "data": {
        [["key1", "value1"], ..., ["keyN", "valueN"]],
    }
}
```



3. Implemetantion of user-login application using node.js.

### Sources: 
http://code.google.com/apis/v8/intro.html</br>
https://nodejs.dev/the-nodejs-event-loop