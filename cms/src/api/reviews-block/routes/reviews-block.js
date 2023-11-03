'use strict';

/**
 * reviews-block router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::reviews-block.reviews-block', {
  config: {
    find: {
      middlewares: ['api::reviews-block.reviews-block-populate'],
    },
  },
});
