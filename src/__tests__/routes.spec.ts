import * as request from 'supertest';
import { application } from '../app';

process.env.NODE_ENV = 'test';
const req = request(application);

describe('routes', () => {

  test('a valid string query', async () => {
    const response = await req.get('/users');
    expect(response.status).toEqual(200);
  });

  test('a non-existing api method', async () => {
    const response = await req.get('/donaldtrump');
    expect(response.status).toEqual(404);
  });

  test('an empty string', async () => {
    const response = await req.get('/users?q=');
    expect(response.status).toEqual(400);
  });
});
