import * as create from './Create';
import * as getAll from './GetAll';
import * as getById from './GetById';
import * as remove  from './Remove';
import * as update from './Update';
import * as count from './Count';

export const CitiesProvider = {
  ...create,
  ...getAll,
  ...getById,
  ...remove,
  ...update,
  ...count,
};