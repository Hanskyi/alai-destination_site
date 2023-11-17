'use strict';

/**
 * `purpose-block-populate` middleware
 */

const populate = {
    purposeImage: {
      populate: true,
      fields: ["name", "url"]
    },
    certifiedIcon: {
      populate: true,
      fields: ["name", "url"]
    },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In purpose-block-populate middleware.');

    ctx.query = {
      populate,
      ...ctx.query,
    };

    await next();
  };
};
