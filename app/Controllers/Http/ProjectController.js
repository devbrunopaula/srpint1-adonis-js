"use strict";

const Project = use("App/Models/Project");
const Actions = use("App/Models/Action");
const Database = use("Database");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with projects
 */
class ProjectController {
  /**
   * Show a list of all projects.
   * GET projects
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const getProjects = await Project.all();
    response.status(200).json(getProjects);
  }

  /**
   * Render a form to be used for creating a new project.
   * GET projects/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new project.
   * POST projects
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.post();

    const newProject = await Project.create(data);
    response.status(201).json(newProject);
  }

  /**
   * Display a single project.
   * GET projects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ request, response, params, view }) {
    const project = request.project;
    response.status(200).json(project);
  }

  /**
   * Render a form to update an existing project.
   * GET projects/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update project details.
   * PUT or PATCH projects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const project = request.project;
    const { name, description, completed } = request.post();

    project.name = name;
    project.description = description;
    project.completed = completed;

    const updatedItems = await project.save();
    response.status(200).json({
      message: "Successfully updated this project",
      data: project,
    });
  }

  /**
   * Delete a project with id.
   * DELETE projects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async showActions({ params, request, response }) {
    const { id } = params;

    const result = await Database.select("*")
      .from("actions")
      .where("project_id", "=", id);

    response.status(200).json(result);
  }
  /**
   * Delete a project with id.
   * DELETE projects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const project = request.project;

    await project.delete();
    response.status(200).json({
      message: "Successfully deleted this project",
      id: project.id,
    });
  }
}

module.exports = ProjectController;
