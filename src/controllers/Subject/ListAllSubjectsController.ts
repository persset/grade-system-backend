import { Request, response, Response } from "express";
import { ListAllSubjectsService } from "../../services/Subjects/ListAllSubjectsService";

class ListAllSubjectsController {
  async handle() {
    const listAllSubjectsService = new ListAllSubjectsService();

    const subjects = listAllSubjectsService.execute();

    return response.json(subjects);
  }
}

export { ListAllSubjectsController };
