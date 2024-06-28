import { Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateManagerProfileDto } from './dto/create-manager_profile.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { compare } from 'bcrypt';

@Injectable()
export class ManagerProfilesService {
  private readonly validRoles = {
    usuario: process.env.USER_SECRET_KEY,
    veterinario: process.env.VETERINARIO_SECRET_KEY,
  };

  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(body: CreateManagerProfileDto) {
    try {
      const role = body.rol.toLowerCase();

      // Validar el rol
      if (!this.isValidRole(role)) {
        throw new NotFoundException('Rol no válido');
      }

      // Buscar usuario por nombre de usuario
      const user = await this.findUserByRoleAndUsername(role, body.username);
      if (!user) {
        throw new NotFoundException('Nombre de usuario no encontrado');
      }

      // Comparar contraseñas
      if (!await this.isPasswordValid(body.password, user.password_hash)) {
        throw new UnauthorizedException('Contraseña incorrecta');
      }

      // Generar token JWT
      const token = await this.generateToken(user.id, role);

      return {
        message: 'Usuario logueado con éxito',
        token,
        role,
      };
    } catch (error) {
      this.handleError(error);
    }
  }

  private isValidRole(role: string): boolean {
    return Object.keys(this.validRoles).includes(role);
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

  private async isPasswordValid(password: string, hash: string): Promise<boolean> {
    return compare(password, hash);
  }

  private async generateToken(userId: number, role: string): Promise<string> {
    const payload = { id: userId, role };
    const secret = this.validRoles[role];
    console.log(secret)
    return this.jwtService.sign(payload, { secret: secret, expiresIn: '1d' });
  }

  private handleError(error: any): void {
    if (error instanceof NotFoundException || error instanceof UnauthorizedException) {
      throw error;
    } else {
      console.error('Error en el proceso de login:', error.message);
      throw new InternalServerErrorException('Error interno del servidor');
    }
  }
}
