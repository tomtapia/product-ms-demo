// Importando los módulos necesarios de NestJS y Swagger.
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

// Función principal para iniciar la aplicación.
async function bootstrap() {
  // Creando la instancia de la aplicación con NestFactory y asignando un logger.
  const app = await NestFactory.create(AppModule, {
    logger: console,
  });

  // Configurando el DocumentBuilder para la creación del documento Swagger.
  const config = new DocumentBuilder()
    .setTitle('API Test') // Titulo del API
    .setDescription(
      // Descripción del proyecto API Test.
      'The API Test project is developed with a focus on automation and compliance with Clean Architecture principles.',
    )
    .setVersion('1.0') // Versión del API
    .addTag('test') // Etiqueta añadida al API
    .addTag('books') // Etiqueta añadida al API
    .build(); // Construir la configuración del documento.

  // Creando el documento Swagger con la configuración previamente establecida.
  const document = SwaggerModule.createDocument(app, config);

  // Configurando SwaggerModule para que sea accesible desde el endpoint '/api'.
  SwaggerModule.setup('api', app, document);

  // Iniciando la aplicación en el puerto 3000.
  await app.listen(3000);
}

// Ejecutando la función principal para arrancar la aplicación.
bootstrap();
