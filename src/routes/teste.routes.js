const { Router }  = require('express')
const controllerBook = require('../controllers/consult_books')


const router = Router()

router.get('/allbooks', controllerBook.get)

module.exports = router