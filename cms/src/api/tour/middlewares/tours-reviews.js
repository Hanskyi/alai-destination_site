'use strict';

/**
 * `tours-reviews` middleware
 */

const populate = {
  reviews: {
    populate: {
      users_permissions_user:{
        populate:true,
        fields:["username"]
      },
    },
    fields: ["review", "rating", "createdAt", "displayName", "users_permissions_user"],
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In tours-reviews middleware.');

    ctx.query = {
      populate,
      ...ctx.query,
    };

    await next();
  };
};
