var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Articulo = (function () {
    function Articulo() {
        this.fabricante = "fabricanteDefault";
        this.categoria = "asignarCategoria";
        this.nombre = "asignarNombre";
        this.precio = 0;
    }
    //Getters 
    Articulo.prototype.getFabricante = function () { return this.fabricante; };
    Articulo.prototype.getCategoria = function () { return this.categoria; };
    Articulo.prototype.getNombre = function () { return this.nombre; };
    Articulo.prototype.getPrecio = function () { return this.precio; };
    //Setters 
    Articulo.prototype.setFabricante = function (fabricante) { this.fabricante = fabricante; };
    Articulo.prototype.setCategoria = function (categoria) { this.categoria = categoria; };
    Articulo.prototype.setNombre = function (nombre) { this.nombre = nombre; };
    Articulo.prototype.setPrecio = function (precio) { this.precio = precio; };
    return Articulo;
}());
var Servicio = (function (_super) {
    __extends(Servicio, _super);
    function Servicio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Servicio.prototype.getMedida = function () {
        return this.medida;
    };
    Servicio.prototype.getPeriodo = function () {
        return this.periodo;
    };
    Servicio.prototype.setMedida = function (medida) {
        this.medida = medida;
    };
    Servicio.prototype.setPeriodo = function (periodo) {
        this.periodo = periodo;
    };
    return Servicio;
}(Articulo));
var Inventariable = (function (_super) {
    __extends(Inventariable, _super);
    function Inventariable(ex, fa, ca, nom, pr) {
        var _this = _super.call(this) || this;
        _this.setExistencia(ex);
        _this.setFabricante(fa);
        _this.setCategoria(ca);
        _this.setNombre(nom);
        _this.setPrecio(pr);
        return _this;
    }
    Inventariable.prototype.setExistencia = function (ex) {
        this.existencia = ex;
    };
    Inventariable.prototype.getExistencia = function () {
        return this.existencia;
    };
    Inventariable.prototype.desplegar = function () {
        var respuesta;
        respuesta = this.getFabricante() + " " +
            this.getCategoria() + " " +
            this.getNombre() + " " +
            this.getPrecio() + " " +
            this.getExistencia();
        return respuesta;
    };
    return Inventariable;
}(Articulo));
//Lógica del formulario
var catalogo = [];
function guardar() {
    var fabricante = document.getElementById("frm-reg-fabricante").value.toString();
    var categoria = document.getElementById("frm-reg-categoria").value.toString();
    var nombre = document.getElementById("frm-reg-nombre").value.toString();
    var precio = 12;
    var nuevo_registro = new Inventariable(10, fabricante, categoria, nombre, precio);
    catalogo.push(nuevo_registro.desplegar());
    var list = "";
    for (var i = 0; i < catalogo.length; i++) {
        list = list + "<li>" + catalogo[i] + "</li>";
    }
    var vistacatalogo = document.getElementById("catalogo");
    vistacatalogo.innerHTML = list;
}
