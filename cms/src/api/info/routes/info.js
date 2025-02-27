'use strict';

/**
 * info router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::info.info',{
  config: {
    find: {
      middlewares: ['api::info.info-populate'],
    },
  },
});
