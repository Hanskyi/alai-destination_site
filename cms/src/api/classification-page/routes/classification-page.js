'use strict';

/**
 * classification-page router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::classification-page.classification-page', {
  config: {
    find: {
      middlewares: ['api::classification-page.classification-page-populate'],
    },
  },
});
