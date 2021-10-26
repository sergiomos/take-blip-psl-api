const express = require('express');

const routes = express.Router();

const takeBlip = require('../controllers/takeblip.controller');

routes.get('/repos', takeBlip.getOldestRepositories)

module.exports = routes;
