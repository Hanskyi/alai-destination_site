'use strict';

/**
 * `info-populate` middleware
 */

const populate = {
  socialLinks:{
    populate:{
      icon:{
        populate:true,
        fields:['name','url']
      }
    },
    fields:['href'],
  },
  logo:{
    populate:true,
    fields:['name','url']
  }
}

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In info-populate middleware.');

    ctx.query = {
      populate,
      ...ctx.query,
    };

    await next();
  };
};
