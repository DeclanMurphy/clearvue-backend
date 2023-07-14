import { BaseModel, belongsTo, BelongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Customer from './Customer'
import Site from './Site'
import Meter from './Meter'

export default class Circuit extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public customerId: number
  @belongsTo(() => Customer, {
    foreignKey: 'customer_id',
  })
  public customer: BelongsTo<typeof Customer>

  @column()
  public siteId: number
  @belongsTo(() => Site, {
    foreignKey: 'site_id',
  })
  public site: BelongsTo<typeof Site>

  @column()
  public meterId: number
  @belongsTo(() => Meter, {
    foreignKey: 'meter_id',
  })
  public meter: BelongsTo<typeof Meter>

  // TODO fix
  // @belongsTo(() => Circuit, {
  //   foreignKey: 'circuit_id',
  // })
  @column()
  public circuitId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public name: String

  @column.dateTime()
  public installationDate: DateTime

  @column()
  public isMain: Boolean
}
