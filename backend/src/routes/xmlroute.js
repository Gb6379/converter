const express = require('express')
const routes = express.Router()
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const xmlController =  require("../controllers/xmlcontroller")

routes.get("/teste", xmlController.teste);
routes.get("/caixa", xmlController.caixa);

module.exports = routes;