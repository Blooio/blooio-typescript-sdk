# Me

Types:

- <code><a href="./src/resources/me.ts">MeRetrieveResponse</a></code>

Methods:

- <code title="get /v1/api/me">client.me.<a href="./src/resources/me.ts">retrieve</a>() -> MeRetrieveResponse</code>

# Contacts

Types:

- <code><a href="./src/resources/contacts.ts">ContactCheckCapabilitiesResponse</a></code>

Methods:

- <code title="get /v1/api/contacts/{contact}/capabilities">client.contacts.<a href="./src/resources/contacts.ts">checkCapabilities</a>(contact) -> ContactCheckCapabilitiesResponse</code>

# Messages

Types:

- <code><a href="./src/resources/messages.ts">MessageRetrieveResponse</a></code>
- <code><a href="./src/resources/messages.ts">MessageCancelResponse</a></code>
- <code><a href="./src/resources/messages.ts">MessageGetStatusResponse</a></code>
- <code><a href="./src/resources/messages.ts">MessageSendResponse</a></code>

Methods:

- <code title="get /v1/api/messages/{messageId}">client.messages.<a href="./src/resources/messages.ts">retrieve</a>(messageID) -> MessageRetrieveResponse</code>
- <code title="delete /v1/api/messages/{messageId}">client.messages.<a href="./src/resources/messages.ts">cancel</a>(messageID) -> MessageCancelResponse</code>
- <code title="get /v1/api/messages/{messageId}/status">client.messages.<a href="./src/resources/messages.ts">getStatus</a>(messageID) -> MessageGetStatusResponse</code>
- <code title="post /v1/api/messages">client.messages.<a href="./src/resources/messages.ts">send</a>({ ...params }) -> MessageSendResponse</code>

# Config

## Webhook

Types:

- <code><a href="./src/resources/config/webhook.ts">WebhookRetrieveResponse</a></code>
- <code><a href="./src/resources/config/webhook.ts">WebhookUpdateResponse</a></code>

Methods:

- <code title="get /v1/api/config/webhook">client.config.webhook.<a href="./src/resources/config/webhook.ts">retrieve</a>() -> WebhookRetrieveResponse</code>
- <code title="put /v1/api/config/webhook">client.config.webhook.<a href="./src/resources/config/webhook.ts">update</a>({ ...params }) -> WebhookUpdateResponse</code>

# Batches

Methods:

- <code title="post /v1/api/batches">client.batches.<a href="./src/resources/batches.ts">create</a>() -> void</code>
- <code title="get /v1/api/batches/{batchId}">client.batches.<a href="./src/resources/batches.ts">retrieve</a>(batchID) -> void</code>
- <code title="get /v1/api/batches/{batchId}/messages">client.batches.<a href="./src/resources/batches.ts">listMessages</a>(batchID) -> void</code>
- <code title="get /v1/api/batches/{batchId}/status">client.batches.<a href="./src/resources/batches.ts">retrieveStatus</a>(batchID) -> void</code>
