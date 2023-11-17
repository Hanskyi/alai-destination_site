'use strict';

/**
 * home-tour router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::home-tour.home-tour',{
  config: {
    find: {
      middlewares: ['api::home-tour.home-tour-populate'],
    },
  },
});

