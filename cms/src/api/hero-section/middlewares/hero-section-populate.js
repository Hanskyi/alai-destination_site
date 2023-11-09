'use strict';

/**
 * `hero-section-populate` middleware
 */

const populate = {
  image: {
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
    strapi.log.info('In hero-section-populate middleware.');

    ctx.query = {
      populate,
      ...ctx.query,
    };

    await next();
  };
};
