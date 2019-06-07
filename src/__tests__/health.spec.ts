import * as request from 'supertest';
import { application } from '../app';

const req = request(application);

describe('Health', () => {
  test('It should response server up', async () => {
    const response = await req
      .get('/health')
      .set('Accept', 'application/json');
    expect(response.status).toBe(200);
    expect(response.text).toBe('I am UP !!!');
  });
});
