"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tasks = require("../controllers/tasks");
var router = (0, _express.Router)();

// Rutas para la API

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  descripcion: Tasks endpoint
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *   summary: obtiene todas las tareas
 *   tags: [Tasks]
 */
router.get('/tasks', _tasks.getTasks);

/**
 * @swagger
 * /tasks/count:
 *  get:
 *   summary: cuenta las tareas
 *   tags: [Tasks]
 */
router.get('/tasks/count', _tasks.getTaskCount);

/**
 * @swagger
 * /tasks:
 *  get:
 *   summary: obtiene la tarea por id
 *   tags: [Tasks]
 */
router.get('/tasks/:id', _tasks.getTask);

/**
 * @swagger
 * /tasks:
 *  post:
 *   summary: crea una nueva tarea
 *   tags: [Tasks]
 */
router.post('/tasks', _tasks.createTask);

/**
 * @swagger
 * /tasks:
 *  delete:
 *   summary: elimina una tarea
 *   tags: [Tasks]
 */
router["delete"]('/tasks/:id', _tasks.deleteTask);

/**
 * @swagger
 * /tasks:
 *  put:
 *   summary: actualiza una tarea por id 
 *   tags: [Tasks]
 */
router.put('/tasks/:id', _tasks.updateTask);
var _default = exports["default"] = router;