import { StatusCodes } from 'http-status-codes';
import { request } from '../jest.setup';

describe('Cities - GetAll', () => {
  it('mus a get all registers', async () => {
    await request
      .post('/cities')
      .send({
        name: 'Caxias do Sul'
      });

    const sut = await request
      .get('/cities')
      .send();

    expect(Number(sut.header['x-total-count'])).toBeGreaterThan(0);
    expect(sut.statusCode).toBe(StatusCodes.OK);
    expect(sut.body.length).toBeGreaterThan(0);
  });
});

