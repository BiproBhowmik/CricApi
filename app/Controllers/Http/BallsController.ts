import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Database from '@ioc:Adonis/Lucid/Database'
import Ball from 'App/Models/Ball'

export default class BallsController {
  public async store({ request }: HttpContextContract) {
    /**
     * Schema definition
     */
    const newUserSchema = schema.create({
      over_id: schema.number(),
      batsman_id: schema.number(),
      bowler_id: schema.number(),
      run: schema.number(),
      speed: schema.number(),
        ball_type: schema.string({ escape: true,
        trim: true }),

    })

    const payload = await request.validate({
      schema: newUserSchema,
      messages: {
        'batsman_id.required': 'batsman_id is Required',
        'bowler_id.required': 'bowler_id is Required',
        'over_id.required': 'over_id is Required',
        'run.required': 'run is Required',
        'speed.required': 'speed is Required',
        'ball_type.required': 'ball_type is Required',
      }
    })

    let obj = {
      overId: payload.over_id,
      userId: payload.batsman_id,
      bowler_id: payload.bowler_id,
      run: payload.run,
      extra: request.all().extra,
      speed: payload.speed,
      run_type: request.all().run_type,
      ball_type: payload.ball_type,
      boundary: request.all().boundary,
      out_type: request.all().out_type,
      halper_id: request.all().halper_id,
      out_player_id: request.all().out_player_id
    }
    return Ball.create(obj)
  }

  public async ballDetails({request}: HttpContextContract) {
    
    const id = request.all().id

    var quearyArray = []

    const ballDetails = await Database
    .from('balls')
    .select().where('balls.id', id)
    .first()

    quearyArray.push({'ballDetails':ballDetails})

    const batsman = {'batsman': await Database
    .from('users')
    .select().where('users.id', ballDetails.user_id)
    .first()}
    quearyArray.push(batsman)
    
    const bowler = {'bowler': await Database
    .from('users')
    .select().where('users.id', ballDetails.bowler_id)
    .first()}
    quearyArray.push(bowler)

    if (ballDetails.halper_id) {
      const halper = {'halper': await Database
      .from('users')
      .select().where('users.id', ballDetails.halper_id)
      .first()}
      quearyArray.push(halper)
    }
    if (ballDetails.out_player_id) {
      const out_player = {'out_player': await Database
      .from('users')
      .select().where('users.id', ballDetails.out_player_id)
      .first()}
      quearyArray.push(out_player)
    }

    return quearyArray
  }
}
