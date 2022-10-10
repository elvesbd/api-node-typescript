import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

interface ICity {
  name: string;
}

export const create = (req: Request<{}, {}, ICity>, res: Response) => {
  const data: ICity = req.body;

  return res.send('create').status(StatusCodes.CREATED);
};