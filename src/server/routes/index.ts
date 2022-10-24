import { Router } from 'express';
import { CitiesController } from '../../controllers';

const route = Router();


route.post('/cities', CitiesController.createValidation, CitiesController.create);

export { route };