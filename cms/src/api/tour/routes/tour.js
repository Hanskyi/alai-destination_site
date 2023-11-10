'use strict';

/**
 * tour router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::tour.tour', {
  config: {
    find: {
      middlewares: ['api::tour.tours-populate'],
    },
    findOne: {
      middlewares: ['api::tour.tours-populate'],
    },
  },
});
