'use strict';

/**
 * legislation service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::legislation.legislation');
