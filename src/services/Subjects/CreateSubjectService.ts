import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface ISubjectRequest {
  name: string;
  teacherId: number;
}
class CreateSubjectService {
  async execute({ name, teacherId }: ISubjectRequest) {
    const subjectAlreadyExists = await prisma.subject
      .findUnique({
        where: {
          name: name,
        },
      })
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        prisma.$disconnect();
      });

    if (subjectAlreadyExists) {
      throw new Error("Matéria já cadastrada!");
    }

    const subject = await prisma.subject
      .create({
        data: {
          name: name,
          teacherId: teacherId,
        },
      })
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });

    return subject;
  }
}

export { CreateSubjectService };
