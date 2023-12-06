'use strict';

/**
 * review router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::review.review');

module.exports = createCoreRouter('api::review.review', {
  config: {
    find: {
      middlewares: ['api::review.reviews-populate'],
    },
    findOne: {
      middlewares: ['api::review.reviews-populate'],
    },
  },
});
