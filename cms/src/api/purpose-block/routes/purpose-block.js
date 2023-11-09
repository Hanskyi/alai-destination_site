'use strict';

/**
 * purpose-block router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::purpose-block.purpose-block', {
  config: {
    find: {
      middlewares: ['api::purpose-block.purpose-block-populate'],
    },
  },
});
