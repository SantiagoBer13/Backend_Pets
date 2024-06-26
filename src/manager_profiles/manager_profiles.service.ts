import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateManagerProfileDto } from './dto/create-manager_profile.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { compare } from 'bcrypt';

@Injectable()
export class ManagerProfilesService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) { }

  async login(body: CreateManagerProfileDto) {
    try {
      // Validar el rol
      const validRoles = ['veterinario', 'usuario'];
      const role = body.rol.toLowerCase();

      if (!validRoles.includes(role)) {
        throw new NotFoundException('Rol no válido');
      }

      // Buscar usuario por nombre de usuario
      const user = await this.findUserByRoleAndUsername(role, body.username);

      // Verificar si el usuario existe
      if (!user) {
        throw new NotFoundException('Nombre de usuario no encontrado');
      }

      // Comparar contraseñas
      const isPasswordValid = await compare(body.password, user.password_hash);
      if (!isPasswordValid) {
        throw new UnauthorizedException('Contraseña incorrecta');
      }

      // Generar token JWT
      const payload = { id: user.id, role };
      const token = await this.jwtService.signAsync(payload);

      return {
        message: 'Usuario logueado con éxito',
        token,
        rol: role
      };
    } catch (error) {
      this.handleError(error);
    }
  }

  private async findUserByRoleAndUsername(role: string, username: string) {
    if (role === 'veterinario') {
      return this.prisma.veterinarios.findFirst({
        where: {
          nombre_usuario: username,
        },
      });
    } else if (role === 'usuario') {
      return this.prisma.duenosMascotas.findFirst({
        where: {
          nombre_usuario: username,
        },
      });
    }
  }

  private handleError(error: any) {
    if (error instanceof NotFoundException || error instanceof UnauthorizedException) {
      throw error;
    } else {
      console.error('Error en el proceso de login:', error.message);
      throw new Error('Error interno del servidor');
    }
  }
}
