// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ContactsAPI from '../contacts/contacts';
import * as IconAPI from './icon';
import { GroupIcon, Icon, IconSetParams } from './icon';
import * as MembersAPI from './members';
import {
  GroupMember,
  MemberAddParams,
  MemberAddResponse,
  MemberListParams,
  MemberListResponse,
  MemberRemoveParams,
  MemberRemoveResponse,
  Members,
} from './members';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage contact groups
 */
export class Groups extends APIResource {
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  icon: IconAPI.Icon = new IconAPI.Icon(this._client);

  /**
   * Create a new group. There are two modes:
   *
   * **1. Link to existing iMessage chat:** Provide `chat_guid` to join an existing
   * group chat that was created outside the API. The `members` list records who is
   * in the group but does NOT add them to the linked iMessage chat. Multiple groups
   * can have the same participants if they have different `chat_guid`s.
   *
   * **2. Create new group:** Omit `chat_guid` to create a new group. When you send
   * the first message, a new iMessage chat will be created. Note: iMessage only
   * allows one chat per unique participant set when created via API.
   *
   * @example
   * ```ts
   * const group = await client.groups.create({
   *   name: 'Sales Team',
   * });
   * ```
   */
  create(body: GroupCreateParams, options?: RequestOptions): APIPromise<GroupCreateResponse> {
    return this._client.post('/groups', { body, ...options });
  }

  /**
   * Get details for a specific group.
   *
   * @example
   * ```ts
   * const group = await client.groups.retrieve(
   *   'grp_abc123def456',
   * );
   * ```
   */
  retrieve(groupID: string, options?: RequestOptions): APIPromise<Group> {
    return this._client.get(path`/groups/${groupID}`, options);
  }

  /**
   * Update a group's name. If the group has a linked `chat_guid`, the display name
   * will also be updated in the linked iMessage chat. Note: iMessage only allows one
   * chat per unique participant set, so renaming simply changes the display name on
   * the existing chat thread.
   *
   * @example
   * ```ts
   * const group = await client.groups.update(
   *   'grp_abc123def456',
   * );
   * ```
   */
  update(
    groupID: string,
    body: GroupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<GroupUpdateResponse> {
    return this._client.patch(path`/groups/${groupID}`, { body, ...options });
  }

  /**
   * List all groups for the organization with optional search and pagination.
   *
   * @example
   * ```ts
   * const groups = await client.groups.list();
   * ```
   */
  list(
    query: GroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GroupListResponse> {
    return this._client.get('/groups', { query, ...options });
  }

  /**
   * Soft-delete a group. Members are automatically removed. If the group is linked
   * to an existing iMessage chat, the number also leaves that chat.
   *
   * @example
   * ```ts
   * const group = await client.groups.delete(
   *   'grp_abc123def456',
   * );
   * ```
   */
  delete(groupID: string, options?: RequestOptions): APIPromise<GroupDeleteResponse> {
    return this._client.delete(path`/groups/${groupID}`, options);
  }
}

export interface Group {
  /**
   * BlueBubbles chat GUID if linked to a device group chat
   */
  chat_guid?: string | null;

  created_at?: number;

  group_id?: string;

  /**
   * URL of the group icon/photo
   */
  icon_url?: string | null;

  /**
   * Direction of the most recent message
   */
  last_message_direction?: 'inbound' | 'outbound' | null;

  /**
   * Text of the most recent message in the group
   */
  last_message_text?: string | null;

  /**
   * Timestamp of the most recent message
   */
  last_message_time?: number | null;

  member_count?: number;

  /**
   * Total number of messages in this group
   */
  message_count?: number;

  /**
   * Group name. Null for unnamed groups.
   */
  name?: string | null;
}

export interface GroupCreateResponse extends Group {
  /**
   * List of member identifiers that were added to the group
   */
  added_members?: Array<string>;

  /**
   * List of contacts that were auto-created
   */
  created_contacts?: Array<string>;
}

export interface GroupUpdateResponse extends Group {
  /**
   * Result of syncing the operation to a linked iMessage chat
   */
  device_sync?: GroupUpdateResponse.DeviceSync;
}

export namespace GroupUpdateResponse {
  /**
   * Result of syncing the operation to a linked iMessage chat
   */
  export interface DeviceSync {
    /**
     * The action that was performed for the linked chat
     */
    action?: 'add_participant' | 'remove_participant' | 'leave';

    /**
     * The linked iMessage chat GUID
     */
    chat_guid?: string;

    /**
     * Error message if sync failed
     */
    error?: string | null;

    /**
     * Whether the sync was successful
     */
    synced?: boolean;
  }
}

export interface GroupListResponse {
  groups?: Array<Group>;

  pagination?: ContactsAPI.Pagination;
}

export interface GroupDeleteResponse {
  deleted_at?: number;

  success?: boolean;
}

export interface GroupCreateParams {
  /**
   * Group name (max 255 characters)
   */
  name: string;

  /**
   * BlueBubbles chat GUID to link this group to an existing iMessage chat. Use this
   * to join groups created elsewhere. You can get this from the BlueBubbles API or
   * from inbound message webhooks.
   */
  chat_guid?: string;

  /**
   * Phone numbers or emails of contacts in the group. When linking via chat_guid,
   * this is for record-keeping only (members are not added to the linked iMessage
   * chat).
   */
  members?: Array<string>;
}

export interface GroupUpdateParams {
  /**
   * New group name
   */
  name?: string;
}

export interface GroupListParams {
  /**
   * Maximum number of items to return (1-200)
   */
  limit?: number;

  /**
   * Number of items to skip
   */
  offset?: number;

  /**
   * Search query (matches group name)
   */
  q?: string;

  /**
   * Sort order
   */
  sort?: 'recent' | 'oldest' | 'name_asc' | 'name_desc';
}

Groups.Members = Members;
Groups.Icon = Icon;

export declare namespace Groups {
  export {
    type Group as Group,
    type GroupCreateResponse as GroupCreateResponse,
    type GroupUpdateResponse as GroupUpdateResponse,
    type GroupListResponse as GroupListResponse,
    type GroupDeleteResponse as GroupDeleteResponse,
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupListParams as GroupListParams,
  };

  export {
    Members as Members,
    type GroupMember as GroupMember,
    type MemberListResponse as MemberListResponse,
    type MemberAddResponse as MemberAddResponse,
    type MemberRemoveResponse as MemberRemoveResponse,
    type MemberListParams as MemberListParams,
    type MemberAddParams as MemberAddParams,
    type MemberRemoveParams as MemberRemoveParams,
  };

  export { Icon as Icon, type GroupIcon as GroupIcon, type IconSetParams as IconSetParams };
}
