// Importando los decoradores y módulos necesarios de NestJS y Swagger.
import { Controller, Get } from '@nestjs/common';
import { AppService } from '../../application/usercases/app.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

// Aplicando el decorador ApiTags con la etiqueta 'test' a la clase controladora.
@ApiTags('test')
// Decorando la clase como un controlador de NestJS.
@Controller()
export class AppController {
  // Injectando el servicio AppService en el constructor de la clase controladora.
  constructor(private readonly appService: AppService) {}

  // Decorando el método getHello con el decorador Get(), indicando que es un endpoint de tipo HTTP GET.
  @Get()
  // Definiendo la respuesta exitosa del método getHello con un decorador ApiOkResponse.
  @ApiOkResponse({
    description: 'The hello world message.', // Descripción de la respuesta exitosa.
    type: String, // Tipo de la respuesta.
  })
  getHello(): string {
    // Retornando el resultado del método getHello del servicio inyectado.
    return this.appService.getHello();
  }
}
