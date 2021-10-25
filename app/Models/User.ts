import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column, hasMany, HasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Over from 'App/Models/Over'
import Hash from '@ioc:Adonis/Core/Hash'
import Ball from './Ball'

export default class User extends BaseModel {
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column()
  public sure_name: string
  @column()
  public middle_name: string
  @column()
  public last_name: string
  @column()
  public player_type: string
  @column()
  public idcard: string
  @column()
  public play_role: string
  @column()
  public batting_style: string
  @column()
  public bowling_style: string
  @column()
  public address: string
  @column()
  public dob: string
  @column()
  public hight: string
  @column()
  public weight: number
  @column()
  public gender: string
  @column()
  public hair_style: string
  @column({ serializeAs: null })
  public password: string
  @column()
  public email: string
  @column()
  public phone: string
  @column()
  public country: string
  @column()
  public city: string
  @column()
  public pic: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @hasMany(() => Over)
  public over: HasMany<typeof Over>

  
  @hasOne(() => Ball, {
    foreignKey: 'userId', // userId column on "Post" model
  })
  public batsman: HasOne<typeof Ball>

  @hasOne(() => Ball, {
    foreignKey: 'bowlerId', // userId column on "Post" model
  })
  public bowler: HasOne<typeof Ball>



}
