import { TableNames } from '../../enums/table-names';
import { Knex } from '../../knex';
import { ICity } from '../../models';

export const create = async(city: Omit<ICity, 'id'>): Promise<number | Error> => {
  try {
    const [result] = await Knex(TableNames.CITY).insert(city).returning('id');
    if (typeof result === 'object') {
      return result.id;
    } else if (typeof result === 'number') {
      return result;
    }

    return new Error('Failed to create city');
  } catch (error) {
    console.log(error);
    return new Error('Failed to create city');
  }
};