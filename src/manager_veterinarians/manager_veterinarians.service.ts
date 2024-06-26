import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { CreateManagerVeterinarianDto } from './dto/create-manager_veterinarian.dto';
import { UpdateManagerVeterinarianDto } from './dto/update-manager_veterinarian.dto';
import { PrismaService } from 'src/prisma.service';
import { hash } from 'bcrypt';

@Injectable()
export class ManagerVeterinariansService {

  constructor(private prisma: PrismaService){}

  async create(body: CreateManagerVeterinarianDto) {
    // Verificar si la cédula ya existe
    const ccExists = await this.prisma.veterinarios.findUnique({
      where: { cc: body.cc },
    });

    if (ccExists) {
      throw new ConflictException('El número de cédula ya está registrado.');
    }

    // Verificar si el correo electrónico ya existe
    const emailExists = await this.prisma.veterinarios.findUnique({
      where: { email: body.email },
    });

    if (emailExists) {
      throw new ConflictException('El correo electrónico ya está registrado.');
    }

    // Generar el hash de la contraseña
    const pass_hash = await hash(body.password, 10);

    // Crear nombre de usuario basado en el nombre y apellido
    const nombreUsuarioBase = `${body.nombre.split(' ')[0].toLowerCase()}${body.cc.slice(-4)}`;

    // Verificar si el nombre de usuario ya existe
    let nombre_usuario = nombreUsuarioBase;
    let userExists = await this.prisma.veterinarios.findUnique({
      where: { nombre_usuario },
    });
    let suffix = 1;

    while (userExists) {
      nombre_usuario = `${nombreUsuarioBase}${suffix}`;
      userExists = await this.prisma.veterinarios.findUnique({
        where: { nombre_usuario },
      });
      suffix++;
    }

    // Crear el usuario en la base de datos
    const user = await this.prisma.veterinarios.create({
      data: {
        nombre: body.nombre,
        direccion: body.direccion,
        telefono: body.telefono,
        email: body.email,
        cc: body.cc,
        password: body.password,
        password_hash: pass_hash,
        especialidad: body.especialidad,
        nombre_usuario,
      },
    });

    // Devolver el mensaje de éxito y el ID del usuario creado
    return { mensaje: 'Veterinaro creado', id_veterinario: user.id, nombre_usuario: user.nombre_usuario };
  }

  async findAll() {
    try {
      const veterinarios = await this.prisma.veterinarios.findMany({
        select: {
          id: true,
          nombre: true,
          direccion: true,
          telefono: true,
          especialidad: true,
          email: true,
          cc: true,
          created_at: true,
          updated_at: true,
        },
      });

      if (!veterinarios || veterinarios.length === 0) {
        return [];
      }

      return veterinarios;
    } catch (error) {
      // Manejo de errores
      console.error('Error al buscar veterinarios:', error.message);
      throw new Error('Error al buscar veterinarios');
    }
  }

  async findOne(id: number) {
    try {
      const veterinario = await this.prisma.veterinarios.findUnique({
        where: { id },
        select: {
          id: true,
          nombre: true,
          direccion: true,
          telefono: true,
          especialidad: true,
          email: true,
          cc: true,
          created_at: true,
          updated_at: true,
        },
      });
      
      if (!veterinario) {
        throw new NotFoundException(`Veterinario con ID ${id} no encontrado`);
      }

      return veterinario;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error('Error al buscar veterinario por ID:', error.message);
      throw new Error('Error al buscar veterinario por ID');
    }
  }

  async update(id: number, body: UpdateManagerVeterinarianDto) {
    // Verificar si el veterinario existe
    const veterinario = await this.prisma.veterinarios.findUnique({
      where: { id },
    });

    if (!veterinario) {
      throw new NotFoundException(`Veterinario con ID ${id} no encontrado`);
    }

    if (body.password) {
      const pass_hash = await hash(body.password, 10);
      body.password_hash = pass_hash;
    }

    // Actualizar el veterinario en la base de datos
    const updatedVeterinario = await this.prisma.veterinarios.update({
      where: { id },
      data: {
        ...body,// Pasar solo las propiedades que están presentes en el cuerpo de la solicitud
      },
      select: {
        id: true,
        nombre: true,
        direccion: true,
        telefono: true,
        especialidad: true,
        email: true,
        created_at: true,
        updated_at: true,
      },
    });

    return {
      message: 'Veterinario actualizado con éxito',
      data: updatedVeterinario,
    };
  }

  async remove(id: number) {
    // Verificar si el veterinario existe
    const veterinario = await this.prisma.veterinarios.findUnique({
      where: { id },
    });

    if (!veterinario) {
      throw new NotFoundException(`Veterinario con ID ${id} no encontrado`);
    }

    // Eliminar el veterinario de la base de datos
    await this.prisma.veterinarios.delete({
      where: { id },
    });

    return { message: `Veterinario con ID ${id} eliminado con éxito` };
  }
}
