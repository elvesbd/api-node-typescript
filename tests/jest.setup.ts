import supertest from 'supertest';
import { Knex } from '../src/database/knex';
import { server } from '../src/server';

beforeAll(async () => {
  await Knex.migrate.latest();
});

afterAll(async () => {
  await Knex.destroy();
});

export const request = supertest(server);