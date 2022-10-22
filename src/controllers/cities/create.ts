import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { validation } from '../../shared/middlewares';
import * as yup from 'yup';

interface ICity {
  name: string;
  state: string;
}

interface IFilter {
  filter: string;
  limit: string
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<ICity>(
    yup.object().shape({
      name: yup.string().required().min(3),
      state: yup.string().required()
    })
  ),
  query: getSchema<IFilter>(
    yup.object().shape({
      filter: yup.string().required().min(3),
      limit: yup.string().required().min(3),
    })
  )
}));

export const create = async (req: Request<{}, {}, ICity>, res: Response) => {
  return res.send('create').status(StatusCodes.CREATED);
};