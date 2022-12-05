import { TableNames } from '../../enums/table-names';
import { Knex } from '../../knex';

export const remove = async(id: number): Promise<void | Error> => {
  try {
    const result = await Knex(TableNames.CITY).where('id', '=', id).del();
    if (result > 0) return; 

    return new Error('Failed to remove city');
  } catch (error) {
    console.log(error);
    return new Error('Failed to remove city');
  }
};