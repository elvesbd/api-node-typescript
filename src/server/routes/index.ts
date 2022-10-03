import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (_: Request, res: Response) => {
  return res.send('Hello, world!');
});

router.post('/create', (req: Request, res: Response) => {
  return res.status(StatusCodes.OK).json(req.body);
});

export { router };