'use strict';

/**
 * `home-tour-populate` middleware
 */

const populate = {
  tours:{
    populate:{
      mainImage:{
        populate:true,
        fields:['url','name']
      },
      classification:{
        populate:true,
        fields:['title']
      },
    },
    fields:['title','duration','price']
  },
  localizations:{
    populate:true,
    fields:['locale'],
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In home-tour-populate middleware.');

    ctx.query = {
      populate,
      ...ctx.query,
    };

    await next();
  };
};
