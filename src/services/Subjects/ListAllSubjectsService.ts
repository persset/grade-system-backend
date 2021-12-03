import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ListAllSubjectsService {
  async execute() {
    const subjects = prisma.subject
      .findMany()
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });

    return subjects;
  }
}

export { ListAllSubjectsService };
