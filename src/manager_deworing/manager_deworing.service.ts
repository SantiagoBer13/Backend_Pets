import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateManagerDeworingDto } from './dto/create-manager_deworing.dto';
import { UpdateManagerDeworingDto } from './dto/update-manager_deworing.dto';
import { PrismaService } from 'src/prisma.service';
import { CreateManagerDeworingPetDto } from './dto/create-manager_deworing_pet.dto';
import { UpdateManagerDeworingPetDto } from './dto/update-manager_deworing_pet.dto';

@Injectable()
export class ManagerDeworingService {

  constructor(private prisma: PrismaService) { }

  async create(body: CreateManagerDeworingDto) {
    try {
      const medicamento = await this.prisma.medicamentos.create({
        data: {
          nombre: body.nombre,
          forma: body.forma,
          numero_lote: body.numero_lote
        },
      });

      // Devolver el mensaje de éxito y el ID del medicamento creado
      return { mensaje: 'Medicamento creado', id_medicamento: medicamento.id };
    } catch (error) {
      // Manejo de errores
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        console.error('Error al crear el medicamento:', error.message);
        throw new Error('Error al crear el medicamento');
      }
    }
  }

  async findAll() {
    try {
      const medicamentos = await this.prisma.medicamentos.findMany({
        select: {
          id: true,
          nombre: true,
          forma: true,
          numero_lote: true,
        },
      });

      if (!medicamentos || medicamentos.length === 0) {
        return [];
      }

      return medicamentos;
    } catch (error) {
      // Manejo de errores
      console.error('Error al buscar medicamentos:', error.message);
      throw new Error('Error al buscar medicamentos');
    }
  }

  async findOne(id: number) {
    try {
      const medicamento = await this.prisma.medicamentos.findUnique({
        where: { id },
        select: {
          id: true,
          nombre: true,
          forma: true,
          numero_lote: true,
        },
      });

      if (!medicamento) {
        throw new NotFoundException(`Medicamento con ID ${id} no encontrado`);
      }

      return medicamento;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error('Error al buscar medicamento por ID:', error.message);
      throw new Error('Error al buscar medicamento por ID');
    }
  }

  async update(id: number, body: UpdateManagerDeworingDto) {
    try {
      // Verificar si la vacuna existe
      const medicamento = await this.prisma.medicamentos.findUnique({
        where: { id },
      });

      if (!medicamento) {
        throw new NotFoundException(`Medicamento con ID ${id} no encontrado`);
      }

      // Actualizar la vacuns en la base de datos
      const updatedMedicamento = await this.prisma.medicamentos.update({
        where: { id },
        data: {
          ...body,
        },
        select: {
          id: true,
          nombre: true,
          forma: true,
          numero_lote: true,
        },
      });

      return {
        message: 'Medicamento actualizado con éxito',
        data: updatedMedicamento,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        console.error('Error al actualizar el medicamento:', error.message);
        throw new Error('Error al actualizar el medicamento');
      }
    }
  }

  async remove(id: number) {
    try {
      // Verificar si el medicamento existe
      const medicamento = await this.prisma.medicamentos.findUnique({
        where: { id },
      });

      if (!medicamento) {
        throw new NotFoundException(`Medicamento con ID ${id} no encontrado`);
      }

      // Eliminar la vacuna de la base de datos
      await this.prisma.medicamentos.delete({
        where: { id },
      });

      return { message: `Medicamento con ID ${id} eliminado con éxito` };
    } catch (error) {
      // Manejo de errores
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        console.error('Error al eliminar el medicamento:', error.message);
        throw new Error('Error al eliminar el medicamento');
      }
    }
  }


  async createDeworingPet(body: CreateManagerDeworingPetDto, id_veterinario: number) {
    try {
      // Verificar si la mascota existe
      const pet = await this.prisma.mascotas.findUnique({
        where: { id: body.id_mascota },
      });

      if (!pet) {
        throw new NotFoundException(`Mascota con ID ${body.id_mascota} no encontrada`);
      }

      // Verificar si el medicamento existe
      const medicina = await this.prisma.medicamentos.findUnique({
        where: { id: body.id_medicamento },
      });

      if (!medicina) {
        throw new NotFoundException(`Medicamento con ID ${body.id_medicamento} no encontrado`);
      }

      // Verificar si el veterinario existe
      const veterinario = await this.prisma.veterinarios.findUnique({
        where: { id: id_veterinario },
      });

      if (!veterinario) {
        throw new NotFoundException(`Veterinario con ID ${id_veterinario} no encontrado`);
      }

      // Crear la relación desparacitación-mascota
      const dewormingPet = await this.prisma.desparacitaciones.create({
        data: {
          id_mascota: body.id_mascota,
          id_medicamento: body.id_medicamento,
          id_veterinario: id_veterinario,
          fecha_desparacitacion: new Date(body.fecha_desparacitacion), // Convertir a objeto Date
          fecha_proxima_desparacitacion: new Date(body.fecha_proxima_desparacitacion), // Convertir a objeto Date
          observaciones: body.observaciones,
        },
      });

      // Devolver el mensaje de éxito y el ID de la desparacitación asignada
      return { mensaje: 'Desparacitación asignada a la mascota', id_desparacitacion_aplicada: dewormingPet.id };
    } catch (error) {
      // Manejo de errores
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        console.error('Error al crear la desparacitación para la mascota:', error.message);
        throw new Error('Error al crear la desparacitación para la mascota');
      }
    }
  }


  async findAllDeworingPet(id: number) {
    try {
      // Buscar todas las vacunas asignadas a una mascota específica
      const desparacitaciones = await this.prisma.desparacitaciones.findMany({
        where: {
          id_mascota: id,
        },
        select: {
          id_mascota: true,
          fecha_desparacitacion: true,
          fecha_proxima_desparacitacion: true,
          observaciones: true,
          created_at: true,
          updated_at: true,
          medicamento: {
            select: {
              id: true,
              nombre: true,
              forma: true,
              numero_lote: true
            }
          },
        },
      });

      // Si no se encuentran desparacitaciones, retornar una lista vacía
      if (!desparacitaciones || desparacitaciones.length === 0) {
        return [];
      }

      return desparacitaciones;
    } catch (error) {
      // Manejo de errores
      console.error('Error al buscar desparacitaciones de la mascota:', error.message);
      throw new Error('Error al buscar desparacitaciones de la mascota');
    }
  }

  async findOneDeworingPet(id: number) {
    try {
      const deworingPet = await this.prisma.desparacitaciones.findUnique({
        where: { id },
        select: {
          id_mascota: true,
          fecha_desparacitacion: true,
          fecha_proxima_desparacitacion: true,
          observaciones: true,
          created_at: true,
          updated_at: true,
          medicamento: {
            select: {
              id: true,
              nombre: true,
              forma: true,
              numero_lote: true
            }
          },
        }
      });

      if (!deworingPet) {
        throw new NotFoundException(`Desparacitación de mascota con ID ${id} no encontrada`);
      }

      return deworingPet;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        console.error('Error al buscar la desparacitación de mascota:', error.message);
        throw new Error('Error al buscar la desparacitación de mascota');
      }
    }
  }

  async updateDeworingPet(id: number, body: UpdateManagerDeworingPetDto, id_veterinario: number) {
    try {
      // Verificar si la desparacitación de la mascota existe
      const desparacitacionPet = await this.prisma.desparacitaciones.findUnique({
        where: { id },
      });

      if (!desparacitacionPet) {
        throw new NotFoundException(`Desparacitación de mascota con ID ${id} no encontrada`);
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

      // Verificar y actualizar el medicamento si se proporciona el ID
      if (body.id_medicamento) {
        const medicamento = await this.prisma.medicamentos.findUnique({
          where: { id: body.id_medicamento },
        });

        if (!medicamento) {
          throw new NotFoundException(`Medicamento con ID ${body.id_medicamento} no encontrado`);
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

      // Actualizar la desparacitación de la mascota en la base de datos
      const updatedDeworingPet = await this.prisma.desparacitaciones.update({
        where: { id },
        data: {
          ...body,
        },
        select: {
          id_mascota: true,
          fecha_desparacitacion: true,
          fecha_proxima_desparacitacion: true,
          observaciones: true,
          created_at: true,
          updated_at: true,
          medicamento: {
            select: {
              id: true,
              nombre: true,
              forma: true,
              numero_lote: true
            }
          },
        }
      });

      return {
        message: 'Desparacitación de mascota actualizada con éxito',
        data: updatedDeworingPet,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        console.error('Error al actualizar la desparacitación de mascota:', error.message);
        throw new Error('Error al actualizar la desparacitación de mascota');
      }
    }
  }

  async removeDeworingPet(id: number) {
    try {
      const desparacitacionPet = await this.prisma.desparacitaciones.findUnique({ where: { id } });
      if (!desparacitacionPet) {
        throw new NotFoundException(`Desparacitación de mascota con ID ${id} no encontrada`);
      }
      await this.prisma.desparacitaciones.delete({ where: { id } });
      return { message: `Desparacitación de mascota con ID ${id} eliminada con éxito` };
    } catch (error) {
      // Manejo de errores
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        console.error('Error al eliminar la desparacitación de mascota:', error.message);
        throw new Error('Error al eliminar la desparacitación de mascota');
      }
    }
  }
}
