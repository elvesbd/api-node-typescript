import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { validation } from '../../shared/middlewares';
import * as yup from 'yup';

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
  console.log(req.params);
  
  return res.send('not implemented').status(StatusCodes.INTERNAL_SERVER_ERROR);
};