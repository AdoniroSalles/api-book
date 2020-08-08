const bodyParser = require('body-parser')
const teste = require('./teste.routes')

module.exports = app => {

     app.use(bodyParser.json())
     app.use(bodyParser.urlencoded({extended: true}))
     app.use(teste)

     app.get('/', (req,res) => res.send('Teste de rota'))
}