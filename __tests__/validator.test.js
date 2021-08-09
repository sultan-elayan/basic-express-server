'use strict';

const server = require('../src/server');
const supertest = require('supertest');

test('name X=X string ', async () => {
  const response = await supertest(server.app).get('/person');
  expect(response.status).toBe(500);
});