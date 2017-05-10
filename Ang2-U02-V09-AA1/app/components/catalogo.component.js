System.register(['angular2/core', '../services/cursos.service', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, cursos_service_1, router_1;
    var CatalogoCursos;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cursos_service_1_1) {
                cursos_service_1 = cursos_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            // Decorador component, indicamos en que etiqueta se va a cargar la plantilla
            CatalogoCursos = (function () {
                function CatalogoCursos(_servicio) {
                    this._servicio = _servicio;
                    this.mostrarDatos = false;
                    this.cursos = _servicio.getCursos();
                    this.curso = this.cursos[0];
                    this.recomendado = this.cursos[0];
                    console.log(_servicio.getCursos());
                }
                CatalogoCursos.prototype.debug = function () {
                    console.log(this.curso);
                };
                CatalogoCursos.prototype.onShowHide = function (value) {
                    this.mostrarDatos = value;
                };
                CatalogoCursos.prototype.logCurso = function () {
                    console.log(this.curso);
                };
                CatalogoCursos.prototype.onCambiarRecomendado = function (curso) {
                    console.log("Curso recomendado actual" + this.curso);
                    this.curso = curso;
                    this.recomendado = curso;
                    console.log("Nuevo recomendado actual" + this.curso);
                };
                CatalogoCursos = __decorate([
                    core_1.Component({
                        selector: 'cataologo-cursos',
                        templateUrl: '../app/view/catalogo-cursos.html',
                        providers: [cursos_service_1.CursosService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [cursos_service_1.CursosService])
                ], CatalogoCursos);
                return CatalogoCursos;
            }());
            exports_1("CatalogoCursos", CatalogoCursos);
        }
    }
});
//# sourceMappingURL=catalogo.component.js.map