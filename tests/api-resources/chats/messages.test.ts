// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blooio from 'blooio';

const client = new Blooio({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource messages', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.chats.messages.retrieve('msg_abc123def456', { chatId: 'chatId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.chats.messages.retrieve('msg_abc123def456', { chatId: 'chatId' });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.chats.messages.list('chatId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.chats.messages.list(
        'chatId',
        {
          direction: 'inbound',
          limit: 1,
          offset: 0,
          since: 0,
          sort: 'asc',
          until: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Blooio.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getStatus: only required params', async () => {
    const responsePromise = client.chats.messages.getStatus('msg_abc123def456', { chatId: 'chatId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getStatus: required and optional params', async () => {
    const response = await client.chats.messages.getStatus('msg_abc123def456', { chatId: 'chatId' });
  });

  // Mock server tests are disabled
  test.skip('react: only required params', async () => {
    const responsePromise = client.chats.messages.react('messageId', { chatId: 'chatId', reaction: '+love' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('react: required and optional params', async () => {
    const response = await client.chats.messages.react('messageId', {
      chatId: 'chatId',
      reaction: '+love',
      direction: 'inbound',
    });
  });

  // Mock server tests are disabled
  test.skip('send', async () => {
    const responsePromise = client.chats.messages.send('chatId', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
