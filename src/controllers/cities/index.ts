import * as create  from './create';
import * as getAll from './get-all';
import * as getById from './get-by-id';

export const CitiesController = {
  ...create,
  ...getAll,
  ...getById,
};