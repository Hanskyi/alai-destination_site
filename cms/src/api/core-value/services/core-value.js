'use strict';

/**
 * core-value service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::core-value.core-value');
