<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
<a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
<a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

## Descripción

Este es un proyecto basado en el framework [Nest](https://github.com/nestjs/nest) utilizando TypeScript. Desarrollado por Santiago Bernal Tinjacá, este proyecto implementa un sistema para la gestión de mascotas y sus dueños, incluyendo autenticación JWT, configuración de CORS y consultas optimizadas.

## Ejecución de la Aplicación

```bash
# desarrollo
$ npm run start

# modo watch
$ npm run start:dev

# modo producción
$ npm run start:prod
```

## Estructura del Proyecto
El proyecto está estructurado de la siguiente manera:
src/
├── auth/
│   ├── guards/
│   │   └── jwt-auth.guard.ts
│   ├── strategies/
│   │   └── jwt.strategy.ts
│   ├── auth.module.ts
│   ├── auth.service.ts
│   └── constants.ts
├── manager_allergies/
│   └── ...
├── manager_vaccines/
│   └── ...
├── manager-pets/
│   ├── manager-pets.controller.ts
│   ├── manager-pets.service.ts
│   └── ...
└── prisma/
 │   ├── schema.prisma
## Funcionalidades Implementadas
### Autenticación JWT
-   Guardas JWT para proteger las rutas.
-   Estrategia JWT para validar tokens.
### Configuración de CORS
-   Configuración de CORS global para permitir solicitudes de ciertos orígenes.

## Contacto

Desarrollado por Santiago Bernal Tinjacá.