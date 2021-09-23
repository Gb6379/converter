const Data = require("../models/data")
require("dotenv/config")
const axios = require('axios')


teste = (req,res) => {
    console.log("oi")
    res.send("oi")
}

caixa = (req,res) => {
    axios.get('https://appprevhm.caixaseguradora.com.br/webapi/api/Autenticar/ObterTokenInfo')
}

module.exports = { teste, caixa }