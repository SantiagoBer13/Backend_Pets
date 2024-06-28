import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthGuardUser } from './auth_user.guard';
import { AuthGuardVeterinarian } from './auth_veterinarian.guard';

@Injectable()
export class AuthGuardCombined implements CanActivate {
  constructor(
    private authGuardUser: AuthGuardUser,
    private authGuardVeterinarian: AuthGuardVeterinarian,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      if (await this.authGuardUser.canActivate(context)) {
        return true;
      }
    } catch {}

    try {
      if (await this.authGuardVeterinarian.canActivate(context)) {
        return true;
      }
    } catch {}

    return false;
  }
}