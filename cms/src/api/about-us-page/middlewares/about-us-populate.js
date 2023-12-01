"use strict";

/**
 * `about-us-populate` middleware
 */

const populate = {
  bannerImage: {
    populate: true,
    fields: ["url", "name"],
  },
  bannerIcon: {
    populate: true,
    fields: ["url", "name"],
  },
  missionIcon: {
    populate: true,
    fields: ["url", "name"],
  },
  coreValues: {
    populate: {
      icon: {
        populate: true,
        fields: ["url", "name"],
      },
    },
    fields: ["title", "description"],
  },
  partners: {
    populate: {
      logo: {
        populate: true,
        fields: ["url", "name"],
      },
    },
    fields: ["link"],
  },
  awardsImages: {
    populate: true,
    fields: ["url", "name"],
  },
  counter: {
    populate: {
      icon: {
        populate: true,
        fields: ["url", "name"],
      },
    },
    fields: ["title", "counter"],
  },
  counterBanner: {
    populate: true,
    fields: ["url", "name"],
  },
  localizations: {
    populate: true,
    fields: ["locale"],
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In about-us-populate middleware.");

    ctx.query = {
      populate,
      ...ctx.query,
    };

    await next();
  };
};
