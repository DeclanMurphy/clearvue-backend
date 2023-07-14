import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Customer from 'App/Models/Customer'
import { faker } from '@faker-js/faker'

export default class CustomerSeeder extends BaseSeeder {
  public async run() {
    await Customer.createMany([
      {
        name: faker.company.name(),
        email: faker.internet.email(),
        vatNumber: `${faker.location.countryCode('alpha-2')}${faker.number.int({
          min: 10000000,
          max: 99999999,
        })}`,
      },
      {
        name: faker.company.name(),
        email: faker.internet.email(),
        vatNumber: `${faker.location.countryCode('alpha-2')}${faker.number.int({
          min: 10000000,
          max: 99999999,
        })}`,
      },
      {
        name: faker.company.name(),
        email: faker.internet.email(),
        vatNumber: `${faker.location.countryCode('alpha-2')}${faker.number.int({
          min: 10000000,
          max: 99999999,
        })}`,
      },
      {
        name: faker.company.name(),
        email: faker.internet.email(),
        vatNumber: `${faker.location.countryCode('alpha-2')}${faker.number.int({
          min: 10000000,
          max: 99999999,
        })}`,
      },
      {
        name: faker.company.name(),
        email: faker.internet.email(),
        vatNumber: `${faker.location.countryCode('alpha-2')}${faker.number.int({
          min: 10000000,
          max: 99999999,
        })}`,
      },
      {
        name: faker.company.name(),
        email: faker.internet.email(),
        vatNumber: `${faker.location.countryCode('alpha-2')}${faker.number.int({
          min: 10000000,
          max: 99999999,
        })}`,
      },
      {
        name: faker.company.name(),
        email: faker.internet.email(),
        vatNumber: `${faker.location.countryCode('alpha-2')}${faker.number.int({
          min: 10000000,
          max: 99999999,
        })}`,
      },
      {
        name: faker.company.name(),
        email: faker.internet.email(),
        vatNumber: `${faker.location.countryCode('alpha-2')}${faker.number.int({
          min: 10000000,
          max: 99999999,
        })}`,
      },
      {
        name: faker.company.name(),
        email: faker.internet.email(),
        vatNumber: `${faker.location.countryCode('alpha-2')}${faker.number.int({
          min: 10000000,
          max: 99999999,
        })}`,
      },
      {
        name: faker.company.name(),
        email: faker.internet.email(),
        vatNumber: `${faker.location.countryCode('alpha-2')}${faker.number.int({
          min: 10000000,
          max: 99999999,
        })}`,
      },
    ])
  }
}
