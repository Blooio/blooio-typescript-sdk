// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Control typing indicators for conversations
 */
export class Typing extends APIResource {
  /**
   * Start the typing indicator for a chat. The indicator shows the recipient that
   * you are typing.
   *
   * @example
   * ```ts
   * const typingResponse = await client.chats.typing.start(
   *   'chatId',
   * );
   * ```
   */
  start(chatID: string, options?: RequestOptions): APIPromise<TypingResponse> {
    return this._client.post(path`/chats/${chatID}/typing`, options);
  }

  /**
   * Stop the typing indicator for a chat.
   *
   * @example
   * ```ts
   * const typingResponse = await client.chats.typing.stop(
   *   'chatId',
   * );
   * ```
   */
  stop(chatID: string, options?: RequestOptions): APIPromise<TypingResponse> {
    return this._client.delete(path`/chats/${chatID}/typing`, options);
  }
}

export interface TypingResponse {
  /**
   * Chat identifier
   */
  chat_id?: string;

  /**
   * Timestamp when typing started (only for start)
   */
  started_at?: number;

  /**
   * Timestamp when typing stopped (only for stop)
   */
  stopped_at?: number;

  /**
   * Whether typing indicator is active
   */
  typing?: boolean;
}

export declare namespace Typing {
  export { type TypingResponse as TypingResponse };
}
