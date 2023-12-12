'use strict';

/**
 * tour controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::tour.tour', {
  async getTourReviews(ctx) {
    const {tourId} = ctx.params;

    try {
      const reviews = await strapi.query('review').find({tour: tourId});
      ctx.send({reviews});
    } catch (error) {
      ctx.throw(500, 'Internal Server Error');
    }
  },
});
