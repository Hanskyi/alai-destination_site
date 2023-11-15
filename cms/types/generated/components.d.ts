import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedAddress extends Schema.Component {
  collectionName: 'components_shared_addresses';
  info: {
    displayName: 'address';
  };
  attributes: {
    address: Attribute.String & Attribute.Required;
  };
}

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

export interface SharedContacts extends Schema.Component {
  collectionName: 'components_shared_contacts';
  info: {
    displayName: 'Contacts';
  };
  attributes: {
    socialLinks: Attribute.Component<'shared.link', true> & Attribute.Required;
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
      'shared.address': SharedAddress;
      'shared.card': SharedCard;
      'shared.contacts': SharedContacts;
      'shared.link': SharedLink;
    }
  }
}
