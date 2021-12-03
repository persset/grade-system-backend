import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
interface ITeacherRequest {
  name: string;
}

class CreateTeacherService {
  async execute({ name }: ITeacherRequest) {}
}

export { CreateTeacherService };
