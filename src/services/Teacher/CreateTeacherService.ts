import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
interface ITeacherRequest {
  name: string;
}

class CreateTeacherService {
  async execute({ name }: ITeacherRequest) {
    const teacher = await prisma.teacher
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

    return teacher;
  }
}

export { CreateTeacherService };
