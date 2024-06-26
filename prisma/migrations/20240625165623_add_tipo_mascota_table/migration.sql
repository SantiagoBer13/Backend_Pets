/*
  Warnings:

  - Added the required column `id_tipo_mascota` to the `Mascotas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Mascotas` ADD COLUMN `id_tipo_mascota` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `VacunaMascota` MODIFY `fecha_proxima_vacunacion` DATE NOT NULL;

-- CreateTable
CREATE TABLE `TipoMascota` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Mascotas` ADD CONSTRAINT `Mascotas_id_tipo_mascota_fkey` FOREIGN KEY (`id_tipo_mascota`) REFERENCES `TipoMascota`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
