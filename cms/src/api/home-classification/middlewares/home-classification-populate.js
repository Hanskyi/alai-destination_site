'use strict';

/**
 * `home-classification-populate` middleware
 */

const populate = {
  classifications:{
    populate:{
      image:{
        populate:true,
        fields:['url','name']
      },
    },
    fields:['title'],
  },
  localizations:{
    populate:true,
    fields:['locale'],
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In home-classification-populate middleware.');

    ctx.query = {
      populate,
      ...ctx.query,
    };

    await next();
  };
};
