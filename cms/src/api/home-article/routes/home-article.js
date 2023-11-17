'use strict';

/**
 * home-article router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::home-article.home-article',{
  config: {
    find: {
      middlewares: ['api::home-article.home-article-populate'],
    },
  },
});
