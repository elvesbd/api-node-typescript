import { TableNames } from '../../enums/table-names';
import { Knex } from '../../knex';
import { ICity } from '../../models';

export const getAll = async(page: number, limit: number, filter: string, id=0): Promise<ICity[] | Error> => {
  try {
    const result = await Knex(TableNames.CITY)
      .select('*')
      .where('id', Number(id))
      .orWhere('name', 'like', `%${filter}%`)
      .offset((page - 1) * limit)
      .limit(limit);
   
    if (id > 0 && result.every(item => item.id !== id)) {
      const resultById = await Knex(TableNames.CITY)
        .select('*')
        .where('id', '=', id)
        .first();

      if (resultById) return [...result, resultById];
    }
    
    return result;
  } catch (error) {
    console.log(error);
    return new Error('Failed to get all registers!');
  }
};