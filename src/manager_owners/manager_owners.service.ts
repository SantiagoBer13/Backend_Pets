import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { CreateManagerOwnerDto } from './dto/create-manager_owner.dto';
import { UpdateManagerOwnerDto } from './dto/update-manager_owner.dto';
import { PrismaService } from 'src/prisma.service';
import { hash } from 'bcrypt';

@Injectable()
export class ManagerOwnersService {

  constructor(private prisma: PrismaService){}

  async create(body: CreateManagerOwnerDto) {
    try {
      // Verificar si la cédula ya existe
    const ccExists = await this.prisma.duenosMascotas.findUnique({
      where: { cc: body.cc },
    });

    if (ccExists) {
      throw new ConflictException('El número de cédula ya está registrado.');
    }

    // Generar el hash de la contraseña
    const pass_hash = await hash(body.password, 10);

    // Crear nombre de usuario basado en el nombre y apellido
    const nombreUsuarioBase = `${body.nombre.split(' ')[0].toLowerCase()}${body.cc.slice(-4)}`;

    // Verificar si el nombre de usuario ya existe
    let nombre_usuario = nombreUsuarioBase;
    let userExists = await this.prisma.duenosMascotas.findUnique({
      where: { nombre_usuario },
    });
    let suffix = 1;

    while (userExists) {
      nombre_usuario = `${nombreUsuarioBase}${suffix}`;
      userExists = await this.prisma.duenosMascotas.findUnique({
        where: { nombre_usuario },
      });
      suffix++;
    }

    // Verificar si la Vereda existe
    let id = body.id_vereda
    let veredaExists = await this.prisma.veredas.findUnique({
      where: { id },
    });

    if(!veredaExists){
      throw new NotFoundException(`Vereda con ID ${id} no encontrado`);
    }

    // Crear el usuario en la base de datos
    const user = await this.prisma.duenosMascotas.create({
      data: {
        nombre: body.nombre,
        direccion: body.direccion,
        id_vereda: body.id_vereda,
        telefono: body.telefono,
        email: body.email,
        cc: body.cc,
        password: body.password,
        password_hash: pass_hash,
        nombre_usuario,
      },
    });

    // Devolver el mensaje de éxito y el ID del usuario creado
    return { mensaje: 'Usuario creado', id_dueño_mascota: user.id, nombre_usuario: user.nombre_usuario };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error('Error al buscar dueño por ID:', error.message);
      throw new Error('Error al buscar dueño por ID');
    }
  }

  async findAll() {
    try {
      const dueños = await this.prisma.duenosMascotas.findMany({
        select: {
          id: true,
          nombre: true,
          direccion: true,
          telefono: true,
          email: true,
          cc: true,
          created_at: true,
          updated_at: true,
        },
      });

      if (!dueños || dueños.length === 0) {
        return [];
      }

      return dueños;
    } catch (error) {
      // Manejo de errores
      console.error('Error al buscar dueños:', error.message);
      throw new Error('Error al buscar dueños');
    }
  }

  async findOne(id: number) {
    try {
      const dueño = await this.prisma.duenosMascotas.findUnique({
        where: { id },
        select: {
          id: true,
          nombre: true,
          direccion: true,
          telefono: true,
          email: true,
          cc: true,
          created_at: true,
          updated_at: true,
        },
      });
      
      if (!dueño) {
        throw new NotFoundException(`Dueño con ID ${id} no encontrado`);
      }

      return dueño;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error('Error al buscar dueño por ID:', error.message);
      throw new Error('Error al buscar dueño por ID');
    }
  }

  async update(id: number, body: UpdateManagerOwnerDto) {
    // Verificar si el dueño existe
    const dueño = await this.prisma.duenosMascotas.findUnique({
      where: { id },
    });

    if (!dueño) {
      throw new NotFoundException(`Dueño con ID ${id} no encontrado`);
    }

    if (body.password) {
      const pass_hash = await hash(body.password, 10);
      body.password_hash = pass_hash;
    }

    // Actualizar el dueño en la base de datos
    const updatedVeterinario = await this.prisma.duenosMascotas.update({
      where: { id },
      data: {
        ...body,// Pasar solo las propiedades que están presentes en el cuerpo de la solicitud
      },
      select: {
        id: true,
        nombre: true,
        direccion: true,
        telefono: true,
        email: true,
        cc: true,
        created_at: true,
        updated_at: true,
      },
    });

    return {
      message: 'Dueño actualizado con éxito',
      data: updatedVeterinario,
    };
  }

  async remove(id: number) {
    // Verificar si el dueño existe
    const dueño = await this.prisma.duenosMascotas.findUnique({
      where: { id },
    });

    if (!dueño) {
      throw new NotFoundException(`Dueño con ID ${id} no encontrado`);
    }

    // Eliminar el veterinario de la base de datos
    await this.prisma.duenosMascotas.delete({
      where: { id },
    });

    return { message: `Dueño con ID ${id} eliminado con éxito` };
  }
}
