import { StatusCodes } from 'http-status-codes';
import { request } from '../jest.setup';

describe('Cities - Update', () => {
  it('must a get register by id', async () => {
    const response = await request
      .post('/cities')
      .send({
        name: 'Caxias do Sul'
      });

    const sut = await request
      .put(`/cities/${response.body}`)
      .send({ name: 'Caxias do Sul Atualizado' });

    expect(sut.statusCode).toBe(StatusCodes.NO_CONTENT);
  });

  it('must attempt to update a record that does not exist', async () => {
    const sut = await request
      .put('/cities/99999')
      .send({ name: 'Caxias do Sul' });

    expect(sut.statusCode).toBe(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(sut.body).toHaveProperty('errors.default');
  });
});

