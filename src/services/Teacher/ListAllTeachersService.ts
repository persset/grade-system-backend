import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ListAllTeachersService {
  async execute() {
    const teacher = await prisma.teacher
      .findMany()
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });

    return teacher;
  }
}

export { ListAllTeachersService };
