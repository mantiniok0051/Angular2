// Importar el núcleo de Angular
import  {Component} from 'angular2/core';


// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component ({
	selector: 'contacto-cursos',
	templateUrl: '../app/view/contacto-cursos.html'
})

// Clase del componente donde iran los datos y funcionalidades
export class ContactoCursos{
	public titulo:string= 'Contacto';
}