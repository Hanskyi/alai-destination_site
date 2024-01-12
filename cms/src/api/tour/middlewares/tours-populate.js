"use strict";

/**
 * `tours-populate` middleware
 */

const populate = {
  classification: {
    populate: true,
    fields: ["title"],
  },
  location: {
    populate: true,
    fields: ["name"],
  },
  mainImage: {
    populate: true,
    fields: ["name", "url"],
  },
  images: {
    populate: true,
    fields: ["name", "url"],
  },
  scheduleTable: {
    populate: true,
    fields: ["heading", "body"],
  },
  faqList: {
    populate: true,
    fields: ["heading", "body"],
  },
  localizations: {
    populate: true,
    fields: ["locale"],
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In tours-populate middleware.");

    ctx.query = {
      populate,
      ...ctx.query,
    };

    await next();
  };
};
