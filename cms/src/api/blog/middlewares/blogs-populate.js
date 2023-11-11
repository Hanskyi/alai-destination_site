'use strict';

/**
 * `blogs-populate` middleware
 */

const populate = {
  mainImage: {
    populate: true,
    fields: ["name", "url"]
  },
  localizations: {
    populate: true
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In blogs-populate middleware.');

    ctx.query = {
      populate,
      ...ctx.query,
    };

    await next();
  };
};
