const dotEnv = require("dotenv");
const express = require("express");
const mongoose = require('mongoose');
const routes = require("./routes")
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerDefinition from '../api-doc-explorer/swagger-definition';
import config from './config'

dotEnv.config();

mongoose.connect(config.mongoDB, {useNewUrlParser: config.useNewUrlParser}).then();
const port = parseInt(process.env.PORT, 10) || 3000;
const app = express();

const swaggerSpec = swaggerJSDoc({
    swaggerDefinition,
    apis: ['./src/routes/index.js'],
});
app.use('/api-doc-explorer', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/v01', (req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
}, routes)
app.listen( port, (err) => {
    if (err) { throw { message: "Error starting server. " + err.message }; }
});
process.setMaxListeners(0);

module.exports = app;

