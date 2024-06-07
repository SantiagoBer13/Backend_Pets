/*
  Warnings:

  - Added the required column `nombre_usuario` to the `DuenosMascotas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombre_usuario` to the `Veterinarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `DuenosMascotas` ADD COLUMN `nombre_usuario` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `Veterinarios` ADD COLUMN `nombre_usuario` VARCHAR(100) NOT NULL;
