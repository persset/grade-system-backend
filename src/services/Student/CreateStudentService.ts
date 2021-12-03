import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface IStudentRequest {
  name: string;
}

class CreateStudentService {
  async execute({ name }: IStudentRequest) {
    const student = prisma.student
      .create({
        data: {
          name: name,
        },
      })
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        prisma.$disconnect;
      });

    return student;
  }
}

export { CreateStudentService };
