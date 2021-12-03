import { Request, Response } from "express";
import { ListAllTeachersService } from "../../services/Teacher/ListAllTeachersService";

class ListAllTeachersController {
  async handle(request: Request, response: Response) {
    const listAllTeachersService = new ListAllTeachersService();

    const teacher = await listAllTeachersService.execute();

    return response.json(teacher);
  }
}

export { ListAllTeachersController };
