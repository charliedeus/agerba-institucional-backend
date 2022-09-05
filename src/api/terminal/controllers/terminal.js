'use strict';

/**
 * terminal controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::terminal.terminal');
