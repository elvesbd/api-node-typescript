import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

interface ICity {
  name: string;
  state: string;
}

const bodyValidation: yup.SchemaOf<ICity> = yup.object().shape({
  name: yup.string().required().min(3),
  state: yup.string().required()
});

export const create = async (req: Request<{}, {}, ICity>, res: Response) => {
  
  try {
    await bodyValidation.validate(req.body, { abortEarly: false });
  } catch (err) {
    const yupError = err as yup.ValidationError;
    const errors: Record<string, string> = {};

    yupError.inner.forEach((err) => {
      if (!err.path) return;
      errors[err.path] = err.message;
    });

    return res.status(StatusCodes.BAD_REQUEST).json({ errors });
  }

  return res.send('create').status(StatusCodes.CREATED);
};