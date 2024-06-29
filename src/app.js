require('dotenv').config();

const express = require('express')
const MongoDB = require('./database/mongodb');
const router = require('./routers/router');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const app = express()
app.use(express.json())
// configDotenv()
// connect mongodb
app.use(router)
const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API Documentation',
        version: '1.0.0',
        description: 'A simple Express API application',
      },
    },
    apis: ['src/swagger/swagger.js'], // Path to the API docs
  };
  
  const specs = swaggerJsdoc(options);
  
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

module.exports = app