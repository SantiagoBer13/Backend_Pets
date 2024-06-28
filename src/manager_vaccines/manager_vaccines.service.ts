import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateManagerVaccineDto } from './dto/create-manager_vaccine.dto';
import { UpdateManagerVaccineDto } from './dto/update-manager_vaccine.dto';
import { PrismaService } from 'src/prisma.service';
import { CreateManagerVaccinePetDto } from './dto/create-manager_vaccine_pet.dto';
import { UpdateManagerVaccinePetDto } from './dto/update-manager_vaccine_pet.dto';

@Injectable()
export class ManagerVaccinesService {

  constructor(private prisma: PrismaService) { }

  async create(body: CreateManagerVaccineDto) {
    try {
      const vacuna = await this.prisma.vacunas.create({
        data: {
          nombre: body.nombre,
          numero_lote: body.numero_lote
        },
      });

      // Devolver el mensaje de éxito y el ID de la vacuna creada
      return { mensaje: 'Vacuna creada', id_vacuna: vacuna.id };
    } catch (error) {
      // Manejo de errores
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        console.error('Error al crear la vacuna:', error.message);
        throw new Error('Error al crear la vacuna');
      }
    }
  }

  async findAll() {
    try {
      const vacunas = await this.prisma.vacunas.findMany({
        select: {
          id: true,
          nombre: true,
          numero_lote: true,
        },
      });

      if (!vacunas || vacunas.length === 0) {
        return [];
      }

      return vacunas;
    } catch (error) {
      // Manejo de errores
      console.error('Error al buscar vacunas:', error.message);
      throw new Error('Error al buscar vacunas');
    }
  }

  async findOne(id: number) {
    try {
      const vacuna = await this.prisma.vacunas.findUnique({
        where: { id },
        select: {
          id: true,
          nombre: true,
          numero_lote: true,
        },
      });

      if (!vacuna) {
        throw new NotFoundException(`Vacuna con ID ${id} no encontrado`);
      }

      return vacuna;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error('Error al buscar vacuna por ID:', error.message);
      throw new Error('Error al buscar vacuna por ID');
    }
  }

  async update(id: number, body: UpdateManagerVaccineDto) {
    try {
      // Verificar si la vacuna existe
      const vacuna = await this.prisma.vacunas.findUnique({
        where: { id },
      });

      if (!vacuna) {
        throw new NotFoundException(`Vacuna con ID ${id} no encontrada`);
      }

      // Actualizar la vacuns en la base de datos
      const updatedVacuna = await this.prisma.vacunas.update({
        where: { id },
        data: {
          ...body,
        },
        select: {
          id: true,
          nombre: true,
          numero_lote: true,
        },
      });

      return {
        message: 'Vacuna actualizada con éxito',
        data: updatedVacuna,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        console.error('Error al actualizar la vacuna:', error.message);
        throw new Error('Error al actualizar la vacuna');
      }
    }
  }

  async remove(id: number) {
    try {
      // Verificar si la vacuna existe
      const vacuna = await this.prisma.vacunas.findUnique({
        where: { id },
      });

      if (!vacuna) {
        throw new NotFoundException(`Vacuna con ID ${id} no encontrada`);
      }

      // Eliminar la vacuna de la base de datos
      await this.prisma.vacunas.delete({
        where: { id },
      });

      return { message: `Vacuna con ID ${id} eliminada con éxito` };
    } catch (error) {
      // Manejo de errores
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        console.error('Error al eliminar la vacuna:', error.message);
        throw new Error('Error al eliminar la vacuna');
      }
    }
  }

  async createVaccinePet(body: CreateManagerVaccinePetDto, id_veterinario: number) {
    try {
      // Verificar si la mascota existe
      const pet = await this.prisma.mascotas.findUnique({
        where: { id: body.id_mascota },
      });

      if (!pet) {
        throw new NotFoundException(`Mascota con ID ${body.id_mascota} no encontrada`);
      }

      // Verificar si la vacuna existe
      const vacuna = await this.prisma.vacunas.findUnique({
        where: { id: body.id_vacuna },
      });

      if (!vacuna) {
        throw new NotFoundException(`Vacuna con ID ${body.id_vacuna} no encontrada`);
      }

      // Verificar si el veterinario existe
      const veterinario = await this.prisma.veterinarios.findUnique({
        where: { id: id_veterinario },
      });

      if (!veterinario) {
        throw new NotFoundException(`Veterinario con ID ${id_veterinario} no encontrado`);
      }

      // Crear la relación vacuna-mascota
      const petVacuna = await this.prisma.vacunaMascota.create({
        data: {
          id_mascota: body.id_mascota,
          id_vacuna: body.id_vacuna,
          id_veterinario: id_veterinario,
          fecha_vacunacion: new Date(body.fecha_vacunacion),
          fecha_proxima_vacunacion: new Date(body.fecha_proxima_vacunacion),
          dosis: body.dosis,
          motivo: body.motivo,
        },
      });

      // Devolver el mensaje de éxito y el ID de la vacuna aplicada
      return { mensaje: 'Vacuna asignada a la mascota', id_vacuna_aplicada: petVacuna.id };
    } catch (error) {
      // Manejo de errores
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        console.error('Error al crear la vacuna para la mascota:', error.message);
        throw new Error('Error al crear la vacuna para la mascota');
      }
    }
  }

  async findAllVaccinePet(id: number) {
    try {
      // Buscar todas las vacunas asignadas a una mascota específica
      const vacunas = await this.prisma.vacunaMascota.findMany({
        where: {
          id_mascota: id
        },
        select: {
          id_mascota: true,
          fecha_vacunacion: true,
          fecha_proxima_vacunacion: true,
          dosis: true,
          motivo: true,
          created_at: true,
          updated_at: true,
          vacuna: {
            select: {
              id: true,
              nombre: true,
              numero_lote: true,
            }
          }
        },
      });

      // Si no se encuentran vacunas, retornar una lista vacía
      if (!vacunas || vacunas.length === 0) {
        return [];
      }

      return vacunas;
    } catch (error) {
      // Manejo de errores
      console.error('Error al buscar vacunas de la mascota:', error.message);
      throw new Error('Error al buscar vacunas de la mascota');
    }
  }

  async findOneVaccinePet(id: number) {
    try {
      const vaccinePet = await this.prisma.vacunaMascota.findUnique({ where: { id }, select: {
        id_mascota: true,
        fecha_vacunacion: true,
        fecha_proxima_vacunacion: true,
        dosis: true,
        motivo: true,
        created_at: true,
        updated_at: true,
        vacuna: {
          select: {
            id: true,
            nombre: true,
            numero_lote: true,
          }
        }
      }, });
      if (!vaccinePet) {
        throw new NotFoundException(`Vacuna de mascota con ID ${id} no encontrada`);
      }
      return vaccinePet;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        console.error('Error al buscar la vacuna:', error.message);
        throw new Error('Error al buscar la vacuna');
      }
    }
  }

  async updateVaccinePet(id: number, body: UpdateManagerVaccinePetDto, id_veterinario: number) {
    try {
      // Verificar si la vacuna de la mascota existe
      const vaccinePet = await this.prisma.vacunaMascota.findUnique({
        where: { id },
      });

      if (!vaccinePet) {
        throw new NotFoundException(`Vacuna de mascota con ID ${id} no encontrada`);
      }

      // Verificar y actualizar la mascota si se proporciona el ID
      if (body.id_mascota) {
        const pet = await this.prisma.mascotas.findUnique({
          where: { id: body.id_mascota },
        });

        if (!pet) {
          throw new NotFoundException(`Mascota con ID ${body.id_mascota} no encontrada`);
        }
      }

      // Verificar y actualizar la vacuna si se proporciona el ID
      if (body.id_vacuna) {
        const vaccine = await this.prisma.vacunas.findUnique({
          where: { id: body.id_vacuna },
        });

        if (!vaccine) {
          throw new NotFoundException(`Vacuna con ID ${body.id_vacuna} no encontrada`);
        }
      }

      // Verificar y actualizar el veterinario si se proporciona el ID
      if (id_veterinario) {
        const veterinarian = await this.prisma.veterinarios.findUnique({
          where: { id: id_veterinario },
        });

        if (!veterinarian) {
          throw new NotFoundException(`Veterinario con ID ${id_veterinario} no encontrado`);
        }
      }

      // Actualizar la vacuna de la mascota en la base de datos
      const updatedVaccinePet = await this.prisma.vacunaMascota.update({
        where: { id },
        data: {
          ...body,
        },
        select: {
          id_mascota: true,
          fecha_vacunacion: true,
          fecha_proxima_vacunacion: true,
          dosis: true,
          motivo: true,
          created_at: true,
          updated_at: true,
          vacuna: {
            select: {
              id: true,
              nombre: true,
              numero_lote: true,
            }
          }
        },
      });

      return {
        message: 'Vacuna de mascota actualizada con éxito',
        data: updatedVaccinePet,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        console.error('Error al actualizar la vacuna de mascota:', error.message);
        throw new Error('Error al actualizar la vacuna de mascota');
      }
    }
  }

  async removeVaccinePet(id: number) {
    try {
      const vaccinePet = await this.prisma.vacunaMascota.findUnique({ where: { id } });
      if (!vaccinePet) {
        throw new NotFoundException(`Vacuna de mascota con ID ${id} no encontrada`);
      }
      await this.prisma.vacunaMascota.delete({ where: { id } });
      return { message: `Vacuna de mascota con ID ${id} eliminada con éxito` };
    } catch (error) {
      // Manejo de errores
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        console.error('Error al eliminar la vacuna de mascota:', error.message);
        throw new Error('Error al eliminar la vacuna de mascota');
      }
    }
  }
}
