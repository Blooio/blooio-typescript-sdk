// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blooio from '@blooio/sdk';

const client = new Blooio({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource polls', () => {
  // Mock server tests are disabled
  test.skip('getResults: only required params', async () => {
    const responsePromise = client.chats.polls.getResults('pollId', { chatId: 'chatId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getResults: required and optional params', async () => {
    const response = await client.chats.polls.getResults('pollId', { chatId: 'chatId' });
  });

  // Mock server tests are disabled
  test.skip('send: only required params', async () => {
    const responsePromise = client.chats.polls.send('chatId', { options: ['string', 'string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('send: required and optional params', async () => {
    const response = await client.chats.polls.send('chatId', {
      options: ['string', 'string'],
      title: 'title',
    });
  });
});
