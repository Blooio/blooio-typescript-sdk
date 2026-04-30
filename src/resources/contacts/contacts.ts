// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TagsAPI from './tags';
import { TagAddParams, TagAddResponse, TagListResponse, TagRemoveParams, Tags } from './tags';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage contacts (phone numbers and emails)
 */
export class Contacts extends APIResource {
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);

  /**
   * Create a new contact with a phone number (E.164 format) or email address.
   *
   * @example
   * ```ts
   * const contact = await client.contacts.create({
   *   identifier: '+15551234567',
   * });
   * ```
   */
  create(body: ContactCreateParams, options?: RequestOptions): APIPromise<Contact> {
    return this._client.post('/contacts', { body, ...options });
  }

  /**
   * Get details for a specific contact by phone number or email.
   *
   * @example
   * ```ts
   * const contact = await client.contacts.retrieve(
   *   '%2B15551234567',
   * );
   * ```
   */
  retrieve(contactID: string, options?: RequestOptions): APIPromise<Contact> {
    return this._client.get(path`/contacts/${contactID}`, options);
  }

  /**
   * Update a contact's name.
   *
   * @example
   * ```ts
   * const contact = await client.contacts.update(
   *   '%2B15551234567',
   * );
   * ```
   */
  update(contactID: string, body: ContactUpdateParams, options?: RequestOptions): APIPromise<Contact> {
    return this._client.patch(path`/contacts/${contactID}`, { body, ...options });
  }

  /**
   * List all contacts for the organization with optional search and pagination.
   *
   * @example
   * ```ts
   * const contacts = await client.contacts.list();
   * ```
   */
  list(
    query: ContactListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ContactListResponse> {
    return this._client.get('/contacts', { query, ...options });
  }

  /**
   * Soft-delete a contact.
   *
   * @example
   * ```ts
   * const deleteResponse = await client.contacts.delete(
   *   '%2B15551234567',
   * );
   * ```
   */
  delete(contactID: string, options?: RequestOptions): APIPromise<DeleteResponse> {
    return this._client.delete(path`/contacts/${contactID}`, options);
  }

  /**
   * Check if a contact supports iMessage and/or SMS.
   *
   * @example
   * ```ts
   * const response = await client.contacts.checkCapabilities(
   *   '%2B15551234567',
   * );
   * ```
   */
  checkCapabilities(
    contactID: string,
    options?: RequestOptions,
  ): APIPromise<ContactCheckCapabilitiesResponse> {
    return this._client.get(path`/contacts/${contactID}/capabilities`, options);
  }
}

export interface Contact {
  /**
   * Contact identifier (phone or email)
   */
  id?: string;

  /**
   * Internal contact ID
   */
  contact_id?: string;

  created_at?: number;

  /**
   * Phone number (E.164) or email
   */
  identifier?: string;

  last_message_time?: number | null;

  name?: string | null;

  tags?: Array<string>;

  type?: 'phone' | 'email';
}

export interface DeleteResponse {
  deleted_at?: number;

  success?: boolean;
}

export interface Pagination {
  limit?: number;

  offset?: number;

  total?: number;
}

export interface ContactListResponse {
  contacts?: Array<Contact>;

  pagination?: Pagination;
}

export interface ContactCheckCapabilitiesResponse {
  capabilities?: ContactCheckCapabilitiesResponse.Capabilities;

  /**
   * Normalized contact identifier
   */
  contact?: string;

  /**
   * Timestamp when capabilities were checked
   */
  last_checked?: number;

  type?: 'phone' | 'email';
}

export namespace ContactCheckCapabilitiesResponse {
  export interface Capabilities {
    /**
     * Whether FaceTime is available
     */
    facetime?: boolean;

    /**
     * Whether iMessage is available
     */
    imessage?: boolean;

    /**
     * Whether SMS is available (phone only)
     */
    sms?: boolean;
  }
}

export interface ContactCreateParams {
  /**
   * Phone number (E.164 format, e.g., +15551234567) or email address
   */
  identifier: string;

  /**
   * Display name for the contact
   */
  name?: string;
}

export interface ContactUpdateParams {
  /**
   * New display name (null to clear)
   */
  name?: string | null;
}

export interface ContactListParams {
  /**
   * Maximum number of items to return (1-200)
   */
  limit?: number;

  /**
   * Number of items to skip
   */
  offset?: number;

  /**
   * Search query (matches identifier or name)
   */
  q?: string;

  /**
   * Sort order
   */
  sort?: 'recent' | 'oldest' | 'name_asc' | 'name_desc';
}

Contacts.Tags = Tags;

export declare namespace Contacts {
  export {
    type Contact as Contact,
    type DeleteResponse as DeleteResponse,
    type Pagination as Pagination,
    type ContactListResponse as ContactListResponse,
    type ContactCheckCapabilitiesResponse as ContactCheckCapabilitiesResponse,
    type ContactCreateParams as ContactCreateParams,
    type ContactUpdateParams as ContactUpdateParams,
    type ContactListParams as ContactListParams,
  };

  export {
    Tags as Tags,
    type TagListResponse as TagListResponse,
    type TagAddResponse as TagAddResponse,
    type TagAddParams as TagAddParams,
    type TagRemoveParams as TagRemoveParams,
  };
}
