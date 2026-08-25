# Me

Types:

- <code><a href="./src/resources/me/me.ts">MeRetrieveResponse</a></code>

Methods:

- <code title="get /me">client.me.<a href="./src/resources/me/me.ts">retrieve</a>() -> MeRetrieveResponse</code>

## Numbers

Types:

- <code><a href="./src/resources/me/numbers/numbers.ts">NumberListResponse</a></code>

Methods:

- <code title="get /me/numbers">client.me.numbers.<a href="./src/resources/me/numbers/numbers.ts">list</a>() -> NumberListResponse</code>

### ContactCard

Types:

- <code><a href="./src/resources/me/numbers/contact-card.ts">ContactCardRetrieveResponse</a></code>
- <code><a href="./src/resources/me/numbers/contact-card.ts">ContactCardUpdateResponse</a></code>

Methods:

- <code title="get /me/numbers/{number}/contact-card">client.me.numbers.contactCard.<a href="./src/resources/me/numbers/contact-card.ts">retrieve</a>(number) -> ContactCardRetrieveResponse</code>
- <code title="put /me/numbers/{number}/contact-card">client.me.numbers.contactCard.<a href="./src/resources/me/numbers/contact-card.ts">update</a>(number, { ...params }) -> ContactCardUpdateResponse</code>

# Contacts

Types:

- <code><a href="./src/resources/contacts/contacts.ts">Contact</a></code>
- <code><a href="./src/resources/contacts/contacts.ts">DeleteResponse</a></code>
- <code><a href="./src/resources/contacts/contacts.ts">Pagination</a></code>
- <code><a href="./src/resources/contacts/contacts.ts">ContactListResponse</a></code>
- <code><a href="./src/resources/contacts/contacts.ts">ContactCheckCapabilitiesResponse</a></code>

Methods:

- <code title="post /contacts">client.contacts.<a href="./src/resources/contacts/contacts.ts">create</a>({ ...params }) -> Contact</code>
- <code title="get /contacts/{contactId}">client.contacts.<a href="./src/resources/contacts/contacts.ts">retrieve</a>(contactID) -> Contact</code>
- <code title="patch /contacts/{contactId}">client.contacts.<a href="./src/resources/contacts/contacts.ts">update</a>(contactID, { ...params }) -> Contact</code>
- <code title="get /contacts">client.contacts.<a href="./src/resources/contacts/contacts.ts">list</a>({ ...params }) -> ContactListResponse</code>
- <code title="delete /contacts/{contactId}">client.contacts.<a href="./src/resources/contacts/contacts.ts">delete</a>(contactID) -> DeleteResponse</code>
- <code title="get /contacts/{contactId}/capabilities">client.contacts.<a href="./src/resources/contacts/contacts.ts">checkCapabilities</a>(contactID) -> ContactCheckCapabilitiesResponse</code>

## Tags

Types:

- <code><a href="./src/resources/contacts/tags.ts">TagListResponse</a></code>
- <code><a href="./src/resources/contacts/tags.ts">TagAddResponse</a></code>

Methods:

- <code title="get /contacts/{contactId}/tags">client.contacts.tags.<a href="./src/resources/contacts/tags.ts">list</a>(contactID) -> TagListResponse</code>
- <code title="post /contacts/{contactId}/tags">client.contacts.tags.<a href="./src/resources/contacts/tags.ts">add</a>(contactID, { ...params }) -> TagAddResponse</code>
- <code title="delete /contacts/{contactId}/tags/{tag}">client.contacts.tags.<a href="./src/resources/contacts/tags.ts">remove</a>(tag, { ...params }) -> DeleteResponse</code>

# Location

## Contacts

Types:

- <code><a href="./src/resources/location/contacts.ts">ContactLocation</a></code>
- <code><a href="./src/resources/location/contacts.ts">ContactListResponse</a></code>
- <code><a href="./src/resources/location/contacts.ts">ContactRefreshResponse</a></code>

Methods:

- <code title="get /location/contacts/{handle}">client.location.contacts.<a href="./src/resources/location/contacts.ts">retrieve</a>(handle) -> ContactLocation</code>
- <code title="get /location/contacts">client.location.contacts.<a href="./src/resources/location/contacts.ts">list</a>() -> ContactListResponse</code>
- <code title="post /location/contacts/refresh">client.location.contacts.<a href="./src/resources/location/contacts.ts">refresh</a>() -> ContactRefreshResponse</code>

# Facetime

Methods:

- <code title="post /facetime/calls">client.facetime.<a href="./src/resources/facetime.ts">initiateCall</a>({ ...params }) -> void</code>

# Groups

Types:

- <code><a href="./src/resources/groups/groups.ts">Group</a></code>
- <code><a href="./src/resources/groups/groups.ts">GroupCreateResponse</a></code>
- <code><a href="./src/resources/groups/groups.ts">GroupUpdateResponse</a></code>
- <code><a href="./src/resources/groups/groups.ts">GroupListResponse</a></code>
- <code><a href="./src/resources/groups/groups.ts">GroupDeleteResponse</a></code>

Methods:

- <code title="post /groups">client.groups.<a href="./src/resources/groups/groups.ts">create</a>({ ...params }) -> GroupCreateResponse</code>
- <code title="get /groups/{groupId}">client.groups.<a href="./src/resources/groups/groups.ts">retrieve</a>(groupID) -> Group</code>
- <code title="patch /groups/{groupId}">client.groups.<a href="./src/resources/groups/groups.ts">update</a>(groupID, { ...params }) -> GroupUpdateResponse</code>
- <code title="get /groups">client.groups.<a href="./src/resources/groups/groups.ts">list</a>({ ...params }) -> GroupListResponse</code>
- <code title="delete /groups/{groupId}">client.groups.<a href="./src/resources/groups/groups.ts">delete</a>(groupID) -> GroupDeleteResponse</code>

## Members

Types:

- <code><a href="./src/resources/groups/members.ts">GroupMember</a></code>
- <code><a href="./src/resources/groups/members.ts">MemberListResponse</a></code>

Methods:

- <code title="get /groups/{groupId}/members">client.groups.members.<a href="./src/resources/groups/members.ts">list</a>(groupID, { ...params }) -> MemberListResponse</code>
- <code title="post /groups/{groupId}/members">client.groups.members.<a href="./src/resources/groups/members.ts">add</a>(groupID, { ...params }) -> void</code>
- <code title="delete /groups/{groupId}/members/{contactId}">client.groups.members.<a href="./src/resources/groups/members.ts">remove</a>(contactID, { ...params }) -> void</code>

## Icon

Types:

- <code><a href="./src/resources/groups/icon.ts">GroupIcon</a></code>

Methods:

- <code title="delete /groups/{groupId}/icon">client.groups.icon.<a href="./src/resources/groups/icon.ts">remove</a>(groupID) -> GroupIcon</code>
- <code title="post /groups/{groupId}/icon">client.groups.icon.<a href="./src/resources/groups/icon.ts">set</a>(groupID, { ...params }) -> GroupIcon</code>

# Webhooks

Types:

- <code><a href="./src/resources/webhooks/webhooks.ts">Webhook</a></code>
- <code><a href="./src/resources/webhooks/webhooks.ts">WebhookCreateResponse</a></code>
- <code><a href="./src/resources/webhooks/webhooks.ts">WebhookListResponse</a></code>
- <code><a href="./src/resources/webhooks/webhooks.ts">WebhookDeleteResponse</a></code>

Methods:

- <code title="post /webhooks">client.webhooks.<a href="./src/resources/webhooks/webhooks.ts">create</a>({ ...params }) -> WebhookCreateResponse</code>
- <code title="get /webhooks/{webhookId}">client.webhooks.<a href="./src/resources/webhooks/webhooks.ts">retrieve</a>(webhookID) -> Webhook</code>
- <code title="patch /webhooks/{webhookId}">client.webhooks.<a href="./src/resources/webhooks/webhooks.ts">update</a>(webhookID, { ...params }) -> Webhook</code>
- <code title="get /webhooks">client.webhooks.<a href="./src/resources/webhooks/webhooks.ts">list</a>() -> WebhookListResponse</code>
- <code title="delete /webhooks/{webhookId}">client.webhooks.<a href="./src/resources/webhooks/webhooks.ts">delete</a>(webhookID) -> WebhookDeleteResponse</code>

## Secret

Types:

- <code><a href="./src/resources/webhooks/secret.ts">SecretRotateResponse</a></code>

Methods:

- <code title="post /webhooks/{webhookId}/secret/rotate">client.webhooks.secret.<a href="./src/resources/webhooks/secret.ts">rotate</a>(webhookID) -> SecretRotateResponse</code>

## Logs

Types:

- <code><a href="./src/resources/webhooks/logs.ts">LogListResponse</a></code>
- <code><a href="./src/resources/webhooks/logs.ts">LogReplayResponse</a></code>

Methods:

- <code title="get /webhooks/{webhookId}/logs">client.webhooks.logs.<a href="./src/resources/webhooks/logs.ts">list</a>(webhookID, { ...params }) -> LogListResponse</code>
- <code title="post /webhooks/{webhookId}/logs/{eventId}/replay">client.webhooks.logs.<a href="./src/resources/webhooks/logs.ts">replay</a>(eventID, { ...params }) -> LogReplayResponse</code>

# Chats

Types:

- <code><a href="./src/resources/chats/chats.ts">LastMessage</a></code>
- <code><a href="./src/resources/chats/chats.ts">ChatRetrieveResponse</a></code>
- <code><a href="./src/resources/chats/chats.ts">ChatListResponse</a></code>
- <code><a href="./src/resources/chats/chats.ts">ChatMarkAsReadResponse</a></code>
- <code><a href="./src/resources/chats/chats.ts">ChatShareContactCardResponse</a></code>

Methods:

- <code title="get /chats/{chatId}">client.chats.<a href="./src/resources/chats/chats.ts">retrieve</a>(chatID) -> ChatRetrieveResponse</code>
- <code title="get /chats">client.chats.<a href="./src/resources/chats/chats.ts">list</a>({ ...params }) -> ChatListResponse</code>
- <code title="post /chats/{chatId}/read">client.chats.<a href="./src/resources/chats/chats.ts">markAsRead</a>(chatID) -> ChatMarkAsReadResponse</code>
- <code title="post /chats/{chatId}/contact-card">client.chats.<a href="./src/resources/chats/chats.ts">shareContactCard</a>(chatID) -> ChatShareContactCardResponse</code>

## Messages

Types:

- <code><a href="./src/resources/chats/messages.ts">LinkPreview</a></code>
- <code><a href="./src/resources/chats/messages.ts">Reaction</a></code>
- <code><a href="./src/resources/chats/messages.ts">MessageRetrieveResponse</a></code>
- <code><a href="./src/resources/chats/messages.ts">MessageListResponse</a></code>
- <code><a href="./src/resources/chats/messages.ts">MessageGetStatusResponse</a></code>
- <code><a href="./src/resources/chats/messages.ts">MessageReactResponse</a></code>
- <code><a href="./src/resources/chats/messages.ts">MessageSendResponse</a></code>

Methods:

- <code title="get /chats/{chatId}/messages/{messageId}">client.chats.messages.<a href="./src/resources/chats/messages.ts">retrieve</a>(messageID, { ...params }) -> MessageRetrieveResponse</code>
- <code title="get /chats/{chatId}/messages">client.chats.messages.<a href="./src/resources/chats/messages.ts">list</a>(chatID, { ...params }) -> MessageListResponse</code>
- <code title="get /chats/{chatId}/messages/{messageId}/status">client.chats.messages.<a href="./src/resources/chats/messages.ts">getStatus</a>(messageID, { ...params }) -> MessageGetStatusResponse</code>
- <code title="post /chats/{chatId}/messages/{messageId}/reactions">client.chats.messages.<a href="./src/resources/chats/messages.ts">react</a>(messageID, { ...params }) -> MessageReactResponse</code>
- <code title="post /chats/{chatId}/messages">client.chats.messages.<a href="./src/resources/chats/messages.ts">send</a>(chatID, { ...params }) -> MessageSendResponse</code>

## Polls

Types:

- <code><a href="./src/resources/chats/polls.ts">PollGetResultsResponse</a></code>
- <code><a href="./src/resources/chats/polls.ts">PollSendResponse</a></code>

Methods:

- <code title="get /chats/{chatId}/polls/{pollId}">client.chats.polls.<a href="./src/resources/chats/polls.ts">getResults</a>(pollID, { ...params }) -> PollGetResultsResponse</code>
- <code title="post /chats/{chatId}/polls">client.chats.polls.<a href="./src/resources/chats/polls.ts">send</a>(chatID, { ...params }) -> PollSendResponse</code>

## Typing

Types:

- <code><a href="./src/resources/chats/typing.ts">TypingResponse</a></code>

Methods:

- <code title="post /chats/{chatId}/typing">client.chats.typing.<a href="./src/resources/chats/typing.ts">start</a>(chatID) -> TypingResponse</code>
- <code title="delete /chats/{chatId}/typing">client.chats.typing.<a href="./src/resources/chats/typing.ts">stop</a>(chatID) -> TypingResponse</code>

## Background

Types:

- <code><a href="./src/resources/chats/background.ts">ChatBackgroundResponse</a></code>

Methods:

- <code title="get /chats/{chatId}/background">client.chats.background.<a href="./src/resources/chats/background.ts">retrieve</a>(chatID) -> ChatBackgroundResponse</code>
- <code title="delete /chats/{chatId}/background">client.chats.background.<a href="./src/resources/chats/background.ts">remove</a>(chatID) -> ChatBackgroundResponse</code>
- <code title="put /chats/{chatId}/background">client.chats.background.<a href="./src/resources/chats/background.ts">set</a>(chatID, { ...params }) -> ChatBackgroundResponse</code>

# PhoneNumbers

Types:

- <code><a href="./src/resources/phone-numbers/phone-numbers.ts">PhoneNumberBatchCreateResponse</a></code>

Methods:

- <code title="post /phone-numbers/batch">client.phoneNumbers.<a href="./src/resources/phone-numbers/phone-numbers.ts">batchCreate</a>({ ...params }) -> PhoneNumberBatchCreateResponse</code>

## Lookup

Types:

- <code><a href="./src/resources/phone-numbers/lookup.ts">PhoneNumberLookupResult</a></code>

Methods:

- <code title="post /phone-numbers/lookup">client.phoneNumbers.lookup.<a href="./src/resources/phone-numbers/lookup.ts">create</a>({ ...params }) -> PhoneNumberLookupResult</code>
- <code title="get /phone-numbers/lookup">client.phoneNumbers.lookup.<a href="./src/resources/phone-numbers/lookup.ts">retrieve</a>({ ...params }) -> PhoneNumberLookupResult</code>
