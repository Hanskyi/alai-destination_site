'use strict';

/**
 * `classifications-page-populate` middleware
 */

const populate = {
  bannerImage: {
    populate: true,
    fields: ["name", "url"]
  },
  localizations: {
    populate: true,
    fields:['locale'],
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In classifications-page-populate middleware.');

    ctx.query = {
      populate,
      ...ctx.query,
    };

    await next();
  };
};
