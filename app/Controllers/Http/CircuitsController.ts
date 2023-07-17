// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Circuit from 'App/Models/Circuit'

export default class CircuitsController {
  public async index() {
    const circuit = await Circuit.all()
    return circuit
  }

  // TODO Convert to expected path
  public async show({ params }) {
    const circuit = await Circuit.find(params.id)
    const data: Array<[Date, number]> = []
    const start = Date.now() - 1000000
    for (let i = 0; i < 1000; i++) {
      data.push([new Date(start - i * 1000), _.random(0, 100)])
    }

    const x = data.map((e) => e[0])
    const y = data.map((e) => e[1])

    return {
      circuit,
      payload: { x, y },
    }
  }
}
