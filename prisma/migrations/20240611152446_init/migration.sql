/*
  Warnings:

  - You are about to drop the column `fecha_nacimiento` on the `Mascotas` table. All the data in the column will be lost.
  - Added the required column `fechaNacimiento` to the `Mascotas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Mascotas` DROP COLUMN `fecha_nacimiento`,
    ADD COLUMN `fechaNacimiento` DATE NOT NULL;
