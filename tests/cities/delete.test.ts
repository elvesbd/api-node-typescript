import { StatusCodes } from 'http-status-codes';
import { request } from '../jest.setup';

describe('Cities - Delete', () => {
  it('must a delete a register', async () => {
    const response = await request
      .post('/cities')
      .send({
        name: 'Caxias do Sul'
      });

    const sut = await request
      .delete(`/cities/${response.body}`)
      .send();

    expect(response.statusCode).toBe(StatusCodes.CREATED);
    expect(sut.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });

  it('must delete a record that was not found', async () => {
    const sut = await request
      .delete('/cities/99999')
      .send();

    expect(sut.statusCode).toBe(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(sut.body).toHaveProperty('errors.default');
  });
});

