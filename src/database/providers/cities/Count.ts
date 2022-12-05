import { TableNames } from '../../enums/table-names';
import { Knex } from '../../knex';

export const count = async(filter: ''): Promise<number | Error> => {
  try {
    const [{ count }] = await Knex(TableNames.CITY)
      .where('name', 'like', `${filter}`)
      .count<[{ count: number }]>('* as count');

    if (Number.isInteger(Number(count))) return Number(count);

    return new Error('Failed to consult total registers city!');
  } catch (error) {
    console.log(error);
    return new Error('Failed to consult total registers city!');
  }
};