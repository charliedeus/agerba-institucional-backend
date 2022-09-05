'use strict';

/**
 * meeting-note service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::meeting-note.meeting-note');
