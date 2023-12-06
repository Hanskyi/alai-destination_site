'use strict';

/**
 * `reviews-populate` middleware
 */

const populate = {
  /*  path: 'users_permissions_user', // Assuming 'users_permissions_user' is the field linking to the User content type
    populate: {
      path: 'user', // Assuming 'user' is the field linking to the user entity within each review
      select: 'username email', // Select the fields you want to populate in the user entity
    },*/

  user:{
    populate:true,
    fields:["email", "username"]
  }
};

module.exports = (config, { strapi }) => {
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
