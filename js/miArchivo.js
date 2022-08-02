class tienda{
    constructor(nombre, precioProducto){
        this.nombre = nombre;
        this.precioProducto = precioProducto;
    }

    calcularCuota(cantidadCuotas){
        let precioCuotas = this.precioProducto / cantidadCuotas;
        
        return precioCuotas;
    }
}

const cliente_uno = new tienda("Carlos", 10000);

let cuotas = parseInt(prompt("En cuatas cuotas quiere sacar el producto:"));

alert("Cuota de: " + cliente_uno.calcularCuota(cuotas));
