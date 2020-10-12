"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ActionsSchema extends Schema {
  up() {
    this.create("actions", (table) => {
      table.increments();
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.string("description", 128).notNullable();
      table.text("notes").notNullable();
      table.boolean("completed").default(false);
      table.timestamps();
    });
  }

  down() {
    this.drop("actions");
  }
}

module.exports = ActionsSchema;
