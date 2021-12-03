import { Router } from "express";
import { CreateTeacherController } from "../controllers/Teacher/CreateTeacherController";

const createTeacherController = new CreateTeacherController();

const router = Router();

router.post("/teacher", createTeacherController.handle);

export { router as teacherRouter };
