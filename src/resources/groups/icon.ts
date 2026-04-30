// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

/**
 * Manage contact groups
 */
export class Icon extends APIResource {
  /**
   * Remove the group icon/photo. Requires the group to have a linked chat_guid.
   *
   * The icon is removed from both Blooio storage and the linked iMessage chat before
   * the request returns.
   *
   * @example
   * ```ts
   * const groupIcon = await client.groups.icon.remove(
   *   'grp_abc123def456',
   * );
   * ```
   */
  remove(groupID: string, options?: RequestOptions): APIPromise<GroupIcon> {
    return this._client.delete(path`/groups/${groupID}/icon`, options);
  }

  /**
   * Set the group icon/photo. Requires the group to have a linked chat_guid. Uses
   * multipart/form-data.
   *
   * The uploaded image is stored in Blooio storage and synced to the linked iMessage
   * chat before the request returns.
   *
   * @example
   * ```ts
   * const groupIcon = await client.groups.icon.set(
   *   'grp_abc123def456',
   *   { icon: fs.createReadStream('path/to/file') },
   * );
   * ```
   */
  set(groupID: string, body: IconSetParams, options?: RequestOptions): APIPromise<GroupIcon> {
    return this._client.post(
      path`/groups/${groupID}/icon`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

/**
 * Response for group icon operations
 */
export interface GroupIcon {
  /**
   * The BlueBubbles chat GUID
   */
  chat_guid?: string;

  /**
   * Linked chat sync status
   */
  device_sync?: GroupIcon.DeviceSync;

  group_id?: string;

  /**
   * URL of the uploaded icon (only present on set)
   */
  icon_url?: string;

  message?: string;

  success?: boolean;
}

export namespace GroupIcon {
  /**
   * Linked chat sync status
   */
  export interface DeviceSync {
    chat_guid?: string;

    /**
     * Status message about linked chat sync
     */
    message?: string;

    /**
     * Whether the icon change was synced to the linked iMessage chat. This will be
     * true on successful set/remove operations.
     */
    synced?: boolean;
  }
}

export interface IconSetParams {
  /**
   * The icon image file to set as the group photo
   */
  icon: Uploadable;
}

export declare namespace Icon {
  export { type GroupIcon as GroupIcon, type IconSetParams as IconSetParams };
}
