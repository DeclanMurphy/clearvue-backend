import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Meter from 'App/Models/Meter'
import { faker } from '@faker-js/faker'
import { DateTime } from 'luxon'

export default class MeterSeeder extends BaseSeeder {
  public async run() {
    await Meter.createMany([
      {
        name: faker.string.uuid(),
        customerId: 1,
        siteId: 1,
        serialNumber: faker.string.uuid(),
        // installationDate: DateTime.now(),
      },
      {
        name: faker.string.uuid(),
        customerId: 1,
        siteId: 1,
        serialNumber: faker.string.uuid(),
        // installationDate: DateTime.now(),
      },
      {
        name: faker.string.uuid(),
        customerId: 1,
        siteId: 1,
        serialNumber: faker.string.uuid(),
        // installationDate: DateTime.now(),
      },
      {
        name: faker.string.uuid(),
        customerId: 1,
        siteId: 1,
        serialNumber: faker.string.uuid(),
        // installationDate: DateTime.now(),
      },
      {
        name: faker.string.uuid(),
        customerId: 1,
        siteId: 1,
        serialNumber: faker.string.uuid(),
        // installationDate: DateTime.now(),
      },
      {
        name: faker.string.uuid(),
        customerId: 1,
        siteId: 1,
        serialNumber: faker.string.uuid(),
        // installationDate: DateTime.now(),
      },
      {
        name: faker.string.uuid(),
        customerId: 1,
        siteId: 1,
        serialNumber: faker.string.uuid(),
        // installationDate: DateTime.now(),
      },
      {
        name: faker.string.uuid(),
        customerId: 1,
        siteId: 1,
        serialNumber: faker.string.uuid(),
        // installationDate: DateTime.now(),
      },
      {
        name: faker.string.uuid(),
        customerId: 1,
        siteId: 1,
        serialNumber: faker.string.uuid(),
        // installationDate: DateTime.now(),
      },
      {
        name: faker.string.uuid(),
        customerId: 1,
        siteId: 1,
        serialNumber: faker.string.uuid(),
        // installationDate: DateTime.now(),
      },
      {
        name: faker.string.uuid(),
        customerId: 1,
        siteId: 1,
        serialNumber: faker.string.uuid(),
        // installationDate: DateTime.now(),
      },
    ])
  }
}
