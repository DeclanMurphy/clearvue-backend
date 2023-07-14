import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Customer from './Customer'

export default class Site extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public customerId: number

  @belongsTo(() => Customer, {
    foreignKey: 'customer_id',
  })
  public customer: BelongsTo<typeof Customer>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public name: String

  @column()
  public lat: Number

  @column()
  public lng: Number

  @column()
  public address: String

  @column()
  public postcode: String
}
