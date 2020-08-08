const express = require('express')
const axios = require('axios')
const routes = require('./src/routes')

const port = 3000
const app = express()

routes(app)

app.listen(3000, ()=> {
     console.log(`Servidor rodando na porta ${port}`)
})
