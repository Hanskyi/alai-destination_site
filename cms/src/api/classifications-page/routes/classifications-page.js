'use strict';

/**
 * classifications-page router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::classifications-page.classifications-page', {
  config: {
    find: {
      middlewares: ['api::classifications-page.classifications-page-populate'],
    },
  },
});
