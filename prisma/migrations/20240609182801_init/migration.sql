-- CreateTable
CREATE TABLE `Mascotas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `sexo` VARCHAR(2) NOT NULL,
    `microship` VARCHAR(50) NOT NULL,
    `raza` VARCHAR(50) NOT NULL,
    `especie` VARCHAR(50) NOT NULL,
    `peso` DOUBLE NULL,
    `color` VARCHAR(50) NOT NULL,
    `fecha_nacimiento` DATETIME(3) NOT NULL,
    `estado` VARCHAR(50) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `id_dueño_mascota` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Mascotas` ADD CONSTRAINT `Mascotas_id_dueño_mascota_fkey` FOREIGN KEY (`id_dueño_mascota`) REFERENCES `DuenosMascotas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
