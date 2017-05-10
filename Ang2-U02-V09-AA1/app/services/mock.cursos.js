System.register(['../model/curso'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var curso_1;
    var CURSOS;
    return {
        setters:[
            function (curso_1_1) {
                curso_1 = curso_1_1;
            }],
        execute: function() {
            exports_1("CURSOS", CURSOS = [
                new curso_1.Curso(1, 'Angular 2', 'Victor Robles', '2017'),
                new curso_1.Curso(2, 'Node JS', "Zack Snider", '2016'),
                new curso_1.Curso(3, 'MongoDB', 'Will Smith', '2015'),
                new curso_1.Curso(4, 'ExpressJS', 'Desconocido', '2014'),
                new curso_1.Curso(5, 'MEAN Stack', 'Zack Snider', '2017'),
                new curso_1.Curso(6, 'UML Unleashed', 'Will Smith', '2015'),
                new curso_1.Curso(7, 'Polymer', 'Benito Camelo', '2017')
            ]);
        }
    }
});
//# sourceMappingURL=mock.cursos.js.map