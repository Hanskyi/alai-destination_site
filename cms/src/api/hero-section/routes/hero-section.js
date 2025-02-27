'use strict';

/**
 * hero-section router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::hero-section.hero-section', {
  config: {
    find: {
      middlewares: ['api::hero-section.hero-section-populate'],
    },
  },
});
