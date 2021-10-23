import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema,rules } from '@ioc:Adonis/Core/Validator'
import Application from '@ioc:Adonis/Core/Application'

import User from 'App/Models/User'
import Database from '@ioc:Adonis/Lucid/Database'

export default class UsersController {
  public async store({ request }: HttpContextContract) {
    // return request

    /**
     * Schema definition
     */
    const newUserSchema = schema.create({
      sure_name: schema.string({ escape: true,
        trim: true }),
      middle_name: schema.string({ escape: true,
        trim: true }),
      last_name: schema.string({ escape: true,
        trim: true }),
      player_type: schema.string({ escape: true,
        trim: true }),
      idcard: schema.string({ escape: true,
        trim: true }),
      play_role: schema.string({ escape: true,
        trim: true }),
      batting_style: schema.string({ escape: true,
        trim: true }),
      bowling_style: schema.string({ escape: true,
        trim: true }),
      address: schema.string({ escape: true,
        trim: true }),
      dob: schema.string({ escape: true,
        trim: true }),
      hight: schema.string({ escape: true,
        trim: true }),
      weight: schema.number(),
      gender: schema.string({ escape: true,
        trim: true }),
      hair_style: schema.string({ escape: true,
        trim: true }),
      password: schema.string({ escape: true,
        trim: true }),
      email: schema.string({}, [
        rules.email({
          sanitize: true,
          ignoreMaxLength: false,
          //domainSpecificValidation: true,
        }),
        rules.unique({ table: 'users', column: 'email' }),
      ]),
      phone: schema.string({ escape: true,
        trim: true }),
      country: schema.string({ escape: true,
        trim: true }),
      city: schema.string({ escape: true,
        trim: true }),
    })

    const payload = await request.validate({
      schema: newUserSchema,
      messages: {
        'email.required': 'Email is Required',
        'email.unique': 'Email has to be unique',
        'password.required': 'password is Required',
        'sure_name.required': 'sure_name is Required',
        'middle_name.required': 'middle_name is Required',
        'last_name.required': 'last_name is Required',
        'player_type.required': 'player_type is Required',
        'idcard.required': 'idcard is Required',
        'play_role.required': 'play_role is Required',
        'batting_style.required': 'batting_style is Required',
        'bowling_style.required': 'bowling_style is Required',
        'address.required': 'address is Required',
        'dob.required': 'dob is Required',
        'hight.required': 'hight is Required',
        'weight.required': 'weight is Required',
        'gender.required': 'gender is Required',
        'hair_style.required': 'hair_style is Required',
        'phone.required': 'phone is Required',
        'country.required': 'country is Required',
        'city.required': 'city is Required',
      },
    })

    const profileImage = request.file('files')

    var imageName = ''

    if (!profileImage) {
      imageName = ''
    } else {
      // return profileImage
      imageName = Math.random().toString() + '.' + profileImage.extname
      await profileImage.move(Application.publicPath('uploads/userPictures'), {
        name: imageName,
      })
    }
    
    let obj = {
      email: payload.email,
      password: payload.password,
      sure_name: payload.sure_name,
      middle_name: payload.middle_name,
      last_name: payload.last_name,
      player_type: payload.player_type,
      idcard: payload.idcard,
      play_role: payload.play_role,
      batting_style: payload.batting_style,
      bowling_style: payload.bowling_style,
      address: payload.address,
      dob: payload.dob,
      hight: payload.hight,
      weight: payload.weight,
      gender: payload.gender,
      hair_style: payload.hair_style,
      phone: payload.phone,
      country: payload.country,
      city: payload.city,
      pic: 'userPictures/' + imageName,
    }
    return User.create(obj)
  }

  public async show({request}: HttpContextContract) {

    const id = request.input('id')

    var quearyArray = []

    const userDetails = await User.query().where('id', id).first()

    const batsmanDetails = await Database
    .from('balls')
    .select()
    .sum('run':'total_run')
    .avg('run':'avg_run_per_ball')
    .count('id':'total_ball_faced')
  .where('user_id', '=', id).first()
  
  const strikeRate = {'strikeRate':batsmanDetails.avg_run_per_ball * 100}
  const four = await Database.from('balls').select().count('run':'4s').where('run','=',4).andWhere('user_id', '=', id).first()
  const six = await Database.from('balls').select().count('run':'6s').where('run','=',6).andWhere('user_id', '=', id).first()
  
  const battingDetails = {...batsmanDetails, ...four, ...six, ...strikeRate}

    const bowlerDetails = await Database
    .from('balls')
    .select()
    .sum('run':'total_run')
    .sum('extra':'total_extra_run')
    .avg('run':'avg_run_per_ball')
    .avg('speed':'avg_speed')
    .count('id':'total_ball_do')
    .where('bowler_id', '=', id).first()
  
  const econmy_rate = {'econmy_rate':(bowlerDetails.total_run + bowlerDetails.total_extra_run)
                         / ((1/6)*bowlerDetails.total_ball_do)}
  const total_wicket = await Database.from('balls').select().count('out_type':'total_wicket')
                        .where('out_type','!=', 'Not-Out')
                        .where('out_type','!=', 'Stamping')
                        .andWhere('bowler_id', '=', id).first()

  const bowlingDetails = {...bowlerDetails, ...econmy_rate, ...total_wicket}

  quearyArray.push({'userDetails': userDetails})
  quearyArray.push({'battingDetails': battingDetails})
  quearyArray.push({'bowlingDetails': bowlingDetails})

  return quearyArray
  }

}