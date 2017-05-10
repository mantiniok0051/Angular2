System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Curso;
    return {
        setters:[],
        execute: function() {
            Curso = (function () {
                function Curso(id, nombre, facilitador, anio) {
                    this.id = id;
                    this.nombre = nombre;
                    this.facilitador = facilitador;
                    this.anio = anio;
                }
                return Curso;
            }());
            exports_1("Curso", Curso);
        }
    }
});
//# sourceMappingURL=curso.js.map