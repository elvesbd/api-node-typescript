import { Router } from 'express';
import { CitiesController } from '../../controllers';

const route = Router();


route.post('/cities', CitiesController.createValidation, CitiesController.create);
route.get('/cities/:id', CitiesController.getByIdValidation, CitiesController.getById);
route.get('/cities', CitiesController.getAllValidation, CitiesController.getAll);

export { route };