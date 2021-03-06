"use strict";

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

Factory.blueprint("App/Models/Project", (faker) => {
  return {
    name: faker.name(),
    description: faker.sentence({ words: 5 }),
    completed: false,
  };
});

Factory.blueprint("App/Models/Action", async (faker) => {
  return {
    project_id: 1,
    description: faker.sentence({ words: 5 }),
    notes: faker.sentence({ words: 7 }),
  };
});
