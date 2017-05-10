System.register(['angular2/core', './mock.cursos'], function(exports_1, context_1) {
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
    var core_1, mock_cursos_1;
    var CursosService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_cursos_1_1) {
                mock_cursos_1 = mock_cursos_1_1;
            }],
        execute: function() {
            CursosService = (function () {
                function CursosService() {
                }
                CursosService.prototype.getCursos = function () {
                    return mock_cursos_1.CURSOS;
                };
                CursosService.prototype.registrarCurso = function (curso) {
                    var index = mock_cursos_1.CURSOS.length + 1;
                    curso.id = index;
                    Promise.resolve(mock_cursos_1.CURSOS).then(function (cursos) { return cursos.push(curso); });
                };
                CursosService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CursosService);
                return CursosService;
            }());
            exports_1("CursosService", CursosService);
        }
    }
});
//# sourceMappingURL=cursos.service.js.map