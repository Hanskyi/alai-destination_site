"use strict";

/**
 * location router
 */

//api::location.locations-populate'

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::location.location", {
  config: {
    find: {
      middlewares: ["api::location.locations-populate"],
    },
    findOne: {
      middlewares: ["api::location.locations-populate"],
    },
  },
});
