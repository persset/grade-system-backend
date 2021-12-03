import { Router } from "express";
import { CreateTeacherController } from "../controllers/Teacher/CreateTeacherController";
import { ListAllTeachersController } from "../controllers/Teacher/ListAllTeachersController";

const createTeacherController = new CreateTeacherController();
const listAllTeachersController = new ListAllTeachersController();

const router = Router();

router.post("/teacher", createTeacherController.handle);
router.get("/teacher", listAllTeachersController.handle);

export { router as teacherRouter };
