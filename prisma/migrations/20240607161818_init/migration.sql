-- CreateTable
CREATE TABLE `Veterinarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `direccion` VARCHAR(100) NOT NULL,
    `telefono` VARCHAR(20) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `cc` VARCHAR(191) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `password_hash` VARCHAR(191) NOT NULL,
    `especialidad` VARCHAR(100) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Veterinarios_email_key`(`email`),
    UNIQUE INDEX `Veterinarios_cc_key`(`cc`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DuenosMascotas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `direccion` VARCHAR(100) NOT NULL,
    `telefono` VARCHAR(20) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `cc` VARCHAR(50) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `password_hash` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `DuenosMascotas_cc_key`(`cc`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
