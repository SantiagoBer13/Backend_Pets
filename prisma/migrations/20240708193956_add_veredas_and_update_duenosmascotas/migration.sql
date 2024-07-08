/*
  Warnings:

  - Added the required column `id_vereda` to the `DuenosMascotas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `DuenosMascotas` ADD COLUMN `id_vereda` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Veredas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DuenosMascotas` ADD CONSTRAINT `DuenosMascotas_id_vereda_fkey` FOREIGN KEY (`id_vereda`) REFERENCES `Veredas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
