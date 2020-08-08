const keyBook = require("../config/const.json")
const axios = require("axios")

module.exports = {

     async get(req, res){

          const { name_book } = req.params
          try {
               const data = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=harry+intitle:potter&key=${keyBook.key_book}`)
               console.log(data.data)
               return res.status(201).send(data.data)
          } catch (error) {
               return res.status(500).send(error)
          }
     }
}