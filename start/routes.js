"use strict";

const { route } = require("@adonisjs/framework/src/Route/Manager");
const FindAction = require("../app/Middleware/FindAction");

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.on("/").render("welcome");
// projects
Route.resource("/projects", "ProjectController")
  .middleware(new Map([[["show", "update", "destroy"], ["findProject"]]]))
  .apiOnly();

Route.resource("/actions", "ActionController")
  .middleware(new Map([[["show", "update", "destroy"], ["findAction"]]]))
  .apiOnly();

Route.get("/projects/:id/actions", "ProjectController.showActions");
