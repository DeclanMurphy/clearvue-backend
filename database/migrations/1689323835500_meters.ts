import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Meters extends BaseSchema {
  protected tableName = 'meters'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('customer_id')
        .unsigned()
        .references('id')
        .inTable('customers')
        .onDelete('CASCADE')
      table.integer('site_id').unsigned().references('id').inTable('sites').onDelete('CASCADE')
      table.timestamps(true)
      table.string('name').notNullable()
      table.string('serial_number').unique().notNullable()
      table.dateTime('installation_date')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
