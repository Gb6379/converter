const express = require("express");
const bodyParser = require('body-parser');
let port = 3000
const routes = require('./routes');

const cors = require('cors');
var session = require('express-session')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const jwt = require('jsonwebtoken');

const app = express();

const corsOptions = {
    exposedHeaders: 'refreshtoken',
};  
app.use(cors(corsOptions));

app.use(bodyParser.json({limit: '50mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))


app.use(routes)

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`)
});