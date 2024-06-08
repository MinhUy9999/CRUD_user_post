require('dotenv').config();

const express = require('express')
const MongoDB = require('./database/mongodb');
const router = require('./routers/router');
const app = express()
app.use(express.json())
// configDotenv()
// connect mongodb
app.use(router)


module.exports = app