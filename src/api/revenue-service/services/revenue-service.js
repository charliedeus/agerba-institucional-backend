'use strict';

/**
 * revenue-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::revenue-service.revenue-service');
