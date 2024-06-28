const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/rota', (req, res) => {
  res.send('Yaninha do coração!')
})

app.use(express.json()) // Parseia o corpo da requisição JSON

app.post('/', (req, res) => {
  // Manipulador de requisição POST
  // ...
  res.send('Cadastro realizado com sucesso!')
})

app.listen(port, () => {
  console.log(`App online na porta: http://localhost:${port}/`)
})
