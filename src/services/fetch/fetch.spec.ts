import { fetch } from './fetch';

describe('fetch', () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';

  it('GET', async () => {
    const { status, data } = await fetch({ url, method: 'GET' });

    console.log(data);
    expect(status).toBe(200);
  });

  it('POST', async () => {
    const { status } = await fetch({ url, method: 'POST' });
    expect(status).toBe(201);
  });

  it('PUT', async () => {
    const { status } = await fetch({ url: url + '/1', method: 'PUT' });
    expect(status).toBe(200);
  });

  it('DELETE', async () => {
    const { status } = await fetch({ url: url + '/1', method: 'DELETE' });
    expect(status).toBe(200);
  });
});
