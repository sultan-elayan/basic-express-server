'use strict';
const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('My API Server Test ', () => {
  test('name = string ?', async () => {
    const query = 'Sultan';
    let response = await supertest(server.app).get(`/person?name=${query}`);
    expect(response.status).toBe(200);
  });

  test('check name ', async () => {
    const query = 'Sultan';
    let response = await supertest(server.app).get(`/person?name=${query}`);
    console.log('response.body', response.body);
    expect(response.body.name).toBe(query);
  });
});
