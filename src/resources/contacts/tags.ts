// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ContactsAPI from './contacts';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage contacts (phone numbers and emails)
 */
export class Tags extends APIResource {
  /**
   * List all tags assigned to a contact.
   *
   * @example
   * ```ts
   * const tags = await client.contacts.tags.list(
   *   '%2B15551234567',
   * );
   * ```
   */
  list(contactID: string, options?: RequestOptions): APIPromise<TagListResponse> {
    return this._client.get(path`/contacts/${contactID}/tags`, options);
  }

  /**
   * Add one or more tags to a contact. If a tag already exists on the contact, it is
   * re-activated (idempotent). Tags are free-form strings.
   *
   * @example
   * ```ts
   * const response = await client.contacts.tags.add(
   *   '%2B15551234567',
   *   { tags: ['vip', 'priority'] },
   * );
   * ```
   */
  add(contactID: string, body: TagAddParams, options?: RequestOptions): APIPromise<TagAddResponse> {
    return this._client.post(path`/contacts/${contactID}/tags`, { body, ...options });
  }

  /**
   * Remove a specific tag from a contact. The tag is soft-deleted and can be
   * re-added later.
   *
   * @example
   * ```ts
   * const deleteResponse = await client.contacts.tags.remove(
   *   'vip',
   *   { contactId: '%2B15551234567' },
   * );
   * ```
   */
  remove(
    tag: string,
    params: TagRemoveParams,
    options?: RequestOptions,
  ): APIPromise<ContactsAPI.DeleteResponse> {
    const { contactId } = params;
    return this._client.delete(path`/contacts/${contactId}/tags/${tag}`, options);
  }
}

export interface TagListResponse {
  tags?: Array<TagListResponse.Tag>;
}

export namespace TagListResponse {
  export interface Tag {
    /**
     * Timestamp when the tag was added (ms since epoch)
     */
    created_at?: number;

    /**
     * The tag value
     */
    tag?: string;
  }
}

export interface TagAddResponse {
  success?: boolean;

  /**
   * Tags that were added
   */
  tags_added?: Array<string>;
}

export interface TagAddParams {
  /**
   * Tags to add
   */
  tags: Array<string>;
}

export interface TagRemoveParams {
  /**
   * Contact identifier (phone number in E.164 format or email, URL-encoded)
   */
  contactId: string;
}

export declare namespace Tags {
  export {
    type TagListResponse as TagListResponse,
    type TagAddResponse as TagAddResponse,
    type TagAddParams as TagAddParams,
    type TagRemoveParams as TagRemoveParams,
  };
}
