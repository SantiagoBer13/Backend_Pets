import { Injectable } from '@nestjs/common';
import { CreateManagerProfileDto } from './dto/create-manager_profile.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { hash } from 'bcrypt';

@Injectable()
export class ManagerProfilesService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ){}

  async login(body: CreateManagerProfileDto) {
    let user;
    let rol;
    if (body.rol === 'veterinario') {
      user = await this.prisma.veterinarios.findFirst({
        where: {
          nombreUsuario: body.username,
        },
      });
      rol = "veterinario";
    } else if (body.rol === 'usuario') {
      user = await this.prisma.duenosMascotas.findFirst({
        where: {
          nombreUsuario: body.username,
        },
      });
      rol = "usuario"
    }

    if (!user || user.password !== body.password) {
      return 'Credenciales inválidas';
    }
    const payload = { id: user.id, rol};
    return {
      message: 'Usuario logueado con éxito',
      token: await this.jwtService.sign(payload),
      hash: await hash(user.password, 8)
    };
  }

}
