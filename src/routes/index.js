const express = require('express');

const routes = express.Router();

const takeblipRoutes = require('./takeblip');

routes.use('/takeblip', takeblipRoutes)

module.exports = routes;
