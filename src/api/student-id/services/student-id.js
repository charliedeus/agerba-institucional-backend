'use strict';

/**
 * student-id service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::student-id.student-id');
