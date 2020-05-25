## Start
```npm install``` and ```npm start```

## Instação dos pacotes
Pelo prompt abra a pasta api e digite ```npm install``` para instalar as dependencias descritas nos package*.json. Optionally, run nodemon with ```nodemon .api/bin/server.js```.
 
### Using http tool
ADD -> send POST with JSON:
```
    {
        "key" : "anyKey",
        "value" : "anyValue"
    }
```

SEARCH -> send GET with JSON:
```
    {
        "key" : "anyKey",
    }
```

PUT -> send PUT with JSON:
```
    {
        "key" : "anyKey",
        "value" : "anyValue"
    }
```

DELETE -> send DELETE with JSON:
```
    {
        "key" : "anyKey",
    }
```