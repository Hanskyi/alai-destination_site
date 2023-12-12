'use strict';

/**
 * tour router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::tour.tour', {
  config: {
    find: {
      middlewares: ['api::tour.tours-populate'],
      handler: 'Tour.find', // Define a handler for the find action
      method: 'GET',
      path: '/tours', // Define the path for the find action
    },
    findOne: {
      middlewares: ['api::tour.tours-populate'],
    },
    getTourReviews: {
      middlewares: ['api::tour.tours-reviews'],
      handler: 'Tour.getTourReviews',
      method: 'GET',
      path: '/tours/:tourId/reviews',
      policies: [], // Add any policies or middlewares if needed
    },
  },
});
