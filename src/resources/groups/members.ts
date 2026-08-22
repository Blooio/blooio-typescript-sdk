// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ContactsAPI from '../contacts/contacts';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage group membership
 */
export class Members extends APIResource {
  /**
   * List all members of a group.
   *
   * @example
   * ```ts
   * const members = await client.groups.members.list(
   *   'grp_abc123def456',
   * );
   * ```
   */
  list(
    groupID: string,
    query: MemberListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MemberListResponse> {
    return this._client.get(path`/groups/${groupID}/members`, { query, ...options });
  }

  /**
   * ⚠️ **COMING SOON** - This endpoint is temporarily disabled while we stabilize
   * this feature.
   *
   * Add an existing contact to a group. If the group is linked to an existing
   * iMessage chat, also adds the participant to that chat.
   *
   * @example
   * ```ts
   * const response = await client.groups.members.add(
   *   'grp_abc123def456',
   *   { contact_id: '+15551234567' },
   * );
   * ```
   */
  add(groupID: string, body: MemberAddParams, options?: RequestOptions): APIPromise<MemberAddResponse> {
    return this._client.post(path`/groups/${groupID}/members`, { body, ...options });
  }

  /**
   * ⚠️ **COMING SOON** - This endpoint is temporarily disabled while we stabilize
   * this feature.
   *
   * Remove a contact from a group. If the group is linked to an existing iMessage
   * chat, also removes the participant from that chat. If the contact being removed
   * is the organization's own phone number, leaves the group chat instead.
   *
   * @example
   * ```ts
   * const member = await client.groups.members.remove(
   *   '%2B15551234567',
   *   { groupId: 'grp_abc123def456' },
   * );
   * ```
   */
  remove(
    contactID: string,
    params: MemberRemoveParams,
    options?: RequestOptions,
  ): APIPromise<MemberRemoveResponse> {
    const { groupId } = params;
    return this._client.delete(path`/groups/${groupId}/members/${contactID}`, options);
  }
}

export interface GroupMember {
  /**
   * Contact identifier (phone or email)
   */
  id?: string;

  added_at?: number;

  contact_id?: string;

  identifier?: string;

  name?: string | null;
}

export interface MemberListResponse {
  /**
   * The group ID
   */
  group_id?: string;

  /**
   * The group name
   */
  group_name?: string | null;

  /**
   * URL of the group icon/photo
   */
  icon_url?: string | null;

  members?: Array<GroupMember>;

  pagination?: ContactsAPI.Pagination;
}

export interface MemberAddResponse {
  member?: GroupMember;

  message?: string;
}

export interface MemberRemoveResponse {
  removed_at?: number;

  success?: boolean;
}

export interface MemberListParams {
  /**
   * Maximum number of items to return in a single response. Must be between 1 and
   * 200; defaults to 50. Use together with `offset` to page through large result
   * sets.
   */
  limit?: number;

  /**
   * Number of items to skip before returning results. Combine with `limit` for
   * page-based pagination (e.g. `offset=50&limit=50` returns the second page).
   * Defaults to 0.
   */
  offset?: number;
}

export interface MemberAddParams {
  /**
   * Contact identifier (phone number or email)
   */
  contact_id: string;
}

export interface MemberRemoveParams {
  /**
   * Unique identifier of the group chat, prefixed with `grp_` (e.g.
   * `grp_abc123def456`). Returned by the create-group and list-groups endpoints.
   */
  groupId: string;
}

export declare namespace Members {
  export {
    type GroupMember as GroupMember,
    type MemberListResponse as MemberListResponse,
    type MemberAddResponse as MemberAddResponse,
    type MemberRemoveResponse as MemberRemoveResponse,
    type MemberListParams as MemberListParams,
    type MemberAddParams as MemberAddParams,
    type MemberRemoveParams as MemberRemoveParams,
  };
}
