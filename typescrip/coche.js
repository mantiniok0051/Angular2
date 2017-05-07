var Coche = (function () {
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
    function Coche(blank) {
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
    Coche.prototype.setFabricante = function (fabricante) {
        this.fabricante = fabricante;
    };
    Coche.prototype.setLinea = function (linea) {
        this.linea = linea;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.setFormFactor = function (formfactor) {
        this.formfactor = formfactor;
    };
    Coche.prototype.setAño = function (año) {
        this.año = año;
    };
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
    Coche.prototype.getFabricante = function () {
        return this.fabricante;
    };
    Coche.prototype.getLinea = function () {
        return this.linea;
    };
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.getFormFactor = function () {
        return this.formfactor;
    };
    Coche.prototype.getAño = function () {
        return this.año;
    };
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
    Coche.prototype.desplegar = function () {
        var respuesta;
        respuesta = "<li>" + this.getFabricante() + " " +
            this.getModelo() + " " +
            this.getLinea() + " " +
            this.getFormFactor() + " " +
            this.getAño() +
            "</li>";
        return respuesta;
    };
    return Coche;
}());
var default_1 = (function () {
    function default_1() {
    }
    return default_1;
}());
