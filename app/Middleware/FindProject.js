"use strict";
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Project = use("App/Models/Project");

class FindProject {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request, response, params }, next) {
    const { id } = params;
    const project = await Project.find(id);

    if (!project)
      return response.status(404).send({ error: "Project Not Found" });

    request.project = project;
    await next();
  }
}

module.exports = FindProject;
