// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

/**
 * View conversations and messages
 */
export class Background extends APIResource {
  /**
   * Get the current background image metadata for a conversation. Works for both
   * 1-on-1 and group chats.
   *
   * @example
   * ```ts
   * const chatBackgroundResponse =
   *   await client.chats.background.retrieve('chatId');
   * ```
   */
  retrieve(chatID: string, options?: RequestOptions): APIPromise<ChatBackgroundResponse> {
    return this._client.get(path`/chats/${chatID}/background`, options);
  }

  /**
   * Remove the background image from a conversation, reverting to the default
   * appearance.
   *
   * @example
   * ```ts
   * const chatBackgroundResponse =
   *   await client.chats.background.remove('chatId');
   * ```
   */
  remove(chatID: string, options?: RequestOptions): APIPromise<ChatBackgroundResponse> {
    return this._client.delete(path`/chats/${chatID}/background`, options);
  }

  /**
   * Set or update the background image for a conversation. Works for both 1-on-1 and
   * group chats.
   *
   * The request body must be `multipart/form-data` with a single `background` field
   * containing the **raw image file bytes** (not a URL or base64 string). Supported
   * formats: JPEG, PNG, GIF, WebP, HEIC/HEIF. Maximum file size: 10 MB.
   *
   * **Example with curl** — note the `@` prefix that tells curl to read the file
   * from disk:
   *
   * ```bash
   * curl -X PUT "https://backend.blooio.com/v2/api/chats/%2B15551234567/background" \
   *   -H "Authorization: Bearer YOUR_API_KEY" \
   *   -F "background=@/path/to/image.jpg;type=image/jpeg"
   * ```
   *
   * When the chat id is a phone number, percent-encode the leading `+` as `%2B` in
   * the URL path.
   *
   * @example
   * ```ts
   * const chatBackgroundResponse =
   *   await client.chats.background.set('chatId', {
   *     background: fs.createReadStream('path/to/file'),
   *   });
   * ```
   */
  set(
    chatID: string,
    body: BackgroundSetParams,
    options?: RequestOptions,
  ): APIPromise<ChatBackgroundResponse> {
    return this._client.put(
      path`/chats/${chatID}/background`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

/**
 * Response for chat background operations
 */
export interface ChatBackgroundResponse {
  /**
   * Unique identifier for the current background, or null if none
   */
  background_id?: string | null;

  /**
   * Public URL of the persisted background image stored in R2. Returned after a
   * successful PUT and on GET when a background has been set through the API. May be
   * null if persistence failed or the background was set outside of the API.
   */
  background_url?: string | null;

  /**
   * Version number of the background (for cache invalidation)
   */
  background_version?: number | null;

  /**
   * Whether the background was changed by this operation (only present on PUT)
   */
  changed?: boolean;

  /**
   * Normalized chat identifier (phone number, email, or group ID)
   */
  chat_id?: string;

  /**
   * Whether the chat currently has a background set
   */
  has_background?: boolean;
}

export interface BackgroundSetParams {
  /**
   * Binary image file upload (JPEG, PNG, GIF, WebP, HEIC/HEIF, max 10 MB). Send as a
   * file field in `multipart/form-data` — e.g. `-F "background=@/path/to/image.jpg"`
   * with curl, or a `File`/`Blob` appended to `FormData` in JavaScript. Do NOT send
   * a URL or base64 string.
   */
  background: Uploadable;
}

export declare namespace Background {
  export {
    type ChatBackgroundResponse as ChatBackgroundResponse,
    type BackgroundSetParams as BackgroundSetParams,
  };
}
