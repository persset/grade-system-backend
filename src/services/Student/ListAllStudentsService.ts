import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ListAllStudentsService {
  async execute() {
    const students = await prisma.student
      .findMany()
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });

    return students;
  }
}

export { ListAllStudentsService };
