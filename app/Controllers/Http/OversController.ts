import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

import Over from 'App/Models/Over'

export default class OversController {

  public async store({ request }: HttpContextContract) {
    /**
     * Schema definition
     */
    const newUserSchema = schema.create({
      bowler_id: schema.number()
    })

    const payload = await request.validate({
      schema: newUserSchema,
      messages: {
        'bowler_id.required': 'bowler_id is Required',
      }
    })

    let obj = {
      userId: payload.bowler_id,
    }
    return Over.create(obj)
  }

  public async bowlerGivenRuns({request}: HttpContextContract) {

    const query = await Over.query().preload('ball').where('user_id', request.all().id)

    // return query

    let totoalRun = 0, totalBall = 0;

    for await (const iterator of query) {

      iterator.ball.forEach(element => {
        totoalRun += element.run
        totoalRun += element.extra
        totalBall++
      });
    }

    return {
      "total_run": totoalRun,
      "total_ball_throw": totalBall
    }
  }
}
