import { StatusCodes } from 'http-status-codes';
import { request } from '../jest.setup';

describe('Cities - Create', () => {
  it('should be create a register', async () => {
    const response = await request
      .post('/cities')
      .send({
        name: 'Caxias do Sul'
      });    
    
    expect(response.statusCode).toBe(StatusCodes.CREATED);
    expect(typeof response.body).toBe('number');
  });

  it('should be return an error if name very small', async () => {
    const response = await request
      .post('/cities')
      .send({
        name: 'Ca'
      });
  
    expect(response.statusCode).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body).toEqual({
      errors: {
        body: {
          name: 'Deve ter pelo menos 3 caracteres'
        }
      }
    });
  });
});

