import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Customers extends BaseSchema {
  protected tableName = 'customers'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.string('name').notNullable()
      table.string('email').notNullable()
      table.string('vat_number') // Allow null in case user is onboarding or pending VAT number
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
