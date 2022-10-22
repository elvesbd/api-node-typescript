import { Router } from 'express';
import { CitiesController } from '../../controllers';

const router = Router();


router.post('/cities', CitiesController.createValidation, CitiesController.create);

export { router };