import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ManagerStatisticsService {
    constructor(private prisma: PrismaService) { }

    async getTotalMascotas() {
        return this.prisma.mascotas.count();
    }

    async getMascotasFelinasCaninas() {
        const felinos = await this.prisma.mascotas.count({
            where: { especie: 'felino' },
        });
        const caninos = await this.prisma.mascotas.count({
            where: { especie: 'canino' },
        });
        return { felinos, caninos };
    }

    async getMascotasPorTipo() {
        const mascotas = await this.prisma.mascotas.findMany({
            include: {
                tipo_mascota: true,
            },
        });

        const tipos = {
            "Compañia": 0,
            "Soporte Emocional": 0,
            "Servicio": 0,
        };

        mascotas.forEach(mascota => {
            const tipoNombre = mascota.tipo_mascota.tipo;
            if (tipos.hasOwnProperty(tipoNombre)) {
                tipos[tipoNombre]++;
            }
        });

        return tipos;
    }

    getEtapaCrecimiento() {
        // Lógica para obtener el total de mascotas por etapa de crecimiento
    }

    async getVacunablesDesparasitables() {
        const today = new Date();

        const vacunables = await this.prisma.vacunaMascota.count({
            where: {
                fecha_proxima_vacunacion: {
                    lte: today,
                },
            },
        });

        const desparasitables = await this.prisma.desparacitaciones.count({
            where: {
                fecha_proxima_desparacitacion: {
                    lte: today,
                },
            },
        });

        return { vacunables, desparasitables };
    }

    async getVacunasDesparasitacionesAplicadas() {
        const vacunas = await this.prisma.vacunaMascota.count();
        const desparasitaciones = await this.prisma.desparacitaciones.count();
        return { vacunas, desparasitaciones };
    }

    async getMascotasPorVereda() {
        const mascotas = await this.prisma.mascotas.findMany({
            include: {
                dueno: {
                    include: {
                        vereda: true
                    }
                }
            },
        });

        const veredas = {
            "Barrio Centro": 0,
            "Barrio la Esperanza": 0,
            "Vereda La Moya": 0,
            "Vereda Cetime": 0,
            "Vereda El Abra": 0,
            "Vuelta Grande": 0,
            "Vereda Siberia": 0,
        };

        mascotas.forEach(mascota => {
            const veredaNombre = mascota.dueno.vereda.nombre;
            if (veredas.hasOwnProperty(veredaNombre)) {
                veredas[veredaNombre]++;
            }
        });

        return veredas;
    }

    async getDuenosMascotas() {
        return await this.prisma.duenosMascotas.count();
    }

    async getMascotasPorSexo() {
        const mascotas = await this.prisma.mascotas.findMany();
        const sexos = {
            "M": 0,
            "H": 0
        }
        mascotas.forEach(mascota => {
            const sexo = mascota.sexo;
            if (sexos.hasOwnProperty(sexo)) {
                sexos[sexo]++
            }
        })
        return sexos;
    }

    getTasaCrecimiento() {
        // Lógica para obtener la tasa de crecimiento de mascotas
    }
}
