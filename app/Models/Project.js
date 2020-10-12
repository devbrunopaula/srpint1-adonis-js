"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const Database = use("Database");

class Project extends Model {
  action() {
    return this.belongsTo("App/Models/Action");
  }
}

module.exports = Project;
