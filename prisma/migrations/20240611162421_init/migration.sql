/*
  Warnings:

  - You are about to drop the column `fechaNacimiento` on the `Mascotas` table. All the data in the column will be lost.
  - You are about to drop the column `id_dueño_mascota` on the `Mascotas` table. All the data in the column will be lost.
  - Added the required column `fecha_nacimiento` to the `Mascotas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_duenyo_mascota` to the `Mascotas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Mascotas` DROP FOREIGN KEY `Mascotas_id_dueño_mascota_fkey`;

-- AlterTable
ALTER TABLE `Mascotas` DROP COLUMN `fechaNacimiento`,
    DROP COLUMN `id_dueño_mascota`,
    ADD COLUMN `fecha_nacimiento` DATE NOT NULL,
    ADD COLUMN `id_duenyo_mascota` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Mascotas` ADD CONSTRAINT `Mascotas_id_duenyo_mascota_fkey` FOREIGN KEY (`id_duenyo_mascota`) REFERENCES `DuenosMascotas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
