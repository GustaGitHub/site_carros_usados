const express = require('express')
const app = express()
const cors = require('cors')
const port = 12000

const stock_Api = require('./api/stock.json')

//Cors
app.use(cors())

//Body-Parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/stock', (req, res, next) => {
   res.json(stock_Api)
})

app.listen(port, (req, res)=>{
   console.log(`Servidor Rodando na Porta ${port}`)
})