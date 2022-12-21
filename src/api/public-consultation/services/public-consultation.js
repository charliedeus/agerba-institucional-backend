'use strict';

/**
 * public-consultation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::public-consultation.public-consultation');
