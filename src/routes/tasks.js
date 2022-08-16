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

router.get("/tasks", getTasks);
router.get("/tasks/count", getTaskCount);
router.get("/tasks/:id", getTask);
router.post("/tasks", createTasks);
router.delete("/tasks/:id", deleteTasks);
router.put("/taks/:id", updateTasks);

export default router;
