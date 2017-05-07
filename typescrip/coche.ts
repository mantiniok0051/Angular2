interface Listable{
	desplegar():string;
	/*acelerar():string;
	shiftUp():string;
	shiftDn():string;
	frenar():string;
	apagar():string;*/
}

class Coche implements Listable{
	
	public fabricante:string;
	public linea:string;
	public modelo:string;
	public formfactor:string;
	public año:number;
	
	/*public bhp:number;
	public encendido:boolean;
	public automatic:boolean;
	public velocidad:number;
	public gear:number;
	public rpm:number;
	public maxRPM:number;
	public minRPM:number;
	public peso:number;
	public torque:number;*/

constructor(blank:boolean) {		
	// coche para configurar

		this.setFabricante("");
		this.setLinea("");
		this.setFormFactor("");


		// this.setAño(0);
		// this.setBHP(0);
		// this.setEncendido(false);
		// this.setAutomatic(false);
		// this.setVelocidad(0);
		// this.setGear(0);
		// this.setRPM(0);
		// this.setMaxRPM(0);
		// this.setMinRPM(0);
		// this.setPeso(0);
		// this.setTorque(0);
	}

//setters
	public setFabricante(fabricante:string){
		this.fabricante = fabricante;
	}
	public setLinea(linea:string){
		this.linea = linea;
	}
	public setModelo(modelo:string){
		this.modelo = modelo;
	}
	public setFormFactor(formfactor:string){
		this.formfactor = formfactor;
	}
	public setAño(año:number){
		this.año = año;
	}

//setters inhabilitados 	
/*	public setBHP(bhp:number){
		this.bhp = bhp;
	}
	public setEncendido(encendido:boolean){
		this.encendido = encendido;
	}
	public setAutomatic(automatic:boolean){
		this.automatic = automatic;
	}
	public setVelocidad(velocidad:number){
		this.velocidad = velocidad;
	}	
	public setGear(gear:number){
		this.gear = gear;
	}	
	public setRPM(rpm:number){
		this.rpm = rpm;
	}
	public setMaxRPM(maxrpm:number){
		this.maxRPM = maxrpm;
	}
	public setMinRPM(minrpm:number){
		this.minRPM = minrpm;
	}
	public setPeso(peso:number){
		this.peso = peso;
	}
	public setTorque(torque:number){
		this.torque = torque;
	}*/

// getters
	public getFabricante():string{
		return this.fabricante;
	}
	public getLinea():string{
		return this.linea;
	}	
	public getModelo():string{
		return this.modelo;
	}
	public getFormFactor():string{
		return this.formfactor;
	}
	public getAño():number{
		return this.año;
	}


// getters inhabilitados
	/*public getBHP():number{
		return this.bhp;
	}
	public getEncendido():boolean{
		return this.encendido;
	}
	public getAutomatic():boolean{
		return this.automatic;
	}
	public getVelocidad():number{
		return this.velocidad;
	}
	public getGear():number{
		return this.gear;
	}
	public getRPM():number{
		return this.rpm;
	}
	public getMxRPM():number{
		return this.maxRPM;
	}
	public getMnRPM():number{
		return this.minRPM;
	}
	public getPeso():number{
		return this.peso;
	}
	public getTorque():number{
		return this.torque;
	}*/


	
 //Implementación Listable
 	public desplegar():string{
 		let respuesta:string;
 		
 		respuesta= "<li>"+this.getFabricante()+" "+
 						  this.getModelo()+" "+
 						  this.getLinea()+" "+
 						  this.getFormFactor()+" "+
 						  this.getAño()+
 					"</li>";

 		return respuesta;
 	}

	/*public acelerar():string{
		let respuesta:string;

		return respuesta;
	}
	public shiftUp():string{
		let respuesta:string;

		return respuesta;
	}
	public shiftDn():string{
		let respuesta:string;

		return respuesta;
	}
	public frenar():string{
		let respuesta:string;

		return respuesta;
	}
	public apagar():string{
		let respuesta:string;

		return respuesta;
	}*/
}

class