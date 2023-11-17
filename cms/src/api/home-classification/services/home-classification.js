'use strict';

/**
 * home-classification service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-classification.home-classification');
