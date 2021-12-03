import { Router } from "express";
import { CreateStudentController } from "../controllers/Student/CreateStudentController";
import { ListAllStudentsController } from "../controllers/Student/ListAllStudentsController";

const createStudentController = new CreateStudentController();
const listAllStudentsController = new ListAllStudentsController();

const router = Router();

router.post("/student", createStudentController.handle);
router.get("/student", listAllStudentsController.handle);

export { router as studentRouter };
