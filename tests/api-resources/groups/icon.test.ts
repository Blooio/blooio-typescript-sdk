// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blooio, { toFile } from 'blooio';

const client = new Blooio({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource icon', () => {
  // Mock server tests are disabled
  test.skip('remove', async () => {
    const responsePromise = client.groups.icon.remove('grp_abc123def456');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('set: only required params', async () => {
    const responsePromise = client.groups.icon.set('grp_abc123def456', {
      icon: await toFile(Buffer.from('Example data'), 'README.md'),
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('set: required and optional params', async () => {
    const response = await client.groups.icon.set('grp_abc123def456', {
      icon: await toFile(Buffer.from('Example data'), 'README.md'),
    });
  });
});
