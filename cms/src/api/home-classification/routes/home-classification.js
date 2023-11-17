'use strict';

/**
 * home-classification router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::home-classification.home-classification',{
  config: {
    find: {
      middlewares: ['api::home-classification.home-classification-populate'],
    },
  },
});
