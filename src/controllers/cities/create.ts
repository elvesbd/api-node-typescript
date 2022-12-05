import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { validation } from '../../shared/middlewares';
import * as yup from 'yup';
import { ICity } from '../../database/models';
import { CitiesProvider } from '../../database/providers/cities';

interface IBodyProps extends Omit<ICity, 'id'> {}

export const createValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      name: yup.string().required().min(3).max(150),
    })
  ),
}));

export const create = async (req: Request<{}, {}, ICity>, res: Response) => {
  const response = await CitiesProvider.create(req.body);

  if (response instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: response.message,
      }
    });
  }
  return res.status(StatusCodes.CREATED).json(response);
};