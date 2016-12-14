"use strict"

require('dotenv').config();

const knex = require('knex');
const config = require('../knexfile')[environment];
const environment = process.env.NODE_ENV || 'development';

let pg = knex(config[environment]);

module.exports = pg
