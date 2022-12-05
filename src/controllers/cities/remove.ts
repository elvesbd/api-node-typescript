import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { validation } from '../../shared/middlewares';
import * as yup from 'yup';
import { CitiesProvider } from '../../database/providers/cities';

interface IParamProps {
  id?: number;
}

export const removeValidation = validation((getSchema) => ({
  params: getSchema<IParamProps>(
    yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
    })
  ),
}));

export const remove = async (req: Request<IParamProps>, res: Response) => {
  const response = await CitiesProvider.remove(req.params.id);

  if (response instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: response.message,
      }
    });
  }
  return res.status(StatusCodes.OK);
};
