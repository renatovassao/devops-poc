import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../src/app';

describe('GET /', () => {
  it('should return a list of users and a 200 status code', async () => {
    const response = await request(app).get('/');

    console.log({ body: response.body });

    expect(response.status).toBe(200);
    expect(response.body).toEqual("Hello world: 2");
  });
});