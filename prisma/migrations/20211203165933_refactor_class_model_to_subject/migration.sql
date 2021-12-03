/*
  Warnings:

  - You are about to drop the `class` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `gradesonclasses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `studentsonclasses` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `class` DROP FOREIGN KEY `Class_teacherId_fkey`;

-- DropForeignKey
ALTER TABLE `gradesonclasses` DROP FOREIGN KEY `GradesOnClasses_classId_fkey`;

-- DropForeignKey
ALTER TABLE `gradesonclasses` DROP FOREIGN KEY `GradesOnClasses_studentId_fkey`;

-- DropForeignKey
ALTER TABLE `studentsonclasses` DROP FOREIGN KEY `StudentsOnClasses_classId_fkey`;

-- DropForeignKey
ALTER TABLE `studentsonclasses` DROP FOREIGN KEY `StudentsOnClasses_studentId_fkey`;

-- DropTable
DROP TABLE `class`;

-- DropTable
DROP TABLE `gradesonclasses`;

-- DropTable
DROP TABLE `studentsonclasses`;

-- CreateTable
CREATE TABLE `Subject` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `teacherId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StudentsOnSubjects` (
    `studentId` INTEGER NOT NULL,
    `subjectId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`studentId`, `subjectId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GradesOnSubjects` (
    `studentId` INTEGER NOT NULL,
    `subjectId` INTEGER NOT NULL,
    `Evaluation1` DOUBLE NOT NULL,
    `Evaluation2` DOUBLE NOT NULL,
    `SubstituteEvaluation` DOUBLE NOT NULL DEFAULT 0,
    `FinalGrade` DOUBLE NOT NULL,

    PRIMARY KEY (`studentId`, `subjectId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Subject` ADD CONSTRAINT `Subject_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `Teacher`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StudentsOnSubjects` ADD CONSTRAINT `StudentsOnSubjects_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StudentsOnSubjects` ADD CONSTRAINT `StudentsOnSubjects_subjectId_fkey` FOREIGN KEY (`subjectId`) REFERENCES `Subject`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GradesOnSubjects` ADD CONSTRAINT `GradesOnSubjects_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GradesOnSubjects` ADD CONSTRAINT `GradesOnSubjects_subjectId_fkey` FOREIGN KEY (`subjectId`) REFERENCES `Subject`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
