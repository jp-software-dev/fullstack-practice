/**
 * Descripción del Problema:
 * Al iniciar un desarrollo en arquitecturas orientadas a microservicios o backends 
 * empresariales, es necesario verificar el correcto bootstrapping de la aplicación, 
 * la inyección de dependencias y el enrutamiento base del servidor HTTP.
 * 
 * En español:
 * Necesitamos construir un controlador y un servicio en NestJS que procesen una 
 * petición GET a la ruta raíz ('/') y retornen el mensaje "Hello World!".
 * 
 * Solución Óptima en NestJS (Inyección de Dependencias):
 * 1. Servicio (`AppService`): Encapsula la lógica de negocio (retornar el string).
 * 2. Controlador (`AppController`): Expone el decorador `@Get()` para capturar la petición.
 * 3. Módulo (`AppModule`): Conecta y registra el controlador con el servicio.
 * 
 * Complejidad:
 * - Temporal: O(1) -> La respuesta HTTP es directa y en tiempo constante.
 * - Espacial: O(1) -> No requiere memoria adicional de almacenamiento.
 */

// @ts-nocheck
import { Controller, Get, Injectable, Module } from '@nestjs/common';

// Aqui se se maneja la logica de negocio
@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello World';
    }
}

// Aqui se manejar las rutas y peticiones HTTP
@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}

// Aqui se agrupa y declara el modulo principal de la aplicacion
@Module({
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}