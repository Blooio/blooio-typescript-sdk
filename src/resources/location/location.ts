// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ContactsAPI from './contacts';
import { ContactListResponse, ContactLocation, ContactRefreshResponse, Contacts } from './contacts';

export class Location extends APIResource {
  contacts: ContactsAPI.Contacts = new ContactsAPI.Contacts(this._client);
}

Location.Contacts = Contacts;

export declare namespace Location {
  export {
    Contacts as Contacts,
    type ContactLocation as ContactLocation,
    type ContactListResponse as ContactListResponse,
    type ContactRefreshResponse as ContactRefreshResponse,
  };
}
