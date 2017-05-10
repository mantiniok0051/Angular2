//Los servicios son componenntes inyectables dentro de otros componentes
import {Injectable} from 'angular2/core';
//Se incluye el contenedor de datos
import {CURSOS} from './mock.cursos';
//Importar clase con la lógica del componente
import {Curso} from '../model/curso';

@Injectable()
export class CursosService{
	public getCursos(){
		return CURSOS;
	}
	public registrarCurso(curso:Curso){
		let index:number = CURSOS.length+1;
		curso.id = index
		Promise.resolve(CURSOS).then((cursos: Curso[]) => cursos.push(curso));
	}
}