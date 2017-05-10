// Importar el núcleo de Angular
import  {Component} from 'angular2/core';
//Importar manejador standar del evento INIT
import {OnInit} from 'angular2/core';
//Importar clase con la lógica del componente
import {Curso} from '../model/curso';
//Importar libreria estandar para enrutamiento
import {Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
//Importar servicio "Cursos"
import {CursosService} from '../services/cursos.service';



// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component ({
	//selector: 'nuevo-cursos',
	templateUrl: '../app/view/nuevo-cursos.html',
	providers: [CursosService]
})

// Clase del componente donde iran los datos y funcionalidades
export class NuevoCursos implements OnInit{
	public titulo:string= 'Registrar un nuevo curso';
	public nombreCurso:string='';
	public nuevoCurso:Curso;

	constructor(private _servicio:CursosService,
				private _router:Router,
				private _routeParams:RouteParams){
	}

	onSubmit(){
		this._servicio.registrarCurso(this.nuevoCurso);
		this._router.navigate(['Cursos']);
	}
	ngOnInit():any{
		this.nombreCurso= this._routeParams.get('nombre');
		this.nuevoCurso= new Curso( 99,
									this._routeParams.get('nombre'),
									this._routeParams.get('facilitador'),
									this._routeParams.get('anio')
								   );
	}
}