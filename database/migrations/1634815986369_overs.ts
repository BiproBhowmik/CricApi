import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Overs extends BaseSchema {
  protected tableName = 'overs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('user_id') //bowler id
        .unsigned()
        .references('users.id')
        .onDelete('CASCADE') // delete post when user is deleted
        .notNullable()
        // table
        // .integer('innings_id')
        // .unsigned()
        // .references('innings.id')
        // .onDelete('CASCADE') // delete post when user is deleted
        // .notNullable()


      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
       table.timestamp('created_at', { useTz: true }).nullable()
       table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
