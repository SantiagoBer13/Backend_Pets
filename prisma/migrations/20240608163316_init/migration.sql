/*
  Warnings:

  - A unique constraint covering the columns `[nombre_usuario]` on the table `DuenosMascotas` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nombre_usuario]` on the table `Veterinarios` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `DuenosMascotas_nombre_usuario_key` ON `DuenosMascotas`(`nombre_usuario`);

-- CreateIndex
CREATE UNIQUE INDEX `Veterinarios_nombre_usuario_key` ON `Veterinarios`(`nombre_usuario`);
