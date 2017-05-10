// Importar el núcleo de Angular
import  {Component} from 'angular2/core';
//Importar libreria estandar para enrutamiento
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';
//Componente estructural
import {RestaurantesList} from './components/restaurantes-list.component';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component ({
	selector: 'mi-app',
	templateUrl: 'app/view/home.html',
	directives: [
					RestaurantesList,
					ROUTER_DIRECTIVES //Habilitar rutas
				]
})


// Clase del componente donde iran los datos y funcionalidades
export class AppComponent{
	private titulo:string = 'Restaurantes'; 

	public getTitulo():string{
		let titulo = this.titulo;
		return titulo;}

}
