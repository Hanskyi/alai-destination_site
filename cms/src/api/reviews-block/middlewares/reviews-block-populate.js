'use strict';

/**
 * `reviews-block-populate` middleware
 */

const populate = {
  review: {
    populate: {
      profileImage: {
        populate: true,
        fields: ["name", "url"]
      }
    },
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In reviews-block-populate middleware.');

    ctx.query = {
      populate,
      ...ctx.query,
    };

    await next();
  };
};
