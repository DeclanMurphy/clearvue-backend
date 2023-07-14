import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Site from 'App/Models/Site'
import { faker } from '@faker-js/faker'

export default class SiteSeeder extends BaseSeeder {
  public async run() {
    await Site.createMany([
      {
        name: faker.company.name(),
        customerId: faker.number.int({ min: 1, max: 10 }),
        lat: faker.location.latitude(),
        lng: faker.location.longitude(),
        address: `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.country()}`,
        postcode: faker.location.zipCode(),
      },
      {
        name: faker.company.name(),
        customerId: faker.number.int({ min: 1, max: 10 }),
        lat: faker.location.latitude(),
        lng: faker.location.longitude(),
        address: `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.country()}`,
        postcode: faker.location.zipCode(),
      },
      {
        name: faker.company.name(),
        customerId: faker.number.int({ min: 1, max: 10 }),
        lat: faker.location.latitude(),
        lng: faker.location.longitude(),
        address: `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.country()}`,
        postcode: faker.location.zipCode(),
      },
      {
        name: faker.company.name(),
        customerId: faker.number.int({ min: 1, max: 10 }),
        lat: faker.location.latitude(),
        lng: faker.location.longitude(),
        address: `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.country()}`,
        postcode: faker.location.zipCode(),
      },
      {
        name: faker.company.name(),
        customerId: faker.number.int({ min: 1, max: 10 }),
        lat: faker.location.latitude(),
        lng: faker.location.longitude(),
        address: `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.country()}`,
        postcode: faker.location.zipCode(),
      },
      {
        name: faker.company.name(),
        customerId: faker.number.int({ min: 1, max: 10 }),
        lat: faker.location.latitude(),
        lng: faker.location.longitude(),
        address: `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.country()}`,
        postcode: faker.location.zipCode(),
      },
      {
        name: faker.company.name(),
        customerId: faker.number.int({ min: 1, max: 10 }),
        lat: faker.location.latitude(),
        lng: faker.location.longitude(),
        address: `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.country()}`,
        postcode: faker.location.zipCode(),
      },
      {
        name: faker.company.name(),
        customerId: faker.number.int({ min: 1, max: 10 }),
        lat: faker.location.latitude(),
        lng: faker.location.longitude(),
        address: `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.country()}`,
        postcode: faker.location.zipCode(),
      },
      {
        name: faker.company.name(),
        customerId: faker.number.int({ min: 1, max: 10 }),
        lat: faker.location.latitude(),
        lng: faker.location.longitude(),
        address: `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.country()}`,
        postcode: faker.location.zipCode(),
      },
      {
        name: faker.company.name(),
        customerId: faker.number.int({ min: 1, max: 10 }),
        lat: faker.location.latitude(),
        lng: faker.location.longitude(),
        address: `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.country()}`,
        postcode: faker.location.zipCode(),
      },
      {
        name: faker.company.name(),
        customerId: faker.number.int({ min: 1, max: 10 }),
        lat: faker.location.latitude(),
        lng: faker.location.longitude(),
        address: `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.country()}`,
        postcode: faker.location.zipCode(),
      },
    ])
  }
}
