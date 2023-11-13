import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedCard extends Schema.Component {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    review: Attribute.Text & Attribute.Required;
    profileImage: Attribute.Media & Attribute.Required;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    href: Attribute.String & Attribute.Required;
    icon: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.card': SharedCard;
      'shared.link': SharedLink;
    }
  }
}
