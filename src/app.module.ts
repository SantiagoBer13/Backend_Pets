import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ManagerVaccinesModule } from './manager_vaccines/manager_vaccines.module';
import { ManagerSurgeriesModule } from './manager_surgeries/manager_surgeries.module';
import { ManagerMedicalTreatmentsModule } from './manager_medical_treatments/manager_medical_treatments.module';
import { ManagerAllergiesModule } from './manager_allergies/manager_allergies.module';
import { ManagerDeworingModule } from './manager_deworing/manager_deworing.module';
import { ManagerHealthScreeningModule } from './manager_health_screening/manager_health_screening.module';
import { ManagerPetsModule } from './manager_pets/manager_pets.module';
import { ManagerProfilesModule } from './manager_profiles/manager_profiles.module';

@Module({
  imports: [
    ManagerVaccinesModule,
    ManagerSurgeriesModule,
    ManagerMedicalTreatmentsModule,
    ManagerAllergiesModule,
    ManagerDeworingModule,
    ManagerHealthScreeningModule,
    ManagerPetsModule,
    ManagerProfilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
