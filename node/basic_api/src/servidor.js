const porta = 3003
const express = require('express')
const app = express()
const db = require('./db.js')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true })) // qualquer requisicao passa por aqui

app.get('/produtos', (req, res, next) => {
    res.send(db.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    console.log(req, res, next)
    res.send(db.getProduto(req.params.id))
})

// former
app.post('/produtos', (req, res, next) => {
    const produto = db.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.listen(porta, () => {
    console.log('Servidor executando na porta ${porta}')
})