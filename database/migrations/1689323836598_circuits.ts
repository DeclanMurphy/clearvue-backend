import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Circuits extends BaseSchema {
  protected tableName = 'circuits'

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
      table.integer('meter_id').unsigned().references('id').inTable('meters').onDelete('CASCADE')
      table
        .integer('circuit_id')
        .unsigned()
        .references('id')
        .inTable('circuits')
        .onDelete('CASCADE')

      table.timestamps(true)
      table.string('name').notNullable()
      table.dateTime('installation_date')
      table.boolean('is_main').defaultTo(false)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
