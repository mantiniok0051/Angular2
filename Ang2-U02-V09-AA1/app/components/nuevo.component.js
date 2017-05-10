System.register(['angular2/core', '../model/curso', 'angular2/router', '../services/cursos.service'], function(exports_1, context_1) {
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
    var core_1, curso_1, router_1, cursos_service_1;
    var NuevoCursos;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (curso_1_1) {
                curso_1 = curso_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (cursos_service_1_1) {
                cursos_service_1 = cursos_service_1_1;
            }],
        execute: function() {
            // Decorador component, indicamos en que etiqueta se va a cargar la plantilla
            NuevoCursos = (function () {
                function NuevoCursos(_servicio, _router, _routeParams) {
                    this._servicio = _servicio;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.titulo = 'Registrar un nuevo curso';
                    this.nombreCurso = '';
                }
                NuevoCursos.prototype.onSubmit = function () {
                    this._servicio.registrarCurso(this.nuevoCurso);
                    this._router.navigate(['Cursos']);
                };
                NuevoCursos.prototype.ngOnInit = function () {
                    this.nombreCurso = this._routeParams.get('nombre');
                    this.nuevoCurso = new curso_1.Curso(99, this._routeParams.get('nombre'), this._routeParams.get('facilitador'), this._routeParams.get('anio'));
                };
                NuevoCursos = __decorate([
                    core_1.Component({
                        //selector: 'nuevo-cursos',
                        templateUrl: '../app/view/nuevo-cursos.html',
                        providers: [cursos_service_1.CursosService]
                    }), 
                    __metadata('design:paramtypes', [cursos_service_1.CursosService, router_1.Router, router_1.RouteParams])
                ], NuevoCursos);
                return NuevoCursos;
            }());
            exports_1("NuevoCursos", NuevoCursos);
        }
    }
});
//# sourceMappingURL=nuevo.component.js.map