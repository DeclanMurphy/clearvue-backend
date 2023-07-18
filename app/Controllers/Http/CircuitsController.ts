import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BadRequestException from 'App/Exceptions/BadRequestException'
import NotFoundException from 'App/Exceptions/NotFoundException'
import Circuit from 'App/Models/Circuit'
import _ from 'lodash'
export default class CircuitsController {
  public async index() {
    const circuit = await Circuit.all()
    return circuit
  }

  // TODO Convert to expected path
  public async show({ params }: HttpContextContract) {
    try {
      const { id } = params
      if (isNaN(id)) {
        throw new BadRequestException('Invalid ID', 400, 'INVALID_ID')
      }
      const circuit = await Circuit.find(id)
      if (!circuit) {
        throw new NotFoundException('Circuit not found', 404, 'CIRCUIT_NOT_FOUND')
      }
      const data: Array<[Date, number]> = []
      const start = Date.now() - 1e6
      for (let i = 0; i < 1e6; i++) {
        data.push([new Date(start - i), _.random(0, 1000)])
      }

      const x: Date[] = []
      const y: Number[] = []
      for (const [date, value] of data) {
        x.push(date)
        y.push(value)
      }

      return {
        circuit,
        payload: { data: { x, y } },
      }
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}
