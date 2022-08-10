let opcion;
const clientes = [];

class tienda{
    constructor(nombre, producto, precioProducto){
        this.nombre = nombre;
        this.producto = producto;
        this.precioProducto = precioProducto;
    }

    calcularCuota(cantidadCuotas){
        let precioCuotas = this.precioProducto / cantidadCuotas;
        
        return precioCuotas;
    }
}

clientes.push(new tienda("Carlos", "Laptop", 10000));
clientes.push(new tienda("Esteban", "Auricular", 5000));
clientes.push(new tienda("Natalia", "Cargador", 1000));
clientes.push(new tienda("Fernando", "Celular", 30000));
clientes.push(new tienda("Lucas", "Monitor", 12000));
clientes.push(new tienda("Ludmila", "Auricular", 4000));
clientes.push(new tienda("Julian", "Teclado", 6500));
clientes.push(new tienda("Martina", "Celular", 24000));
clientes.push(new tienda("Cristian", "Mouse", 2500));
clientes.push(new tienda("Tomas", "Disco Solido", 8000));

while(opcion != 3){
    opcion = parseInt(prompt("Elija una opcion: \n1-Sacar la cantidad de cuotas. \n 2-Personas que compraron \n 3- Salir."));

    switch(opcion){
        case 1:
            for(const tienda of clientes){
                let cuotas = parseInt(prompt("En cuatas cuotas quiere sacar cada producto (Maximo 12):"));

                if(cuotas > 0 && cuotas <= 12){
                    alert(tienda.nombre + "\nValor de cuota: " + tienda.calcularCuota(cuotas));
                }else{
                    alert("ERROR, Ingrese una cantidad de cuotas entre 1 y 12");
                }
            }
        break;

        case 2:
            const resultadoBuscador = clientes.map((el) => el.nombre);

            alert(resultadoBuscador);
        break;
    }
}




