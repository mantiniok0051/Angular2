class Articulo {

	private fabricante:string;
	private categoria:string;
	private nombre:string;
	private precio:number;
	
	constructor() {
		this.fabricante = "fabricanteDefault";
		this.categoria = "asignarCategoria";
		this.nombre = "asignarNombre";
		this.precio = 0;
	}

	

//Getters 
	public getFabricante():string{return this.fabricante;}
	public getCategoria():string{return this.categoria;}
	public getNombre():string{return this.nombre;}
	public getPrecio():number{return this.precio;}
//Setters 
	public setFabricante(fabricante:string){this.fabricante = fabricante;}
	public setCategoria(categoria:string){this.categoria = categoria;}
	public setNombre(nombre:string){this.nombre = nombre;}
	public setPrecio(precio:number){this.precio = precio;}

	
}

class Servicio extends Articulo {
	private medida:string;
	private periodo:number;

	public	getMedida():string{
		return this.medida;
	}
	public	getPeriodo():number{
		return this.periodo;
	}		
	public	setMedida(medida:string){
		this.medida = medida;
	}	
	public	setPeriodo(periodo:number){
		this.periodo = periodo;
	}
}

class Inventariable extends Articulo{
	private existencia:number;
	public setExistencia(ex:number){		
		this.existencia=ex;
	}
	public getExistencia():number{
		return this.existencia;
	}


	constructor(ex:number,fa:string,ca:string,nom:string,pr:number) {
		super();
		this.setExistencia(ex);
		this.setFabricante(fa);
		this.setCategoria(ca);
		this.setNombre(nom);
		this.setPrecio(pr);
	}
	desplegar():string{
		let respuesta:string;
			respuesta= this.getFabricante()+" "+
			           this.getCategoria()+" "+
			           this.getNombre()+" "+
			           this.getPrecio()+" "+
			           this.getExistencia();
		return respuesta;
	}



}

//Lógica del formulario

var catalogo:Array<string> = [];

function guardar(){
	var fabricante = (<HTMLInputElement>document.getElementById("frm-reg-fabricante")).value.toString();
    var categoria = (<HTMLInputElement>document.getElementById("frm-reg-categoria")).value.toString();
	var nombre = (<HTMLInputElement>document.getElementById("frm-reg-nombre")).value.toString();
	var precio = 12;

	var nuevo_registro = new Inventariable(10, fabricante, categoria, nombre, precio);
	catalogo.push(nuevo_registro.desplegar());
	
	var list= "";
	for (var i = 0; i < catalogo.length; i++) {
		list = list+"<li>"+catalogo[i]+"</li>"
	}

	var vistacatalogo = <HTMLElement> document.getElementById("catalogo");
		vistacatalogo.innerHTML = list
}