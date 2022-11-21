import { StatusCodes } from 'http-status-codes';
import { request } from '../jest.setup';

describe('Cities - GetById', () => {
  it('must a get register by id', async () => {
    const response = await request
      .post('/cities')
      .send({
        name: 'Caxias do Sul'
      });

    const sut = await request
      .get(`/cities/${response.body}`)
      .send();

    expect(sut.statusCode).toBe(StatusCodes.OK);
    expect(sut.body).toHaveProperty('name', 'Caxias do Sul');
  });

  it('must delete a record that was not found', async () => {
    const sut = await request
      .get('/cities/99999')
      .send();

    expect(sut.statusCode).toBe(StatusCodes.INTERNAL_SERVER_ERROR);
  });
});

