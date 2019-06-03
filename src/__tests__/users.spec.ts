import * as request from 'supertest';
import { application } from '../app';

const req = request(application);

describe('Server UP', () => {
  test('It should response the GET method', async () => {
    const response = await req
      .get('/')
      .set('Accept', 'application/json');
    expect(response.status).toBe(200);
  });
});
