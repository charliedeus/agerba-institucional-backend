'use strict';

/**
 * search-result service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::search-result.search-result');
