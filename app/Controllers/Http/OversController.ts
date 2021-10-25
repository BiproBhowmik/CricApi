import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Ball from 'App/Models/Ball'

import Over from 'App/Models/Over'

export default class OversController {
  public async store({ request }: HttpContextContract) {
    /**
     * Schema definition
     */
    const newUserSchema = schema.create({
      over_number: schema.number(),
    })

    const payload = await request.validate({
      schema: newUserSchema,
      messages: {
        'over_number.required': 'over_number is Required',
      },
    })

    let obj = {
      over_number: payload.over_number,
    }
    return Over.create(obj)
  }
  public async overDetails({ request }: HttpContextContract) {
    const id = request.input('id')

    const overDetails = { 'overDetails':await Over.query().where('id', id).first() }

    // const overBallDetails = { 'overBallDetails' :await Database.from('balls')
    // .select().where('over_id', '=', id) }

    const overBallDetails = {'overBallDetails': await Ball.query()
      .preload('batsman')
      .preload('bowler')
      .preload('helper')
      .preload('outerPlayer')
      .where('over_id', id)}

    return {...overDetails, ...overBallDetails}
  }
}
