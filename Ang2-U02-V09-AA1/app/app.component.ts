// Importar el núcleo de Angular
import  {Component} from 'angular2/core';
//Importar clase con el objeto catalogo
import {CatalogoCursos} from './components/catalogo.component';
//Importar clase con el objeto footer
import {FooterCursos} from './components/footer.component';
//Importar libreria estandar para enrutamiento
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';
//Importar modulo para contacto
import {ContactoCursos} from './components/contacto.component';
//Importar modulo para contacto
import {NuevoCursos} from './components/nuevo.component';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component ({
	selector: 'mi-app',
	templateUrl: 'app/view/cursos.html',
	directives: [
					CatalogoCursos,//Estructura de despliegue
					FooterCursos,//Pie de página
					ContactoCursos,//Formulario de contacto
					NuevoCursos, //Registrar nuvos elementos
					ROUTER_DIRECTIVES //Habilitar rutas
				]
})

//Decorador route config toma cargo de encaminar solicitudes hacia el end point correcto
@RouteConfig([
	{path:'/cursos', name:'Cursos', component:CatalogoCursos, useAsDefault:true},
	{path:'/nuevo', name:'Nuevo', component:NuevoCursos},
	{path:'/nuevo/:nombre/:facilitador/:anio', name:'NuevoBasadoEnOtro', component:NuevoCursos},
	{path:'/contacto', name:'Contacto', component:ContactoCursos}
])

// Clase del componente donde iran los datos y funcionalidades
export class AppComponent{
	private titulo:string = 'Cursos para desarrolladores '; 

	public getTitulo():string{
		let titulo = this.titulo;
		return titulo;}

}
