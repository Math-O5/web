const express = require('express')
const app = express()
const bodyParser = require('body-parser') // parse em body do requuest

app.use(bodyParser.urlencoded({ extended: true}))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns Usuario alterado</h1>')
})

app.listen(3003)