import { Knex } from 'knex';
import { TableNames } from '../enums/table-names';


export async function up(knex: Knex): Promise<void> {
  return knex
    .schema
    .createTable(TableNames.CITY, table => {
      table.bigIncrements('id').primary().index();
      table.string('name', 150).index().notNullable();

      table.comment('Table used to store system CITYs.');
    })
    .then(() => {
      console.log(`# Created table ${TableNames.CITY}`);
    });
}


export async function down(knex: Knex): Promise<void> {
  return knex
    .schema
    .dropTable(TableNames.CITY)
    .then(() => {
      console.log(`# Dropped table ${TableNames.CITY}`);
    });
}

