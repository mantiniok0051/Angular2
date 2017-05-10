System.register(['angular2/core', './components/catalogo.component', './components/footer.component', 'angular2/router', './components/contacto.component', './components/nuevo.component'], function(exports_1, context_1) {
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
    var core_1, catalogo_component_1, footer_component_1, router_1, contacto_component_1, nuevo_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (catalogo_component_1_1) {
                catalogo_component_1 = catalogo_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (contacto_component_1_1) {
                contacto_component_1 = contacto_component_1_1;
            },
            function (nuevo_component_1_1) {
                nuevo_component_1 = nuevo_component_1_1;
            }],
        execute: function() {
            // Decorador component, indicamos en que etiqueta se va a cargar la plantilla
            AppComponent = (function () {
                function AppComponent() {
                    this.titulo = 'Cursos para desarrolladores ';
                }
                AppComponent.prototype.getTitulo = function () {
                    var titulo = this.titulo;
                    return titulo;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'mi-app',
                        templateUrl: 'app/view/cursos.html',
                        directives: [
                            catalogo_component_1.CatalogoCursos,
                            footer_component_1.FooterCursos,
                            contacto_component_1.ContactoCursos,
                            nuevo_component_1.NuevoCursos,
                            router_1.ROUTER_DIRECTIVES //Habilitar rutas
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/cursos', name: 'Cursos', component: catalogo_component_1.CatalogoCursos, useAsDefault: true },
                        { path: '/nuevo', name: 'Nuevo', component: nuevo_component_1.NuevoCursos },
                        { path: '/nuevo/:nombre/:facilitador/:anio', name: 'NuevoBasadoEnOtro', component: nuevo_component_1.NuevoCursos },
                        { path: '/contacto', name: 'Contacto', component: contacto_component_1.ContactoCursos }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map