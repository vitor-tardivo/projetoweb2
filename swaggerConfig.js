const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'User API',
      version: '1.0.0',
      description: 'A simple CRUD API for managing users',
    },
    servers: [
      {
        url: 'http://localhost:3000/',
      },
    ],
  },
  apis: ['./routes/UserRoutes.js'], // Caminho para os arquivos onde você define as rotas da API
};

const swaggerSpecs = swaggerJsdoc(options);

module.exports = swaggerSpecs;