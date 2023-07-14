import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Sites extends BaseSchema {
  protected tableName = 'sites'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('customer_id')
        .unsigned()
        .references('id')
        .inTable('customers')
        .onDelete('CASCADE')
      table.timestamps(true)
      table.string('name').notNullable()
      table.float('lat')
      table.float('lng')
      table.string('address')
      table.string('postcode')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
