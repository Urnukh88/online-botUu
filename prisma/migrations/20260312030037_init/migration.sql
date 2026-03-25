/*
  Warnings:

  - Added the required column `selected` to the `QuizAttempt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "QuizAttempt" ADD COLUMN     "selected" TEXT NOT NULL;
