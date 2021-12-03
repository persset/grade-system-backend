import { Request, Response } from "express";
import { ListAllStudentsService } from "../../services/Student/ListAllStudentsService";

class ListAllStudentsController {
  async handle(request: Request, response: Response) {
    const listAllStudentsService = new ListAllStudentsService();

    const students = listAllStudentsService.execute();

    return response.json(students);
  }
}

export { ListAllStudentsController };
