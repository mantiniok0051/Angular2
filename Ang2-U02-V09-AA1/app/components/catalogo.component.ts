// Importar el núcleo de Angular
import  {Component} from 'angular2/core';
//Importar clase con la lógica del componente
import {Curso} from '../model/curso';
//Importar servicio "Cursos"
import {CursosService} from '../services/cursos.service';
//Importar libreria estandar para enrutamiento
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';


// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component ({
	selector: 'cataologo-cursos',
	templateUrl: '../app/view/catalogo-cursos.html',
	providers: [CursosService],
	directives: [ROUTER_DIRECTIVES]
})

// Clase del componente donde iran los datos y funcionalidades
export class CatalogoCursos{
	public curso:Curso;
	public recomendado:Curso;
	public mostrarDatos:boolean;
	public cursos:Curso[];
	public datoServicio:string;

	constructor(private _servicio:CursosService){
		this.mostrarDatos = false;		
		this.cursos = _servicio.getCursos();
		this.curso = this.cursos[0];
		this.recomendado = this.cursos[0];
		console.log(_servicio.getCursos());
		
	}

	
	public debug(){
		console.log(this.curso);	
	}
	public onShowHide(value){
		this.mostrarDatos = value;
	}
	public logCurso(){
		console.log(this.curso);
	}
	public onCambiarRecomendado(curso:Curso ){
		console.log("Curso recomendado actual"+this.curso);
		this.curso = curso;
		this.recomendado = curso;
		console.log("Nuevo recomendado actual"+this.curso);
		
	}
}