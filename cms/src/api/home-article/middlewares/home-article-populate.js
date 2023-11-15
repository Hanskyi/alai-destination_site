'use strict';

/**
 * `home-article-populate` middleware
 */

const populate = {
  blogs:{
    populate:{
      localizations:{
        populate:true,
        fields:['locale']
      },
    },
    fields:['author','title','previewDescription','createdAt'],
  },
  localizations:{
    populate:true,
    fields:['locale']
  }
}

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In home-article-populate middleware.');

    ctx.query = {
      populate,
      ...ctx.query,
    };

    await next();
  };
};
