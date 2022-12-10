import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { validation } from '../../shared/middlewares';
import * as yup from 'yup';
import { ICity } from '../../database/models';
import { CitiesProvider } from '../../database/providers/cities';

interface IParamProps {
  id?: number;
}

interface IBodyProps extends Omit<ICity, 'id'> {}

export const updateValidation = validation((getSchema) => ({
  params: getSchema<IParamProps>(
    yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
    })
  ),
  body: getSchema<IBodyProps>(
    yup.object().shape({
      name: yup.string().required().min(3),
    })
  ),
}));

export const update = async (req: Request<IParamProps, {}, IBodyProps>, res: Response) => {
  if (!req.params.id) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: 'id parameter not informed'
      }
    });
  }

  const result = await CitiesProvider.update(req.params.id, req.body);
  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  }
  return res.status(StatusCodes.NO_CONTENT).json(result);
};
