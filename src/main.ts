import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
//import { NotFoundExceptionFilter } from './filters/http-exception.filter';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }))

  app.enableCors({
    origin: 'http://localhost:4200', // Reemplaza con tu dominio permitido
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: 'Content-Type, Accept',
  });

  // Aplicar el filtro de excepciones globalmente
  //app.useGlobalFilters(new NotFoundExceptionFilter());
  const config = new DocumentBuilder()
    .setTitle('PetCare Connect API')
    .setDescription('API for managing pet information')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
 
  // Leer el puerto desde las variables de entorno
  const port = process.env.PORT || 3001;
  await app.listen(port);
}
bootstrap();