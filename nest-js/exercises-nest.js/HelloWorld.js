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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @ts-nocheck
import { Controller, Get, Injectable, Module } from '@nestjs/common';
// Aqui se se maneja la logica de negocio
let AppService = class AppService {
    getHello() {
        return 'Hello World';
    }
};
AppService = __decorate([
    Injectable()
], AppService);
export { AppService };
// Aqui se manejar las rutas y peticiones HTTP
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
};
__decorate([
    Get()
], AppController.prototype, "getHello", null);
AppController = __decorate([
    Controller()
], AppController);
export { AppController };
// Aqui se agrupa y declara el modulo principal de la aplicacion
let AppModule = class AppModule {
};
AppModule = __decorate([
    Module({
        controllers: [AppController],
        providers: [AppService],
    })
], AppModule);
export { AppModule };
