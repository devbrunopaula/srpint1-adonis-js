"use strict";
const Action = use("App/Models/Action");
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class FindAction {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request, response, params }, next) {
    const { id } = params;
    const action = await Action.find(id);

    if (!action)
      return response.status(404).send({ error: "Action Not Found" });

    request.action = action;
    await next();
  }
}

module.exports = FindAction;
