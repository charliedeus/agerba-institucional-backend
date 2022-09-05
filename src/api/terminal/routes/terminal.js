'use strict';

/**
 * terminal router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::terminal.terminal');
