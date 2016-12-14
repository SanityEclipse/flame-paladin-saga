"use strict"

require('dotenv').config();
const environment = process.env.NODE_ENV || 'development';
const knex = require('knex');
const config = require('../knexfile')[environment];

let pg = knex(config[environment]);

module.exports = pg
