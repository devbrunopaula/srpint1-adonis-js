"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProjectsSchema extends Schema {
  up() {
    this.create("projects", (table) => {
      table.increments();
      table.string("name").notNullable();
      table.string("description").notNullable();
      table.boolean("completed").default(false);
      table.timestamps();
    });
  }

  down() {
    this.drop("projects");
  }
}

module.exports = ProjectsSchema;
