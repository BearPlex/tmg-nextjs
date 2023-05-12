'use strict';

/**
 * work-kinimo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::work-kinimo.work-kinimo');
