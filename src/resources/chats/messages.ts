// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagesAPI from './messages';
import * as ContactsAPI from '../contacts/contacts';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Get details for a specific message.
   *
   * @example
   * ```ts
   * const message = await client.chats.messages.retrieve(
   *   'msg_abc123def456',
   *   { chatId: 'chatId' },
   * );
   * ```
   */
  retrieve(
    messageID: string,
    params: MessageRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<MessageRetrieveResponse> {
    const { chatId } = params;
    return this._client.get(path`/chats/${chatId}/messages/${messageID}`, options);
  }

  /**
   * List all messages in a conversation with optional filtering.
   *
   * @example
   * ```ts
   * const messages = await client.chats.messages.list('chatId');
   * ```
   */
  list(
    chatID: string,
    query: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessageListResponse> {
    return this._client.get(path`/chats/${chatID}/messages`, { query, ...options });
  }

  /**
   * Get delivery status for a specific message.
   *
   * @example
   * ```ts
   * const response = await client.chats.messages.getStatus(
   *   'msg_abc123def456',
   *   { chatId: 'chatId' },
   * );
   * ```
   */
  getStatus(
    messageID: string,
    params: MessageGetStatusParams,
    options?: RequestOptions,
  ): APIPromise<MessageGetStatusResponse> {
    const { chatId } = params;
    return this._client.get(path`/chats/${chatId}/messages/${messageID}/status`, options);
  }

  /**
   * Add or remove a reaction to a message. Supports classic iMessage tapbacks (love,
   * like, dislike, laugh, emphasize, question) and emoji reactions (e.g. +😂, -😂).
   *
   * The messageId can be an explicit message ID (e.g., msg_xxx) or a relative index
   * (-1 for last message, -2 for second-to-last, etc.). When using relative indices,
   * you can optionally filter by message direction (inbound/outbound only).
   *
   * @example
   * ```ts
   * const response = await client.chats.messages.react(
   *   'messageId',
   *   { chatId: 'chatId', reaction: '+love' },
   * );
   * ```
   */
  react(
    messageID: string,
    params: MessageReactParams,
    options?: RequestOptions,
  ): APIPromise<MessageReactResponse> {
    const { chatId, ...body } = params;
    return this._client.post(path`/chats/${chatId}/messages/${messageID}/reactions`, { body, ...options });
  }

  /**
   * Send a message to a chat. The chatId can be: (1) E.164 phone number, (2) email
   * address, (3) group ID (grp_xxxx), or (4) comma-separated list of phone/email for
   * multi-recipient chats. For multi-recipient, an unnamed group is automatically
   * created or reused if the exact participant combination already exists. For
   * explicit groups, the group must be linked to an existing iMessage chat.
   *
   * **iMessage send-with-effect:** set the optional `effect` field to attach an
   * Apple expressive send (slam, loud, gentle, invisible-ink) or screen effect
   * (echo, spotlight, balloons, confetti, love, lasers, fireworks, celebration).
   * Effects are an iMessage-only feature — when the recipient is on SMS/RCS the
   * message is delivered without the animation. Effects are not supported in
   * multipart (`parts`) mode.
   *
   * **Threaded replies (iMessage inline reply):** set the optional `reply_to` field
   * to send the outgoing message as a reply to a specific earlier message. Two
   * shapes are accepted: `{ "message_id": "msg_…" }` references a Blooio-minted
   * message in the same chat (most common — the message*id returned by an earlier
   * send or surfaced on a `message.received` webhook), or
   * `{ "guid": "…", "part_index": 0 }` references the raw iMessage GUID for the rare
   * case where the parent wasn't recorded by Blooio. The reply must target the same
   * chat and the same from-number as the new send, and the parent must be no older
   * than 30 days (the iMessage on-device retention horizon). Reply support is
   * iMessage-only and is rejected on Twilio, dashboard-Twilio, and hybrid send
   * paths; it's also rejected on multi-message fan-outs (`text` array or per-part
   * URL-balloon batch). See the `400` responses for the full set of
   * `reply_target*\*` error codes.
   *
   * @example
   * ```ts
   * const response = await client.chats.messages.send('chatId');
   * ```
   */
  send(chatID: string, params: MessageSendParams, options?: RequestOptions): APIPromise<MessageSendResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post(path`/chats/${chatID}/messages`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

/**
 * Rich-link-preview overrides for URL messages (iMessage URL balloon). All fields
 * are optional. Only applies when the message text (or the concatenated part text)
 * is exactly a single http(s) URL. If omitted but the text is a URL, Blooio
 * auto-fetches the page's Open Graph metadata to generate a preview. If the image
 * download fails, the send still succeeds — Blooio silently falls back to the
 * auto-generated preview.
 */
export interface LinkPreview {
  /**
   * HTTPS URL to an image (png, jpg, webp, gif). Blooio downloads the image
   * server-side and attaches it as the rich-link hero. Max 16 MB. If the download
   * fails or returns a non-image MIME, the send falls back to auto-fetched OG
   * metadata.
   */
  image_url?: string;

  /**
   * Bold title line rendered in the iMessage bubble. Overrides the page's
   * `<meta property="og:title">`.
   */
  title?: string;
}

export interface Reaction {
  /**
   * Whether the reaction is currently active (true) or was removed (false)
   */
  is_added?: boolean;

  /**
   * The reaction value. Classic tapbacks: love, like, dislike, laugh, emphasize,
   * question. Emoji reactions: the emoji character (e.g. 😂, 👍).
   */
  reaction?: string;

  /**
   * Phone number or email of who sent the reaction. Null when the reaction was sent
   * by you (outbound).
   */
  sender?: string | null;

  /**
   * Timestamp when the reaction was sent (ms)
   */
  time_sent?: number;
}

export interface MessageRetrieveResponse {
  attachments?: Array<unknown>;

  chat_id?: string;

  contact?: MessageRetrieveResponse.Contact | null;

  direction?: 'inbound' | 'outbound';

  error?: string | null;

  /**
   * Organization phone number (from-number) used for this message
   */
  internal_id?: string | null;

  message_id?: string;

  protocol?: 'imessage' | 'sms' | 'rcs' | 'non-imessage' | null;

  /**
   * Reactions on this message (tapbacks and emoji reactions)
   */
  reactions?: Array<Reaction>;

  /**
   * Inline-reply parent reference. Identical shape on `message.received` webhooks
   * and on every GET endpoint that returns a single message or a list of messages.
   */
  reply_to?: MessageRetrieveResponse.ReplyTo | null;

  /**
   * Sender's phone number or email for inbound group messages. Null for outbound
   * messages and 1-1 chats.
   */
  sender?: string | null;

  status?:
    | 'pending'
    | 'queued'
    | 'sent'
    | 'delivered'
    | 'failed'
    | 'cancellation_requested'
    | 'cancelled'
    | null;

  text?: string | null;

  time_delivered?: number | null;

  time_sent?: number;
}

export namespace MessageRetrieveResponse {
  export interface Contact {
    contact_id?: string;

    /**
     * The contact's phone number or email
     */
    identifier?: string;

    name?: string | null;
  }

  /**
   * Inline-reply parent reference. Identical shape on `message.received` webhooks
   * and on every GET endpoint that returns a single message or a list of messages.
   */
  export interface ReplyTo {
    /**
     * The raw iMessage GUID of the parent. Always populated on real inline replies;
     * the on-device record-of-truth identifier that survives even when `message_id`
     * cannot be resolved.
     */
    guid: string | null;

    /**
     * The Blooio `message_id` of the parent message. NULL when the parent isn't in our
     * `messages` table (e.g., the original was sent from outside Blooio's pipeline).
     */
    message_id: string | null;

    /**
     * Which part of the parent was replied to. 0 for the common single-part case.
     */
    part_index: number;
  }
}

export interface MessageListResponse {
  chat_id?: string;

  messages?: Array<MessageListResponse.Message>;

  pagination?: ContactsAPI.Pagination;
}

export namespace MessageListResponse {
  export interface Message {
    attachments?: Array<unknown>;

    direction?: 'inbound' | 'outbound';

    error?: string | null;

    /**
     * Phone number or email of the contact, or group ID for group messages
     */
    external_id?: string;

    /**
     * Organization phone number (from-number) used for this message
     */
    internal_id?: string | null;

    message_id?: string;

    protocol?: 'imessage' | 'sms' | 'rcs' | 'non-imessage' | null;

    /**
     * Reactions on this message (tapbacks and emoji reactions)
     */
    reactions?: Array<MessagesAPI.Reaction>;

    /**
     * Inline-reply parent reference. Identical shape on `message.received` webhooks
     * and on every GET endpoint that returns a single message or a list of messages.
     */
    reply_to?: Message.ReplyTo | null;

    /**
     * Sender's phone number or email for inbound group messages. Null for outbound
     * messages and 1-1 chats.
     */
    sender?: string | null;

    status?:
      | 'pending'
      | 'queued'
      | 'sent'
      | 'delivered'
      | 'failed'
      | 'cancellation_requested'
      | 'cancelled'
      | null;

    text?: string | null;

    time_delivered?: number | null;

    time_sent?: number;
  }

  export namespace Message {
    /**
     * Inline-reply parent reference. Identical shape on `message.received` webhooks
     * and on every GET endpoint that returns a single message or a list of messages.
     */
    export interface ReplyTo {
      /**
       * The raw iMessage GUID of the parent. Always populated on real inline replies;
       * the on-device record-of-truth identifier that survives even when `message_id`
       * cannot be resolved.
       */
      guid: string | null;

      /**
       * The Blooio `message_id` of the parent message. NULL when the parent isn't in our
       * `messages` table (e.g., the original was sent from outside Blooio's pipeline).
       */
      message_id: string | null;

      /**
       * Which part of the parent was replied to. 0 for the common single-part case.
       */
      part_index: number;
    }
  }
}

export interface MessageGetStatusResponse {
  chat_id?: string;

  direction?: 'inbound' | 'outbound';

  error?: string | null;

  message_id?: string;

  protocol?: 'imessage' | 'sms' | 'rcs' | 'non-imessage' | null;

  status?:
    | 'pending'
    | 'queued'
    | 'sent'
    | 'delivered'
    | 'failed'
    | 'cancellation_requested'
    | 'cancelled'
    | null;

  time_delivered?: number | null;

  time_sent?: number;
}

export interface MessageReactResponse {
  /**
   * The action that was performed
   */
  action?: 'add' | 'remove';

  /**
   * The ID of the message that was reacted to
   */
  message_id?: string;

  /**
   * The reaction that was added or removed. For classic tapbacks: love, like,
   * dislike, laugh, emphasize, question. For emoji reactions: the emoji character
   * (e.g. 😂, 👍, 🔥).
   */
  reaction?: string;

  /**
   * Whether the reaction was sent successfully
   */
  success?: boolean;
}

/**
 * Response after sending a message
 */
export interface MessageSendResponse {
  /**
   * Number of messages sent. Only present in URL-balloon batch mode.
   */
  count?: number;

  /**
   * True if a new unnamed group was created for this multi-recipient message
   */
  group_created?: boolean;

  /**
   * Group ID when sending to multi-recipient (new or existing)
   */
  group_id?: string;

  /**
   * ID of the sent message (single-message sends)
   */
  message_id?: string;

  /**
   * IDs of sent messages. Present when `text` is an array or when `parts` uses
   * per-part `link_preview` (URL-balloon batch mode).
   */
  message_ids?: Array<string>;

  /**
   * Present (and `true`) only when `reply_to.guid` was supplied without a
   * `message_id` and the GUID didn't map to any Blooio-minted row. The send still
   * proceeds and the device may still thread it; this flag signals that Blooio
   * couldn't link the new message to a known parent.
   */
  parent_unresolved?: boolean;

  /**
   * List of participants (present for multi-recipient)
   */
  participants?: Array<string>;

  /**
   * Initial status of the message(s)
   */
  status?: 'queued' | 'failed';
}

export interface MessageRetrieveParams {
  /**
   * Chat identifier. Can be: (1) phone number in E.164 format (e.g., +15551234567),
   * (2) email address, (3) group ID (grp_xxxx), or (4) comma-separated list of phone
   * numbers/emails for multi-recipient group chats (e.g.,
   * +15551234567,+15559876543). All values should be URL-encoded.
   */
  chatId: string;
}

export interface MessageListParams {
  /**
   * Filter by message direction
   */
  direction?: 'inbound' | 'outbound';

  /**
   * Maximum number of items to return (1-200)
   */
  limit?: number;

  /**
   * Number of items to skip
   */
  offset?: number;

  /**
   * Only messages sent after this timestamp (ms)
   */
  since?: number;

  /**
   * Sort order by time
   */
  sort?: 'asc' | 'desc';

  /**
   * Only messages sent before this timestamp (ms)
   */
  until?: number;
}

export interface MessageGetStatusParams {
  /**
   * Chat identifier. Can be: (1) phone number in E.164 format (e.g., +15551234567),
   * (2) email address, (3) group ID (grp_xxxx), or (4) comma-separated list of phone
   * numbers/emails for multi-recipient group chats (e.g.,
   * +15551234567,+15559876543). All values should be URL-encoded.
   */
  chatId: string;
}

export interface MessageReactParams {
  /**
   * Path param: Chat identifier. Can be: (1) phone number in E.164 format (e.g.,
   * +15551234567), (2) email address, (3) group ID (grp_xxxx), or (4)
   * comma-separated list of phone numbers/emails for multi-recipient group chats
   * (e.g., +15551234567,+15559876543). All values should be URL-encoded.
   */
  chatId: string;

  /**
   * Body param: The reaction to add or remove. Must be prefixed with `+` to add or
   * `-` to remove.
   *
   * **Classic tapbacks:** `+love`, `-love`, `+like`, `-like`, `+dislike`,
   * `-dislike`, `+laugh`, `-laugh`, `+emphasize`, `-emphasize`, `+question`,
   * `-question`
   *
   * **Emoji reactions:** Any emoji prefixed with `+` or `-` (e.g. `+😂`, `-😂`,
   * `+👍`, `-🔥`).
   */
  reaction: string;

  /**
   * Body param: Filter by message direction (only used when messageId is a relative
   * index like -1, -2)
   */
  direction?: 'inbound' | 'outbound';
}

export interface MessageSendParams {
  /**
   * Body param: Array of attachment URLs or objects with url/name
   */
  attachments?: Array<string | MessageSendParams.UnionObjectVariant1>;

  /**
   * Body param: Optional. Attach an iMessage send-with-effect to the outgoing
   * message.
   *
   * **Bubble effects** (apply to a single text bubble):
   *
   * - `slam` — Slam
   * - `loud` — Loud
   * - `gentle` — Gentle
   * - `invisible-ink` — Invisible Ink
   *
   * **Screen effects** (full-screen animation in the recipient's chat):
   *
   * - `echo` — Echo
   * - `spotlight` — Spotlight
   * - `balloons` — Balloons
   * - `confetti` — Confetti
   * - `love` — Love (heart)
   * - `lasers` — Lasers
   * - `fireworks` — Fireworks
   * - `celebration` — Celebration (sparkles)
   *
   * Values are case-insensitive and accept either dashes or spaces
   * (`"Invisible Ink"` and `"invisible-ink"` both work). Pass `"none"` or omit the
   * field to send without an effect.
   *
   * **Limitations:**
   *
   * - iMessage-only — when the chat is delivered as SMS or RCS the message is sent
   *   without an animation.
   * - Not supported alongside the `parts` array (multipart bubbles cannot carry an
   *   effect). Use the top-level `text` field instead.
   * - When `text` is an array, every message in the array is sent with the same
   *   effect.
   */
  effect?:
    | 'slam'
    | 'loud'
    | 'gentle'
    | 'invisible-ink'
    | 'echo'
    | 'spotlight'
    | 'balloons'
    | 'confetti'
    | 'love'
    | 'lasers'
    | 'fireworks'
    | 'celebration'
    | 'none'
    | null;

  /**
   * Body param: E.164 phone number to send from. For Twilio API keys, this is
   * optional — if omitted, the first assigned Twilio number is auto-selected. For
   * Blooio (iMessage) API keys, this selects a specific number from your pool. Must
   * be a number assigned to your API key.
   */
  from_number?: string;

  /**
   * Body param: Rich-link-preview overrides for URL messages (iMessage URL balloon).
   * All fields are optional. Only applies when the message text (or the concatenated
   * part text) is exactly a single http(s) URL. If omitted but the text is a URL,
   * Blooio auto-fetches the page's Open Graph metadata to generate a preview. If the
   * image download fails, the send still succeeds — Blooio silently falls back to
   * the auto-generated preview.
   */
  link_preview?: LinkPreview | null;

  /**
   * Body param: Ordered array of message parts. Two modes:
   *
   * 1. **Multipart mode** — parts sent as a single unified iMessage bubble (mix of
   *    text and attachment parts). This is the default.
   * 2. **URL-balloon batch mode** — triggered when any part has a `link_preview`
   *    object. Each part becomes its own rich-link-preview iMessage; parts are sent
   *    sequentially in array order. In batch mode every part must be text-only with
   *    `text` being a single http(s) URL. Response contains `message_ids[]` +
   *    `count` instead of `message_id`.
   */
  parts?: Array<MessageSendParams.Part>;

  /**
   * Body param: Inline-reply target on `POST /chats/{chatId}/messages`. Pass either
   * `message_id` (preferred — references a Blooio-minted message) or `guid` (raw
   * iMessage GUID, useful for replying to messages received before the row was
   * minted in Blooio). The new send is dispatched to Lava with the resolved
   * `selectedMessageGuid` + `partIndex`, which iMessage renders as an inline reply
   * on the recipient's device.
   */
  reply_to?: MessageSendParams.ReplyTo | null;

  /**
   * Body param: If true, the contact card (Name & Photo) will be shared with this
   * message. The contact card is piggybacked onto the outgoing message. Defaults to
   * false. ⚠️ Only available on **Dedicated Commercial** and **Dedicated
   * Enterprise** plans — other plans receive a `403`.
   */
  share_contact?: boolean;

  /**
   * Body param: Message text. Can be a single string or array of strings (each
   * becomes a separate message)
   */
  text?: string | Array<string>;

  /**
   * Body param: Whether to show typing indicator before sending. Defaults to org
   * preference.
   */
  use_typing_indicator?: boolean;

  /**
   * Header param: Unique key to prevent duplicate message sends. If the same key is
   * used again, the original message_id and status are returned.
   */
  'Idempotency-Key'?: string;
}

export namespace MessageSendParams {
  export interface UnionObjectVariant1 {
    url: string;

    name?: string;
  }

  export interface Part {
    /**
     * Rich-link-preview overrides for URL messages (iMessage URL balloon). All fields
     * are optional. Only applies when the message text (or the concatenated part text)
     * is exactly a single http(s) URL. If omitted but the text is a URL, Blooio
     * auto-fetches the page's Open Graph metadata to generate a preview. If the image
     * download fails, the send still succeeds — Blooio silently falls back to the
     * auto-generated preview.
     */
    link_preview?: MessagesAPI.LinkPreview | null;

    /**
     * Participant phone number or email to @-mention. Only valid with 'text'. The
     * entire text of the part is rendered as the mention.
     */
    mention?: string;

    /**
     * Filename for the attachment. Only valid with 'url'.
     */
    name?: string;

    /**
     * Text content for this part. Mutually exclusive with 'url'.
     */
    text?: string;

    /**
     * URL to an attachment for this part. Mutually exclusive with 'text'.
     */
    url?: string;
  }

  /**
   * Inline-reply target on `POST /chats/{chatId}/messages`. Pass either `message_id`
   * (preferred — references a Blooio-minted message) or `guid` (raw iMessage GUID,
   * useful for replying to messages received before the row was minted in Blooio).
   * The new send is dispatched to Lava with the resolved `selectedMessageGuid` +
   * `partIndex`, which iMessage renders as an inline reply on the recipient's
   * device.
   */
  export interface ReplyTo {
    /**
     * Raw iMessage GUID of the parent. When supplied without a `message_id`, Blooio
     * attempts to look up the parent via `provider_message_guid`; if the parent isn't
     * in our table the send still proceeds (Lava will thread on the device when
     * possible) and the response carries `parent_unresolved: true`.
     */
    guid?: string;

    /**
     * Blooio `message_id` of the parent. Must belong to the same chat, same
     * from-number, and be no older than 30 days. Returns 404 `reply_target_not_found`
     * if unknown.
     */
    message_id?: string;

    /**
     * Which part of the parent to reply to. Defaults to 0 (covers the 99% case of
     * replying to a single-part text message).
     */
    part_index?: number;
  }
}

export declare namespace Messages {
  export {
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
}
