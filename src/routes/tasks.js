import { Router } from "express";
import {
  createTasks,
  deleteTasks,
  getTask,
  getTaskCount,
  getTasks,
  updateTasks,
} from "../controllers/tasks";

const router = Router();
/**
 * @swagger
 * /tasks:
 * get:
 */
router.get("/tasks", getTasks);

/**
 * @swagger
 * /tasks/count:
 */

router.get("/tasks/count", getTaskCount);

/**
 * @swagger
 * /tasks/count:
 * get:
 */
router.get("/tasks/:id", getTask);

/**
 * @swagger
 * /tasks/count:
 * post:
 */
router.post("/tasks", createTasks);

/**
 * @swagger
 * /tasks/count:
 * delete:
 */
router.delete("/tasks/:id", deleteTasks);

/**
 * @swagger
 * /tasks/count:
 * update:
 */

router.put("/tasks/:id", updateTasks);

export default router;
