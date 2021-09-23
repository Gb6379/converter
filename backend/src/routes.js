const express = require("express")
const routes = express.Router()
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })


//Routes
xmlkRoute = require("./routes/xmlroute")

routes.use(xmlkRoute)

module.exports = routes;