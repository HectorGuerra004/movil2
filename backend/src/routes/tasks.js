import { Router } from 'express';
import { getTasks, getTask, getTaskCount, createTask, deleteTask, updateTask } from '../controllers/tasks'

const router = Router();

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
router.get('/tasks', getTasks);

/**
 * @swagger
 * /tasks/count:
 *  get:
 *   summary: cuenta las tareas
 *   tags: [Tasks]
 */
router.get('/tasks/count', getTaskCount);

/**
 * @swagger
 * /tasks:
 *  get:
 *   summary: obtiene la tarea por id
 *   tags: [Tasks]
 */
router.get('/tasks/:id', getTask);

/**
 * @swagger
 * /tasks:
 *  post:
 *   summary: crea una nueva tarea
 *   tags: [Tasks]
 */
router.post('/tasks', createTask);

/**
 * @swagger
 * /tasks:
 *  delete:
 *   summary: elimina una tarea
 *   tags: [Tasks]
 */
router.delete('/tasks/:id', deleteTask);

/**
 * @swagger
 * /tasks:
 *  put:
 *   summary: actualiza una tarea por id 
 *   tags: [Tasks]
 */
router.put('/tasks/:id', updateTask);

export default router;