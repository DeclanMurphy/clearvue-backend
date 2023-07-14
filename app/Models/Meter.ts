import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Customer from './Customer'
import Site from './Site'

export default class Meter extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public customerId: number
  @belongsTo(() => Customer, {
    foreignKey: 'customerId',
  })
  public customer: BelongsTo<typeof Customer>

  @column()
  public siteId: number
  @belongsTo(() => Site, {
    foreignKey: 'siteId',
  })
  public site: BelongsTo<typeof Site>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public name: String

  @column()
  public serialNumber: String // Assume these might contain aplhanumeric characters

  @column.dateTime()
  public installationDate: DateTime
}
