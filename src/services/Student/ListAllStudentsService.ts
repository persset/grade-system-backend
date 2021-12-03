import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ListAllStudentsService {
  async execute() {
    const students = prisma.student
      .findMany()
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        prisma.$disconnect;
      });

    return students;
  }
}

export { ListAllStudentsService };
