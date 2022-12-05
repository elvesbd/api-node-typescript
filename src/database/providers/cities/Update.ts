import { TableNames } from '../../enums/table-names';
import { Knex } from '../../knex';
import { ICity } from '../../models';

export const update = async(id: number, city: Omit<ICity, 'id'>): Promise<void | Error> => {
  try {
    const result = await Knex(TableNames.CITY)
      .update(city)
      .where('id', '=', id);

    if (result > 0) return;
   

    return new Error('Failed to update city');
  } catch (error) {
    console.log(error);
    return new Error('Failed to update city');
  }
};