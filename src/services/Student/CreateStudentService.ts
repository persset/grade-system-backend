import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface IStudentRequest {
  name: string;
}

class CreateStudentService {
  async execute({ name }: IStudentRequest) {
    const student = await prisma.student
      .create({
        data: {
          name: name,
        },
      })
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });

    return student;
  }
}

export { CreateStudentService };
