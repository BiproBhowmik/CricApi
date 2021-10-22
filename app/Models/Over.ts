import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import Ball from 'App/Models/Ball'

export default class Over extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number
  
  // @column()
  // public inningsId: string


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @hasMany(() => Ball)
  public ball: HasMany<typeof Ball>
}
// 