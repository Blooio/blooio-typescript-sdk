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
   * **RCS limitation:** typing indicators are only delivered for iMessage chats —
   * the RCS protocol does not carry composing state. Calls against RCS-routed chats
   * return 200 with a `warning` field and have no visible effect on the recipient.
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
   * **RCS limitation:** typing indicators are only delivered for iMessage chats —
   * the RCS protocol does not carry composing state. Calls against RCS-routed chats
   * return 200 with a `warning` field and have no visible effect on the recipient.
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

  /**
   * Present when the request was accepted but the indicator could not be delivered.
   * The most common reason is that the chat last routed via RCS, which does not
   * carry composing state.
   */
  warning?: string;
}

export declare namespace Typing {
  export { type TypingResponse as TypingResponse };
}
