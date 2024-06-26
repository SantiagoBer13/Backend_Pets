-- CreateTable
CREATE TABLE `Vacunas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `numero_lote` VARCHAR(100) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VacunaMascota` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha_vacunacion` DATETIME(3) NOT NULL,
    `fecha_proxima_vacunacion` DATETIME(3) NOT NULL,
    `dosis` VARCHAR(20) NOT NULL,
    `motivo` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `id_mascota` INTEGER NOT NULL,
    `id_vacuna` INTEGER NOT NULL,
    `id_veterinario` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Medicamentos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `forma` VARCHAR(100) NOT NULL,
    `numero_lote` VARCHAR(100) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Desparacitaciones` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha_desparacitacion` DATETIME(3) NOT NULL,
    `fecha_proxima_desparacitacion` DATETIME(3) NOT NULL,
    `observaciones` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `id_mascota` INTEGER NOT NULL,
    `id_medicamento` INTEGER NOT NULL,
    `id_veterinario` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Alergias` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_alergia` VARCHAR(100) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `id_mascota` INTEGER NOT NULL,
    `id_veterinario` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `VacunaMascota` ADD CONSTRAINT `VacunaMascota_id_mascota_fkey` FOREIGN KEY (`id_mascota`) REFERENCES `Mascotas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VacunaMascota` ADD CONSTRAINT `VacunaMascota_id_vacuna_fkey` FOREIGN KEY (`id_vacuna`) REFERENCES `Vacunas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VacunaMascota` ADD CONSTRAINT `VacunaMascota_id_veterinario_fkey` FOREIGN KEY (`id_veterinario`) REFERENCES `Veterinarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Desparacitaciones` ADD CONSTRAINT `Desparacitaciones_id_mascota_fkey` FOREIGN KEY (`id_mascota`) REFERENCES `Mascotas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Desparacitaciones` ADD CONSTRAINT `Desparacitaciones_id_medicamento_fkey` FOREIGN KEY (`id_medicamento`) REFERENCES `Medicamentos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Desparacitaciones` ADD CONSTRAINT `Desparacitaciones_id_veterinario_fkey` FOREIGN KEY (`id_veterinario`) REFERENCES `Veterinarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Alergias` ADD CONSTRAINT `Alergias_id_mascota_fkey` FOREIGN KEY (`id_mascota`) REFERENCES `Mascotas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Alergias` ADD CONSTRAINT `Alergias_id_veterinario_fkey` FOREIGN KEY (`id_veterinario`) REFERENCES `Veterinarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
