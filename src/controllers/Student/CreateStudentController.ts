import { Request, Response } from "express";
import { CreateStudentService } from "../../services/Student/CreateStudentService";

class CreateStudentController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const createStudentService = new CreateStudentService();

    const student = await createStudentService.execute({ name });

    return response.json(student);
  }
}

export { CreateStudentController };
