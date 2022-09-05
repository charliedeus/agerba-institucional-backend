'use strict';

/**
 * terminal service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::terminal.terminal');
