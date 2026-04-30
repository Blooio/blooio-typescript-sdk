// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ContactCardAPI from './contact-card';
import {
  ContactCard,
  ContactCardRetrieveResponse,
  ContactCardUpdateParams,
  ContactCardUpdateResponse,
} from './contact-card';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Manage phone numbers linked to your account
 */
export class Numbers extends APIResource {
  contactCard: ContactCardAPI.ContactCard = new ContactCardAPI.ContactCard(this._client);

  /**
   * List all phone numbers bound to this API key with their availability status. Use
   * the returned phone numbers as the `:number` path parameter for other
   * `/me/numbers/` endpoints.
   */
  list(options?: RequestOptions): APIPromise<NumberListResponse> {
    return this._client.get('/me/numbers', options);
  }
}

export interface NumberListResponse {
  numbers?: Array<NumberListResponse.Number>;
}

export namespace NumberListResponse {
  export interface Number {
    is_active?: boolean;

    last_active?: string | null;

    phone_number?: string;
  }
}

Numbers.ContactCard = ContactCard;

export declare namespace Numbers {
  export { type NumberListResponse as NumberListResponse };

  export {
    ContactCard as ContactCard,
    type ContactCardRetrieveResponse as ContactCardRetrieveResponse,
    type ContactCardUpdateResponse as ContactCardUpdateResponse,
    type ContactCardUpdateParams as ContactCardUpdateParams,
  };
}
