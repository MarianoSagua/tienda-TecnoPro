const productos = [];
const carritoCompras = [];

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

productos.push(new tienda(1, "/Images/MacbookPro.jpg", "Laptop", "Apple", "Macbook Pro 16p 512 GB - Gris Espacial", 410000));
productos.push(new tienda(2, "/Images/MacbookAir.jpg", "Laptop", "Apple", "Macbook Air 13p 256 GB - Plateado", 320000));
productos.push(new tienda(3, "/Images/Dell-Inspiron.jpg", "Laptop", "Dell", "Laptop Dell Inspiron 3505 15p 256 GB - 12 GB RAM", 184000));
productos.push(new tienda(4, "/Images/Notebook-HP.jpg", "Laptop", "HP", "Laptop HP 15-ef2126wn 256 GB - 8 GB RAM", 151000));

productos.push(new tienda(5, "/Images/SamsungGalaxyA10.jpg", "Celular", "Samsung", "Samsung Galaxy A10", 70000));
productos.push(new tienda(6, "/Images/Iphone13ProMax.jpg", "Celular", "Apple", "Iphone 13 Pro Max", 250000));
productos.push(new tienda(7, "/Images/XiaomiRedmiNote11.jpg", "Celular", "Xiaomi", "Xiaomi Redmi Note 11", 50000));
productos.push(new tienda(8, "/Images/Iphone12Mini.jpg", "Celular", "Apple", "Iphone 12 Mini", 220000));

productos.push(new tienda(9, "/Images/MonitorSamsungComun.jpg", "Monitor", "Samsung", "Monitor Gamer Samsung F24T35 LED 24", 48000));
productos.push(new tienda(10, "/Images/MonitorLG.jpg", "Monitor", "LG", "Monitor Gamer LG UltraWide 29WP500 LCD 29", 62000));
productos.push(new tienda(11, "/Images/MonitorSamsungCurvo.jpg", "Monitor", "Samsung", "Monitor Gamer Curvo Samsung Odyssey G5", 120000));
productos.push(new tienda(12,"/Images/MonitorBenq.jpg", "Monitor", "Benq", "Monitor Benq GW2480 LED 24", 42000));

productos.push(new tienda(13, "/Images/MemoriaRamGeil.jpg", "Memoria Ram", "Geil", "Memoria Geil DDR4 16 GB 3000 MHz", 13000));
productos.push(new tienda(14, "/Images/MemoriaRamAdata4gb.jpg", "Memoria Ram", "Adata", "Memoria Adata DDR4 4GB 2666 MHz", 14000));
productos.push(new tienda(15, "/Images/MemoriaRamAdata8gb.jpg", "Memoria Ram", "Adata", "Memoria Adata DDR4 8GB 2666 MHz", 13500));
productos.push(new tienda(16, "/Images/MemoriaPatriot.jpg", "Memoria Ram", "Patriot", "Memoria Patriot Viper DDR4 8GB 3200 MHz", 14300));

productos.push(new tienda(17, "/Images/Playstation5.jpg", "Consola", "Sony", "Sony Playstation 5 825GB Estandar", 290000));
productos.push(new tienda(18, "/Images/Playstation5.jpg", "Consola", "Sony", "Sony Playstation 5 825GB Edicion Digital", 310000));
productos.push(new tienda(19, "/Images/Playstation4.jpg", "Consola", "Sony", "Sony Playstation 4 500GB", 210000));
productos.push(new tienda(20, "/Images/XboxSeriesS.jpg", "Consola", "Microsoft", "Xbox Series S 512GB Standard", 180000));
productos.push(new tienda(21, "/Images/XboxSeriesX.jpg", "Consola", "Microsoft", "Xbox Series X 1TB Standard", 220000));

productos.push(new tienda(22, "/Images/PlacaDeVideoMSI.jpg", "Placas de video", "MSI", "Placa de Video Nvidia MSI Ventus GeForce RTX 30 Series", 133000));
productos.push(new tienda(23, "/Images/PlacaDeVideoEvga.jpg", "Placas de video", "Evga", "Placa de Video Nvidia Evga SC Gaming GeForce GTX 16 Series", 90000));
productos.push(new tienda(24, "/Images/PlacaDeVideoAsus.jpg", "Placas de video", "Asus", "Placa de Video Nvidia ASUS TUF Gaming GeForce RTX 3060", 110000));
productos.push(new tienda(25, "/Images/PlacaDeVideoGigabyte.jpg", "Placas de video", "Gigabyte", "Placa de Video Nvidia Gigabyte GeForce GTX 16 Series", 80000));

let cardProductos = document.getElementById("mainGeneral__cards");
cardProductos.className = "centrarCards";

for(const producto of productos){
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
            
            <div class="boton">
                <button type="button" id="botonCard-${producto.id}" class="btn btn-dark boton__item">Comprar</button>
            </div>
        </div>
    `;

    cardProductos.append(cardProductoIndividual);

    let cardBotones = document.createElement("script");

    cardBotones.innerHTML = `
        let botonCard${producto.id} = document.getElementById("botonCard-${producto.id}");
        botonCard${producto.id}.onclick = () => {
            botonCard${producto.id}.innerText = "Agregado al carrito!!";
            carritoCompras.push(productos[${(producto.id - 1)}].tituloProducto);
        }; 
    `;

    cardProductoIndividual.append(cardBotones);
}

let botonCarritoCompras = document.getElementById("carritoCompra");
botonCarritoCompras.onclick = () => {
    let esJson = JSON.stringify(carritoCompras);
    // console.log(carritoCompras);
    alert(esJson);
    // localStorage.setItem("producto1", esJson);
};

let formulario = document.getElementById("formularioPrincipal");
let campoNombre = document.getElementById("campoNombre");
let campoEmail = document.getElementById("campoEmail");
let botonFormulario = document.getElementById("boton__formulario");

formulario.onsubmit = (ev) => {
    if((campoNombre.value =="") || (campoEmail.value =="")){
        ev.preventDefault();
        alert("Ingrese nombre y/o correo electronico primero!!");
        // botonFormulario.innerText = "Ingrese Nombre y/o Correo Electronico primero!!";
    }
};

// let modo = localStorage.getItem("modo");
// console.log(modo);
let modo = "light";

let botonTema = document.getElementById("modoTema");
let temaPrincipal = document.getElementById("mainPrincipal");
let navColor = document.getElementById("navegacionPrincipal");
let iconoModo = document.getElementById("iconoTema");
// let modoTemaCard = document.getElementsByClassName("card");

// if(modo != null){};

botonTema.onclick = () =>{
    if(modo == "light"){
        temaPrincipal.className = "row dark"; 
        // navColor.className = "navbar navbar-expand-lg navbar-dark bg-dark row";
        navColor.className = "navbar navbar-expand-lg row dark";
        iconoModo.className = "bi bi-brightness-high dark";
        // modoTemaCard.className = "card-dark col-lg-3 col-md-5";
        modo = "dark";
    }else{
        temaPrincipal.className = "row light"; 
        // navColor.className = "navbar navbar-expand-lg navbar-light bg-light row";
        navColor.className = "navbar navbar-expand-lg row light";
        iconoModo.className = "bi bi-moon-fill light";
        // modoTemaCard.className = "card col-lg-3 col-md-5";
        modo = "light";
    }

    // localStorage.setItem("modo", modo);
};








