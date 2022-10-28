import * as create  from './create';
import * as getAll from './get-all';
import * as getById from './get-by-id';
import * as remove from './remove';
import * as update from './update';

export const CitiesController = {
  ...create,
  ...getAll,
  ...getById,
  ...update,
  ...remove
};