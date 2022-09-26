'use strict';

/**
 * gas-tariff service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gas-tariff.gas-tariff');
