// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blooio from 'blooio';

const client = new Blooio({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource logs', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.webhooks.logs.list('wh_abc123def456');
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
      client.webhooks.logs.list(
        'wh_abc123def456',
        {
          limit: 1,
          max_status: 0,
          min_status: 0,
          offset: 0,
          sort: 'asc',
          status: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Blooio.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('replay: only required params', async () => {
    const responsePromise = client.webhooks.logs.replay('eventId', { webhookId: 'wh_abc123def456' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('replay: required and optional params', async () => {
    const response = await client.webhooks.logs.replay('eventId', { webhookId: 'wh_abc123def456' });
  });
});
