import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Over from 'App/Models/Over'
import User from 'App/Models/User'

export default class Ball extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public overId: number
  
  @column()
  public userId: number
  @column()
  public bowlerId: number
  @column()
  public run: number
  @column()
  public extra: number
  @column()
  public speed: number
  @column()
  public run_type: string
  @column()
  public ball_type: string
  @column()
  public boundary: number
  @column()
  public out_type: string
  @column()
  public halperId: number
  @column()
  public out_player_id: number


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Over)
  public over: BelongsTo<typeof Over>

  @belongsTo(() => User)
  public batsman: BelongsTo<typeof User>

  @belongsTo(() => User, {
    foreignKey: 'halperId', // userId column on "Post" model
  })
  public helper: BelongsTo<typeof User>

  @belongsTo(() => User, {
    foreignKey: 'out_player_id', // userId column on "Post" model
  })
  public outerPlayer: BelongsTo<typeof User>

  @belongsTo(() => User, {
    foreignKey: 'bowlerId', // userId column on "Post" model
  })
  public bowler: BelongsTo<typeof User>


}
