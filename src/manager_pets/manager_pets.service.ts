import { HttpStatus, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateManagerPetDto } from './dto/create-manager_pet.dto';
import { UpdateManagerPetDto } from './dto/update-manager_pet.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ManagerPetsService {

  constructor(private prisma: PrismaService) { }

  async create(body: CreateManagerPetDto) {
    try {
      // Verificar si la mascota existe
      const owner = await this.prisma.duenosMascotas.findUnique({
        where: { id: body.id_duenyo_mascota },
      });

      if (!owner) {
        throw new NotFoundException(`Dueño de mascota con ID ${body.id_duenyo_mascota} no encontrado`);
      }

      // Verificar si el tipo de mascota existe
      const typePet = await this.prisma.tipoMascota.findUnique({
        where: { id: body.id_tipo_mascota },
      });

      if (!typePet) {
        throw new NotFoundException(`Tipo de mascota con ID ${body.id_tipo_mascota} no encontrado`);
      }

      const pet = await this.prisma.mascotas.create({
        data: {
          nombre: body.nombre,
          sexo: body.sexo,
          microchip: body.microchip,
          raza: body.raza,
          especie: body.especie,
          peso: body.peso,
          color: body.color,
          fecha_nacimiento: body.fecha_nacimiento,
          estado: 'Activo',
          id_duenyo_mascota: body.id_duenyo_mascota,
          id_tipo_mascota: body.id_tipo_mascota,
        },
      });

      // Devolver el mensaje de éxito y el ID de la mascota creada
      return { mensaje: 'Mascota creada', id_mascota: pet.id };
    } catch (error) {
      // Manejo de errores
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        console.error('Error al crear la mascota:', error.message);
        throw new Error('Error al crear la mascota');
      }
    }
  }

  async findAll() {
    try {
      const mascotas = await this.prisma.mascotas.findMany({
        select: {
          id: true,
          nombre: true,
          sexo: true,
          microchip: true,
          raza: true,
          especie: true,
          peso: true,
          color: true,
          fecha_nacimiento: true,
          estado: true,
          created_at: true,
          updated_at: true,
          tipo_mascota: {
            select: {
              tipo: true,
            },
          },
        },
      });

      if (!mascotas || mascotas.length === 0) {
        return [];
      }

      return mascotas;
    } catch (error) {
      // Manejo de errores
      console.error('Error al buscar mascotas:', error.message);
      throw new Error('Error al buscar mascotas');
    }
  }

  async findAllWithOwner() {
    try {
      const petsWithOwners = await this.prisma.mascotas.findMany({
        select: {
          id: true,
          nombre: true,
          sexo: true,
          microchip: true,
          raza: true,
          especie: true,
          peso: true,
          color: true,
          fecha_nacimiento: true,
          estado: true,
          dueno: {
            select: {
              nombre: true,
              direccion: true,
              telefono: true,
              email: true,
            },
          },
          tipo_mascota: {
            select: {
              tipo: true,
            },
          },
        },
      });

      if (!petsWithOwners || petsWithOwners.length === 0) {
        return {
          message: "No hay mascotas",
        };
      }
      return petsWithOwners;
    } catch (error) {
      console.error('Error al recuperar mascotas con dueños:', error.message);
      throw new InternalServerErrorException('Error interno del servidor');
    }
  }

  async findPetsByOwner(ownerId: number) {
    try {
      const pets = await this.prisma.mascotas.findMany({
        where: { id_duenyo_mascota: ownerId },
        select: {
          id: true,
          nombre: true,
          sexo: true,
          microchip: true,
          raza: true,
          especie: true,
          peso: true,
          color: true,
          fecha_nacimiento: true,
          estado: true,
          tipo_mascota: {
            select: {
              tipo: true,
            },
          },
        },
      });

      if (!pets || pets.length === 0) {
        return {
          message: "No hay mascotas para este dueño",
        };
      }

      return pets;
    } catch (error) {
      console.error('Error al recuperar las mascotas del dueño:', error.message);
      throw new InternalServerErrorException('Error interno del servidor');
    }
  }
  
  async findOne(id: number) {
    try {
      const mascota = await this.prisma.mascotas.findUnique({
        where: { id },
        select: {
          id: true,
          nombre: true,
          sexo: true,
          microchip: true,
          raza: true,
          especie: true,
          peso: true,
          color: true,
          fecha_nacimiento: true,
          estado: true,
          created_at: true,
          updated_at: true,
          tipo_mascota: {
            select: {
              tipo: true,
            },
          },
        },
      });

      if (!mascota) {
        throw new NotFoundException(`Mascota con ID ${id} no encontrado`);
      }

      return mascota;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error('Error al buscar mascota por ID:', error.message);
      throw new Error('Error al buscar mascota por ID');
    }
  }

  async update(id: number, body: UpdateManagerPetDto) {
    try {
      // Verificar si la mascota existe
      const pet = await this.prisma.mascotas.findUnique({
        where: { id },
      });

      if (!pet) {
        throw new NotFoundException(`Mascota con ID ${id} no encontrada`);
      }

      // Verificar si el dueño de la mascota existe
      if (body.id_duenyo_mascota) {
        const owner = await this.prisma.duenosMascotas.findUnique({
          where: { id: body.id_duenyo_mascota },
        });

        if (!owner) {
          throw new NotFoundException(`Dueño de mascota con ID ${body.id_duenyo_mascota} no encontrado`);
        }
      }

      // Verificar si el tipo de mascota existe
      const typePet = await this.prisma.tipoMascota.findUnique({
        where: { id: body.id_tipo_mascota },
      });

      if (!typePet) {
        throw new NotFoundException(`Tipo de mascota con ID ${body.id_tipo_mascota} no encontrado`);
      }

      // Actualizar la mascota en la base de datos
      const updatedPet = await this.prisma.mascotas.update({
        where: { id },
        data: {
          ...body,
        },
        select: {
          id: true,
          nombre: true,
          sexo: true,
          microchip: true,
          raza: true,
          especie: true,
          peso: true,
          color: true,
          fecha_nacimiento: true,
          estado: true,
          created_at: true,
          updated_at: true,
        },
      });

      return {
        message: 'Mascota actualizada con éxito',
        data: updatedPet,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        console.error('Error al actualizar la mascota:', error.message);
        throw new Error('Error al actualizar la mascota');
      }
    }
  }

  async remove(id: number) {
    try {
      // Verificar si la mascota existe
      const pet = await this.prisma.mascotas.findUnique({
        where: { id },
      });

      if (!pet) {
        throw new NotFoundException(`Mascota con ID ${id} no encontrada`);
      }

      // Verificar si la mascota tiene asociaciones antes de eliminarla
      // Por ejemplo, puedes verificar si tiene citas médicas asociadas
      /*
      const citasMedicas = await this.prisma.citasMedicas.findMany({
        where: { idMascota: id },
      });

      if (citasMedicas.length > 0) {
        throw new Error(`No se puede eliminar la mascota con ID ${id} porque tiene citas médicas asociadas`);
      }
        */

      // Eliminar la mascota de la base de datos
      await this.prisma.mascotas.delete({
        where: { id },
      });

      return { message: `Mascota con ID ${id} eliminada con éxito` };
    } catch (error) {
      // Manejo de errores
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        console.error('Error al eliminar la mascota:', error.message);
        throw new Error('Error al eliminar la mascota');
      }
    }
  }
}

