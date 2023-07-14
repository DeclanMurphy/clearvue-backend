import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Circuit from 'App/Models/Circuit'
import { faker } from '@faker-js/faker'

export default class CircuitSeeder extends BaseSeeder {
  public async run() {
    await Circuit.createMany([
      {
        name: faker.string.uuid(),
        customerId: 2,
        siteId: 2,
        meterId: 2,
        circuitId: 4,
        // installationDate: DateTime.now(),
        isMain: faker.datatype.boolean(),
      },
      {
        name: faker.string.uuid(),
        customerId: 2,
        siteId: 2,
        meterId: 2,
        // installationDate: DateTime.now(),
        isMain: faker.datatype.boolean(),
      },
      {
        name: faker.string.uuid(),
        customerId: 2,
        siteId: 2,
        meterId: 2,
        // installationDate: DateTime.now(),
        isMain: faker.datatype.boolean(),
      },
      {
        name: faker.string.uuid(),
        customerId: 2,
        siteId: 2,
        meterId: 2,
        // installationDate: DateTime.now(),
        isMain: faker.datatype.boolean(),
      },
      {
        name: faker.string.uuid(),
        customerId: 2,
        siteId: 2,
        meterId: 2,
        // installationDate: DateTime.now(),
        isMain: faker.datatype.boolean(),
      },
      {
        name: faker.string.uuid(),
        customerId: 2,
        siteId: 2,
        meterId: 2,
        // installationDate: DateTime.now(),
        isMain: faker.datatype.boolean(),
      },
      {
        name: faker.string.uuid(),
        customerId: 2,
        siteId: 2,
        meterId: 2,
        // installationDate: DateTime.now(),
        isMain: faker.datatype.boolean(),
      },
      {
        name: faker.string.uuid(),
        customerId: 2,
        siteId: 2,
        meterId: 2,
        // installationDate: DateTime.now(),
        isMain: faker.datatype.boolean(),
      },
      {
        name: faker.string.uuid(),
        customerId: 2,
        siteId: 2,
        meterId: 2,
        // installationDate: DateTime.now(),
        isMain: faker.datatype.boolean(),
      },
    ])
  }
}
