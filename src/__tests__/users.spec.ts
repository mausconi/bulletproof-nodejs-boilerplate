import * as request from 'supertest';
import { application } from '../app';
import logger from '../config/winston';

const req = request(application);

describe('Server UP', () => {
  test('It should GET all users', async () => {
    const response = await req
      .get('/users')
      .set('Accept', 'application/json');
    expect(response.status).toBe(200);
  });

  test('It should GET a user by ID', async () => {
    const response = await req
      .get('/users')
      .set('Accept', 'application/json');
    expect(response.status).toBe(200);
  });
});
