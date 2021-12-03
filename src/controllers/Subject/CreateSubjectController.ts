import { Request, Response } from "express";
import { CreateSubjectService } from "../../services/Subjects/CreateSubjectService";

class CreateSubjectController {
  async handle(request: Request, response: Response) {
    const { name, teacherId } = request.body;

    const createSubjectService = new CreateSubjectService();

    const subject = createSubjectService.execute({ name, teacherId });

    return response.json(subject);
  }
}

export { CreateSubjectController };
