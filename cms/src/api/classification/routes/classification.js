'use strict';

/**
 * classification router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::classification.classification', {
  config: {
    find: {
      middlewares: ['api::classification.classifications-populate'],
    },
    findOne: {
      middlewares: ['api::classification.classifications-populate'],
    },
  },
});
