import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Circuit from './Circuit'
import Meter from './Meter'
import Site from './Site'

export default class Customer extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @hasMany(() => Site, {
    foreignKey: 'customer_id',
  })
  public sites: HasMany<typeof Site>

  @hasMany(() => Meter, {
    foreignKey: 'customer_id',
  })
  public meters: HasMany<typeof Meter>

  @hasMany(() => Circuit, {
    foreignKey: 'customer_id',
  })
  public circuits: HasMany<typeof Circuit>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public name: String

  @column()
  public email: String

  // Can contain alphanumerical eg BE09999999XX
  @column()
  public vatNumber: String
}
