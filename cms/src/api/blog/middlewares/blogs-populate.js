"use strict";

/**
 * `blogs-populate` middleware
 */

const populate = {
  mainImage: {
    populate: true,
    fields: ["name", "url"],
  },
  tours: {
    populate: {
      mainImage: {
        populate: true,
        fields: ["name", "url"],
      },
    },
    fields: ["title", "previewDescription"],
  },
  localizations: {
    populate: true,
    fields: ["locale"],
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In blogs-populate middleware.");

    ctx.query = {
      populate,
      ...ctx.query,
    };

    await next();
  };
};
