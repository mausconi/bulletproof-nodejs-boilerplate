import * as request from 'supertest';
import { application } from '../app';
import logger from '../config/winston';

const req = request(application);

describe('Server UP', () => {
  test('It should response the GET method', async () => {
    const response = await req
      .get('/users')
      .set('Accept', 'application/json');
    logger.info(response.text);
    expect(response.status).toBe(200);
  });
});
