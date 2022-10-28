import { Router } from 'express';
import { CitiesController } from '../../controllers';

const route = Router();


route.post('/cities', CitiesController.createValidation, CitiesController.create);
route.get('/cities', CitiesController.getAllValidation, CitiesController.getAll);
route.get('/cities/:id', CitiesController.getByIdValidation, CitiesController.getById);
route.put('/cities/:id', CitiesController.updateValidation, CitiesController.update);

export { route };