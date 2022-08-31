// let opcion;
// const clientes = [];

// class tienda{
//     constructor(nombre, producto, precioProducto){
//         this.nombre = nombre;
//         this.producto = producto;
//         this.precioProducto = precioProducto;
//     }

//     calcularCuota(cantidadCuotas){
//         let precioCuotas = this.precioProducto / cantidadCuotas;
        
//         return precioCuotas;
//     }
// }

// clientes.push(new tienda("Carlos", "Laptop", 10000));
// clientes.push(new tienda("Esteban", "Auricular", 5000));
// clientes.push(new tienda("Natalia", "Cargador", 1000));
// clientes.push(new tienda("Fernando", "Celular", 30000));
// clientes.push(new tienda("Lucas", "Monitor", 12000));
// clientes.push(new tienda("Ludmila", "Auricular", 4000));
// clientes.push(new tienda("Julian", "Teclado", 6500));
// clientes.push(new tienda("Martina", "Celular", 24000));
// clientes.push(new tienda("Cristian", "Mouse", 2500));
// clientes.push(new tienda("Tomas", "Disco Solido", 8000));

// do{
//     opcion = parseInt(prompt("Elija una opcion: \n1-Sacar la cantidad de cuotas. \n 2-Personas que compraron \n 3-Ver si existe el producto (Muestra por consola) \n 4-Precio mas IVA \n 5-Salir."));

//     switch(opcion){
//         case 1:
//             for(const tienda of clientes){
//                 let cuotas = parseInt(prompt("En cuatas cuotas quiere sacar cada producto (Maximo 12):"));
                
//                 if(cuotas > 0 && cuotas <= 12){
//                     console.log(tienda.nombre + "\nValor de cuota: " + tienda.calcularCuota(cuotas));
//                 }else{
//                     alert("ERROR, Ingrese una cantidad de cuotas entre 1 y 12");
//                 }
//             }
//         break;

//         case 2:
//             const resultadoBuscador = clientes.map((el) => el.nombre);

//             alert(resultadoBuscador);
//         break;

//         case 3:
//             const resultadoExiste = clientes.find((el) => el.producto === "Celular");

//             if(resultadoExiste != undefined){
//                 alert("El producto si existe y es:" + "\n" + "NOMBRE: " + resultadoExiste.nombre + "\n" + "PRODUCTO: " + resultadoExiste.producto + "\n" + "PRECIO: " + resultadoExiste.precioProducto);
//             }else{
//                 alert("El producto no existe");
//             }
            
//         break;

//         case 4:
//             const precioConIva = clientes.map((el) => {
//                 return{
//                     precioProducto: el.precioProducto + ((el.precioProducto * 21) / 100),
//                 }
//             });

//             console.table(precioConIva);
//         break;
//     }

// }while(opcion != 5);










// const laptops = [{id: 1,  marca: "Apple", tituloProducto: "Macbook Pro 16p 512 GB - Gris Espacial", precio: 410000}, 
//                 {id: 2,  marca: "Apple", tituloProducto: "Macbook Pro 13p 256 GB - Plateado", precio: 320000},
//                 {id: 3,  marca: "Dell", tituloProducto: "Laptop Dell Inspiron 3505 15p 256 GB - 12 GB RAM", precio: 184000},
//                 {id: 4,  marca: "HP", tituloProducto: "Laptop Dell Inspiron 3515 15p 256 GB - 8 GB RAM", precio: 151000}];

// const celulares = [{id: 1,  marca: "Samsung", tituloProducto: "Samsung Galaxy A10", precio: 70000}, 
//                 {id: 2,  marca: "Apple", tituloProducto: "Iphone 13 Pro Max", precio: 250000},
//                 {id: 3,  marca: "Xiaomi", tituloProducto: "Xiaomi Redmi 11", precio: 50000},
//                 {id: 4,  marca: "Apple", tituloProducto: "Iphone 12 Pro", precio: 220000}];

// const monitores = [{id: 1,  marca: "Samsung", tituloProducto: "Monitor Gamer Samsung F24T35 LED 24", precio: 48000}, 
//                 {id: 2,  marca: "LG", tituloProducto: "Monitor Gamer LG UltraWide 29WP500 LCD 29", precio: 62000},
//                 {id: 3,  marca: "Samsung", tituloProducto: "Monitor Gamer Curvo Samsung Odyssey G5", precio: 120000},
//                 {id: 4,  marca: "Benq", tituloProducto: "Monitor Benq GW2480 LED 24", precio: 42000}];

// const memoriaRam = [{id: 1,  marca: "Geil", tituloProducto: "Memoria Geil DDR4 16 GB 3000 MHz", precio: 13000}, 
//                 {id: 2,  marca: "Adata", tituloProducto: "Memoria Adata DDR4 4GB 2666 MHz", precio: 14000},
//                 {id: 3,  marca: "Adata", tituloProducto: "Memoria Adata DDR4 8GB 2666 MHz", precio: 13500},
//                 {id: 4,  marca: "Patriot", tituloProducto: "Memoria Patriot Viper DDR4 8GB 3200 MHz", precio: 14300}];

// const consolas = [{id: 1,  marca: "Sony", tituloProducto: "Sony Playstation 5 825GB Standard", precio: 290000}, 
//                 {id: 2,  marca: "Sony", tituloProducto: "Sony Playstation 5 825GB Edicion Digital", precio: 310000},
//                 {id: 3,  marca: "Microsoft", tituloProducto: "Xbox Series S 512GB Standard", precio: 180000},
//                 {id: 4,  marca: "Microsoft", tituloProducto: "Xbox Series X 1TB Standard", precio: 220000}];

// const placasDeVideos = [{id: 1,  marca: "MSI", tituloProducto: "Placa de Video Nvidia MSI Ventus GeForce RTX 30 Series", precio: 133000}, 
//                 {id: 2,  marca: "Evga", tituloProducto: "Placa de Video Nvidia Evga SC Gaming GeForce GTX 16 Series", precio: 90000},
//                 {id: 3,  marca: "Asus", tituloProducto: "Placa de Video Nvidia ASUS TUF Gaming GeForce RTX 3060", precio: 110000},
//                 {id: 4,  marca: "Gigabyte", tituloProducto: "Placa de video Nvidia Gigabyte GeForce GTX 16 Series", precio: 80000}];



// let cardProductos = document.getElementById("mainGeneral__cards");
// cardProductos.className = "centrarCards";

// for(const laptop of laptops){
//     let cardProductoIndividual = document.createElement("div");
//     cardProductoIndividual.className = "card col-md-3";
    
//     cardProductoIndividual.innerHTML = `
//         <div class="card-body">
//             <img src="/images/Macbook.png" class="card-img-top" alt="Macbook">
//             <div class="card-body__titulos">
//                 <h5 class="card-title card-body__titulos--tituloUno">${laptop.tituloProducto}</h4>
//                 <h5 class="card-title card-body__titulos--tituloDos">${laptop.marca}</h5>
//                 <p class="card-text">${laptop.precio}$</p>
//             </div>
            
//             <div class="botonItem">
//                 <button type="button" class="btn btn-dark">Comprar</button>
//             </div>
//         </div>
//     `;

//     cardProductos.append(cardProductoIndividual);
// }

// for(const celular of celulares){
//     let cardProductoIndividual = document.createElement("div");
//     cardProductoIndividual.className = "card col-md-3";
    
//     cardProductoIndividual.innerHTML = `
//         <div class="card-body">
//             <img src="/images/Macbook.png" class="card-img-top" alt="Macbook">
//             <div class="card-body__titulos">
//                 <h5 class="card-title card-body__titulos--tituloUno">${celular.tituloProducto}</h4>
//                 <h5 class="card-title card-body__titulos--tituloDos">${celular.marca}</h5>
//                 <p class="card-text">${celular.precio}$</p>
//             </div>
            
//             <div class="botonItem">
//                 <button type="button" class="btn btn-dark">Comprar</button>
//             </div>
//         </div>
//     `;

//     cardProductos.append(cardProductoIndividual);
// }

// for(const monitor of monitores){
//     let cardProductoIndividual = document.createElement("div");
//     cardProductoIndividual.className = "card col-md-3";
    
//     cardProductoIndividual.innerHTML = `
//         <div class="card-body">
//             <img src="/images/Macbook.png" class="card-img-top" alt="Macbook">
//             <div class="card-body__titulos">
//                 <h5 class="card-title card-body__titulos--tituloUno">${monitor.tituloProducto}</h4>
//                 <h5 class="card-title card-body__titulos--tituloDos">${monitor.marca}</h5>
//                 <p class="card-text">${monitor.precio}$</p>
//             </div>

//             <div class="botonItem">
//                 <button type="button" class="btn btn-dark">Comprar</button>
//             </div>
//         </div>
//     `;

//     cardProductos.append(cardProductoIndividual);
// }

// for(const memoriaRamIndividual of memoriaRam){
//     let cardProductoIndividual = document.createElement("div");
//     cardProductoIndividual.className = "card col-md-3";
    
//     cardProductoIndividual.innerHTML = `
//         <div class="card-body">
//             <img src="/images/Macbook.png" class="card-img-top" alt="Macbook">
//             <div class="card-body__titulos">
//                 <h5 class="card-title card-body__titulos--tituloUno">${memoriaRamIndividual.tituloProducto}</h4>
//                 <h5 class="card-title card-body__titulos--tituloDos">${memoriaRamIndividual.marca}</h5>
//                 <p class="card-text">${memoriaRamIndividual.precio}$</p>
//             </div>

//             <div class="botonItem">
//                 <button type="button" class="btn btn-dark">Comprar</button>
//             </div>
//         </div>
//     `;

//     cardProductos.append(cardProductoIndividual);
// }

// for(const consola of consolas){
//     let cardProductoIndividual = document.createElement("div");
//     cardProductoIndividual.className = "card col-md-3";
    
//     cardProductoIndividual.innerHTML = `
//         <div class="card-body">
//             <img src="/images/Macbook.png" class="card-img-top" alt="Macbook">
//             <div class="card-body__titulos">
//                 <h5 class="card-title card-body__titulos--tituloUno">${consola.tituloProducto}</h4>
//                 <h5 class="card-title card-body__titulos--tituloDos">${consola.marca}</h5>
//                 <p class="card-text">${consola.precio}$</p>
//             </div>

//             <div class="botonItem">
//                 <button type="button" class="btn btn-dark">Comprar</button>
//             </div>
//         </div>
//     `;

//     cardProductos.append(cardProductoIndividual);
// }

// for(const placaDeVideo of placasDeVideos){
//     let cardProductoIndividual = document.createElement("div");
//     cardProductoIndividual.className = "card col-md-3";
    
//     cardProductoIndividual.innerHTML = `
//         <div class="card-body">
//             <img src="/images/Macbook.png" class="card-img-top" alt="Macbook">
//             <div class="card-body__titulos">
//                 <h5 class="card-title card-body__titulos--tituloUno">${placaDeVideo.tituloProducto}</h4>
//                 <h5 class="card-title card-body__titulos--tituloDos">${placaDeVideo.marca}</h5>
//                 <p class="card-text">${placaDeVideo.precio}$</p>
//             </div>

//             <div class="botonItem">
//                 <button type="button" class="btn btn-dark">Comprar</button>
//             </div>
//         </div>
//     `;

//     cardProductos.append(cardProductoIndividual);
// }

const clientes = [];

class tienda{
    constructor(id, imagenProducto, tipoProducto, marca, tituloProducto, precioProducto){
        this.id = id;
        this.imagenProducto = imagenProducto;
        this.tipoProducto = tipoProducto;
        this.marca = marca;
        this.tituloProducto = tituloProducto;
        this.precioProducto = precioProducto;
    }

    calcularCuota(cantidadCuotas){
        let precioCuotas = this.precioProducto / cantidadCuotas;
        
        return precioCuotas;
    }
}

clientes.push(new tienda(1, "/Images/MacbookPro.jpg", "Laptop", "Apple", "Macbook Pro 16p 512 GB - Gris Espacial", 410000));
clientes.push(new tienda(2, "/Images/MacbookAir.jpg", "Laptop", "Apple", "Macbook Air 13p 256 GB - Plateado", 320000));
clientes.push(new tienda(3, "/Images/Dell-Inspiron.jpg", "Laptop", "Dell", "Laptop Dell Inspiron 3505 15p 256 GB - 12 GB RAM", 184000));
clientes.push(new tienda(4, "/Images/Notebook-HP.jpg", "Laptop", "HP", "Laptop HP 15-ef2126wn 256 GB - 8 GB RAM", 151000));

clientes.push(new tienda(1, "/Images/SamsungGalaxyA10.jpg", "Celular", "Samsung", "Samsung Galaxy A10", 70000));
clientes.push(new tienda(2, "/Images/Iphone13ProMax.jpg", "Celular", "Apple", "Iphone 13 Pro Max", 250000));
clientes.push(new tienda(3, "/Images/XiaomiRedmiNote11.jpg", "Celular", "Xiaomi", "Xiaomi Redmi Note 11", 50000));
clientes.push(new tienda(4, "/Images/Iphone12Mini.jpg", "Celular", "Apple", "Iphone 12 Mini", 220000));

clientes.push(new tienda(1, "/Images/MonitorSamsungComun.jpg", "Monitor", "Samsung", "Monitor Gamer Samsung F24T35 LED 24", 48000));
clientes.push(new tienda(2, "/Images/MonitorLG.jpg", "Monitor", "LG", "Monitor Gamer LG UltraWide 29WP500 LCD 29", 62000));
clientes.push(new tienda(3, "/Images/MonitorSamsungCurvo.jpg", "Monitor", "Samsung", "Monitor Gamer Curvo Samsung Odyssey G5", 120000));
clientes.push(new tienda(4,"/Images/MonitorBenq.jpg", "Monitor", "Benq", "Monitor Benq GW2480 LED 24", 42000));

clientes.push(new tienda(1, "/Images/MemoriaRamGeil.jpg", "Memoria Ram", "Geil", "Memoria Geil DDR4 16 GB 3000 MHz", 13000));
clientes.push(new tienda(2, "/Images/MemoriaRamAdata4gb.jpg", "Memoria Ram", "Adata", "Memoria Adata DDR4 4GB 2666 MHz", 14000));
clientes.push(new tienda(3, "/Images/MemoriaRamAdata8gb.jpg", "Memoria Ram", "Adata", "Memoria Adata DDR4 8GB 2666 MHz", 13500));
clientes.push(new tienda(4, "/Images/MemoriaPatriot.jpg", "Memoria Ram", "Patriot", "Memoria Patriot Viper DDR4 8GB 3200 MHz", 14300));

clientes.push(new tienda(1, "/Images/Playstation5.jpg", "Consola", "Sony", "Sony Playstation 5 825GB Estandar", 290000));
clientes.push(new tienda(2, "/Images/Playstation5.jpg", "Consola", "Sony", "Sony Playstation 5 825GB Edicion Digital", 310000));
clientes.push(new tienda(2, "/Images/Playstation4.jpg", "Consola", "Sony", "Sony Playstation 4 500GB", 210000));
clientes.push(new tienda(3, "/Images/XboxSeriesS.jpg", "Consola", "Microsoft", "Xbox Series S 512GB Standard", 180000));
clientes.push(new tienda(4, "/Images/XboxSeriesX.jpg", "Consola", "Microsoft", "Xbox Series X 1TB Standard", 220000));

clientes.push(new tienda(4, "/Images/PlacaDeVideoMSI.jpg", "Placas de video", "MSI", "Placa de Video Nvidia MSI Ventus GeForce RTX 30 Series", 133000));
clientes.push(new tienda(4, "/Images/PlacaDeVideoEvga.jpg", "Placas de video", "Evga", "Placa de Video Nvidia Evga SC Gaming GeForce GTX 16 Series", 90000));
clientes.push(new tienda(4, "/Images/PlacaDeVideoAsus.jpg", "Placas de video", "Asus", "Placa de Video Nvidia ASUS TUF Gaming GeForce RTX 3060", 110000));
clientes.push(new tienda(4, "/Images/PlacaDeVideoGigabyte.jpg", "Placas de video", "Gigabyte", "Placa de Video Nvidia Gigabyte GeForce GTX 16 Series", 80000));

let cardProductos = document.getElementById("mainGeneral__cards");
cardProductos.className = "centrarCards";

for(const producto of clientes){
    let cardProductoIndividual = document.createElement("div");
    cardProductoIndividual.className = "card col-lg-3 col-md-5";
    
    cardProductoIndividual.innerHTML = `
        <div class="card-body">
            
            <img src="${producto.imagenProducto}" class="card-img-top" alt="${producto.tituloProducto}">
            
            <div class="card-body__titulos">
                <h5 class="card-title card-body__titulos--tituloUno">${producto.tituloProducto}</h4>
                <h5 class="card-title card-body__titulos--tituloDos">${producto.marca}</h5>
                <p class="card-text">${producto.precioProducto}$</p>
            </div>
            
            <div class="botonItem">
                <button type="button" class="btn btn-dark">Comprar</button>
            </div>
        </div>
    `;

    cardProductos.append(cardProductoIndividual);
}








