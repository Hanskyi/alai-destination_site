'use strict';

/**
 * `reviews-populate` middleware
 */

const populate = {
  users_permissions_user:{
    populate: true,
    fields:["id", "username"],
  },
  tour:{
    populate: true,
    fields:["id", "title"],
  }
};

module.exports = (config, {strapi}) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In reviews-populate middleware.');

    ctx.query = {
      populate,
      ...ctx.query,
    };

    await next();
  };
};
