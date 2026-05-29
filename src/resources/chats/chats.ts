// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ChatsAPI from './chats';
import * as BackgroundAPI from './background';
import { Background, BackgroundSetParams, ChatBackgroundResponse } from './background';
import * as MessagesAPI from './messages';
import {
  LinkPreview,
  MessageGetStatusParams,
  MessageGetStatusResponse,
  MessageListParams,
  MessageListResponse,
  MessageReactParams,
  MessageReactResponse,
  MessageRetrieveParams,
  MessageRetrieveResponse,
  MessageSendParams,
  MessageSendResponse,
  Messages,
  Reaction,
} from './messages';
import * as PollsAPI from './polls';
import {
  PollGetResultsParams,
  PollGetResultsResponse,
  PollSendParams,
  PollSendResponse,
  Polls,
} from './polls';
import * as TypingAPI from './typing';
import { Typing, TypingResponse } from './typing';
import * as ContactsAPI from '../contacts/contacts';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Chats extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  polls: PollsAPI.Polls = new PollsAPI.Polls(this._client);
  typing: TypingAPI.Typing = new TypingAPI.Typing(this._client);
  background: BackgroundAPI.Background = new BackgroundAPI.Background(this._client);

  /**
   * Get details for a specific conversation.
   *
   * @example
   * ```ts
   * const chat = await client.chats.retrieve('chatId');
   * ```
   */
  retrieve(chatID: string, options?: RequestOptions): APIPromise<ChatRetrieveResponse> {
    return this._client.get(path`/chats/${chatID}`, options);
  }

  /**
   * List all unique conversations for the organization, sorted by most recent
   * message.
   *
   * @example
   * ```ts
   * const chats = await client.chats.list();
   * ```
   */
  list(
    query: ChatListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ChatListResponse> {
    return this._client.get('/chats', { query, ...options });
  }

  /**
   * Mark all messages in a chat as read. This sends a read receipt to the sender.
   *
   * @example
   * ```ts
   * const response = await client.chats.markAsRead('chatId');
   * ```
   */
  markAsRead(chatID: string, options?: RequestOptions): APIPromise<ChatMarkAsReadResponse> {
    return this._client.post(path`/chats/${chatID}/read`, options);
  }

  /**
   * Stage the contact card (Name & Photo) for sharing in a chat. The contact card
   * will be piggybacked onto the next outgoing message (text or attachment) sent to
   * this chat. This is idempotent — calling it multiple times is harmless.
   *
   * ⚠️ **Plan requirement:** Contact card sharing is only available on **Dedicated
   * Commercial** and **Dedicated Enterprise** plans. Numbers on other plans receive
   * a `403`.
   *
   * @example
   * ```ts
   * const response = await client.chats.shareContactCard(
   *   'chatId',
   * );
   * ```
   */
  shareContactCard(chatID: string, options?: RequestOptions): APIPromise<ChatShareContactCardResponse> {
    return this._client.post(path`/chats/${chatID}/contact-card`, options);
  }
}

export interface LastMessage {
  direction?: 'inbound' | 'outbound';

  message_id?: string;

  text?: string | null;

  time_sent?: number;
}

export interface ChatRetrieveResponse {
  /**
   * Chat identifier (phone number, email, or group ID)
   */
  id?: string;

  /**
   * Contact info (only for non-group chats)
   */
  contact?: ChatRetrieveResponse.Contact | null;

  first_message_time?: number;

  /**
   * Group ID (only for group chats)
   */
  group_id?: string | null;

  /**
   * Group name (only for group chats)
   */
  group_name?: string | null;

  inbound_count?: number;

  /**
   * Whether this is a group chat
   */
  is_group?: boolean;

  last_inbound_time?: number | null;

  last_message?: LastMessage;

  last_message_time?: number;

  last_outbound_time?: number | null;

  /**
   * Number of members (only for group chats)
   */
  member_count?: number;

  message_count?: number;

  outbound_count?: number;

  type?: 'phone' | 'email' | 'group';
}

export namespace ChatRetrieveResponse {
  /**
   * Contact info (only for non-group chats)
   */
  export interface Contact {
    contact_id?: string;

    identifier?: string;

    name?: string | null;
  }
}

export interface ChatListResponse {
  chats?: Array<ChatListResponse.Chat>;

  pagination?: ContactsAPI.Pagination;
}

export namespace ChatListResponse {
  export interface Chat {
    /**
     * Chat identifier (phone number, email, or group ID)
     */
    id?: string;

    /**
     * Contact info (only for non-group chats)
     */
    contact?: Chat.Contact | null;

    /**
     * Group ID (only for group chats)
     */
    group_id?: string | null;

    /**
     * Group name (only for group chats)
     */
    group_name?: string | null;

    inbound_count?: number;

    /**
     * Whether this is a group chat
     */
    is_group?: boolean;

    last_inbound_time?: number | null;

    last_message?: ChatsAPI.LastMessage;

    last_message_time?: number;

    last_outbound_time?: number | null;

    /**
     * Number of members (only for group chats)
     */
    member_count?: number;

    message_count?: number;

    outbound_count?: number;

    type?: 'phone' | 'email' | 'group';
  }

  export namespace Chat {
    /**
     * Contact info (only for non-group chats)
     */
    export interface Contact {
      contact_id?: string;

      identifier?: string;

      name?: string | null;
    }
  }
}

export interface ChatMarkAsReadResponse {
  /**
   * Chat identifier
   */
  chat_id?: string;

  /**
   * Timestamp when marked as read
   */
  marked_at?: number;

  /**
   * Read status
   */
  status?: 'read';
}

export interface ChatShareContactCardResponse {
  /**
   * Normalized chat identifier
   */
  chat_id?: string;

  message?: string;

  success?: boolean;
}

export interface ChatListParams {
  /**
   * Maximum number of items to return (1-200)
   */
  limit?: number;

  /**
   * Number of items to skip
   */
  offset?: number;

  /**
   * Search query (matches phone/email or contact name)
   */
  q?: string;

  /**
   * Sort order
   */
  sort?: 'recent' | 'oldest';
}

Chats.Messages = Messages;
Chats.Polls = Polls;
Chats.Typing = Typing;
Chats.Background = Background;

export declare namespace Chats {
  export {
    type LastMessage as LastMessage,
    type ChatRetrieveResponse as ChatRetrieveResponse,
    type ChatListResponse as ChatListResponse,
    type ChatMarkAsReadResponse as ChatMarkAsReadResponse,
    type ChatShareContactCardResponse as ChatShareContactCardResponse,
    type ChatListParams as ChatListParams,
  };

  export {
    Messages as Messages,
    type LinkPreview as LinkPreview,
    type Reaction as Reaction,
    type MessageRetrieveResponse as MessageRetrieveResponse,
    type MessageListResponse as MessageListResponse,
    type MessageGetStatusResponse as MessageGetStatusResponse,
    type MessageReactResponse as MessageReactResponse,
    type MessageSendResponse as MessageSendResponse,
    type MessageRetrieveParams as MessageRetrieveParams,
    type MessageListParams as MessageListParams,
    type MessageGetStatusParams as MessageGetStatusParams,
    type MessageReactParams as MessageReactParams,
    type MessageSendParams as MessageSendParams,
  };

  export {
    Polls as Polls,
    type PollGetResultsResponse as PollGetResultsResponse,
    type PollSendResponse as PollSendResponse,
    type PollGetResultsParams as PollGetResultsParams,
    type PollSendParams as PollSendParams,
  };

  export { Typing as Typing, type TypingResponse as TypingResponse };

  export {
    Background as Background,
    type ChatBackgroundResponse as ChatBackgroundResponse,
    type BackgroundSetParams as BackgroundSetParams,
  };
}
