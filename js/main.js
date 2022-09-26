/* STOCK DE PRODUCTOS  */
const stockProductos = [
    {id: 1, nombre: "Macbook Pro 16p 512 GB - Gris Espacial", tipo: "Laptop", cantidad: 1, precio: 410000, marca: "Apple", img: "/Images/MacbookPro.jpg"},
    {id: 2, nombre: "Macbook Air 13p 256 GB - Plateado", tipo: "Laptop", cantidad: 1, precio: 320000, marca: "Apple", img: "/Images/MacbookAir.jpg"},
    {id: 3, nombre: "Laptop Dell Inspiron 3505 15p 256 GB - 12 GB RAM", tipo: "Laptop", cantidad: 1, precio: 184000, marca: "Dell", img: "/Images/Dell-Inspiron.jpg"},
    {id: 4, nombre: "Laptop HP 15-ef2126wn 256 GB - 8 GB RAM", tipo: "Laptop", cantidad: 1, precio: 151000, marca: "HP", img: "/Images/Notebook-HP.jpg"},

    {id: 5, nombre: "Samsung Galaxy A10", tipo: "Celular", cantidad: 1, precio: 70000, marca: "Samsung", img: "/Images/SamsungGalaxyA10.jpg"},
    {id: 6, nombre: "Iphone 13 Pro Max", tipo: "Celular", cantidad: 1, precio: 250000, marca: "Apple", img: "/Images/Iphone13ProMax.jpg"},
    {id: 7, nombre: "Xiaomi Redmi Note 11", tipo: "Celular", cantidad: 1, precio: 50000, marca: "Xiaomi", img: "/Images/XiaomiRedmiNote11.jpg"},
    {id: 8, nombre: "Iphone 12 Mini", tipo: "Celular", cantidad: 1, precio: 220000, marca: "Apple", img: "/Images/Iphone12Mini.jpg"},

    {id: 9, nombre: "Monitor Gamer Samsung F24T35 LED 24", tipo: "Monitor", cantidad: 1, precio: 48000, marca: "Samsung", img: "/Images/MonitorSamsungComun.jpg"},
    {id: 10, nombre: "Monitor Gamer LG UltraWide 29WP500 LCD 29", tipo: "Monitor", cantidad: 1, precio: 62000, marca: "LG", img: "/Images/MonitorLG.jpg"},
    {id: 11, nombre: "Monitor Gamer Curvo Samsung Odyssey G5", tipo: "Monitor", cantidad: 1, precio: 120000, marca: "Samsung", img: "/Images/MonitorSamsungCurvo.jpg"},
    {id: 12, nombre: "Monitor Benq GW2480 LED 24", tipo: "Monitor", cantidad: 1, precio: 42000, marca: "Benq", img: "/Images/MonitorBenq.jpg"},

    {id: 13, nombre: "Memoria Geil DDR4 16 GB 3000 MHz", tipo: "Memoria Ram", cantidad: 1, precio: 13000, marca: "Geil", img: "/Images/MemoriaRamGeil.jpg"},
    {id: 14, nombre: "Memoria Adata DDR4 4GB 2666 MHz", tipo: "Memoria Ram", cantidad: 1, precio: 14000, marca: "Adata", img: "/Images/MemoriaRamAdata4gb.jpg"},
    {id: 15, nombre: "Memoria Adata DDR4 8GB 2666 MHz", tipo: "Memoria Ram", cantidad: 1, precio: 13500, marca: "Adata", img: "/Images/MemoriaRamAdata8gb.jpg"},
    {id: 16, nombre: "Memoria Patriot Viper DDR4 8GB 3200 MHz", tipo: "Memoria Ram", cantidad: 1, precio: 14300, marca: "Patriot", img: "/Images/MemoriaPatriot.jpg"},

    {id: 17, nombre: "Sony Playstation 5 825GB Edicion Digital", tipo: "Consola", cantidad: 1, precio: 310000, marca: "Sony", img: "/Images/Playstation5.jpg"},
    {id: 18, nombre: "Sony Playstation 4 500GB", tipo: "Consola", cantidad: 1, precio: 210000, marca: "Sony", img: "/Images/Playstation4.jpg"},
    {id: 19, nombre: "Xbox Series S 512GB Edicion Estandar", tipo: "Consola", cantidad: 1, precio: 180000, marca: "Microsoft", img: "/Images/XboxSeriesS.jpg"},
    {id: 20, nombre: "Xbox Series X 1TB Edicion Estandar", tipo: "Consola", cantidad: 1, precio: 220000, marca: "Microsoft", img: "/Images/XboxSeriesX.jpg"},

    {id: 21, nombre: "Placa de Video Nvidia MSI Ventus GeForce RTX 30 Series", tipo: "Placas de video", cantidad: 1, precio: 133000, marca: "MSI", img: "/Images/PlacaDeVideoMSI.jpg"},
    {id: 22, nombre: "Placa de Video Nvidia Evga SC Gaming GeForce GTX 16 Series", tipo: "Placas de video", cantidad: 1, precio: 90000, marca: "Evga", img: "/Images/PlacaDeVideoEvga.jpg"},
    {id: 23, nombre: "Placa de Video Nvidia ASUS TUF Gaming GeForce RTX 3060", tipo: "Placas de video", cantidad: 1, precio: 110000, marca: "Asus", img: "/Images/PlacaDeVideoAsus.jpg"},
    {id: 24, nombre: "Placa de Video Nvidia Gigabyte GeForce GTX 16 Series", tipo: "Placas de video", cantidad: 1, precio: 80000, marca: "Gigabyte", img: "/Images/PlacaDeVideoGigabyte.jpg"},
];


/* TEMA */
let contadorCarrito = document.getElementById("contadorCarrito");
let modoTema = localStorage.getItem("modo");
let botonTema = document.getElementById("modoTema");
let temaPrincipal = document.getElementById("mainPrincipal");
let navColor = document.getElementById("navegacionPrincipal");
let iconoModo = document.getElementById("iconoTema");
if(modoTema != null){
    temaPrincipal.className = "row " + modoTema;
    navColor.className = "navbar navbar-expand-lg row " + modoTema;
    
    if(modoTema == "light"){
        iconoModo.className = "bi bi-moon-fill " + modoTema;
        contadorCarrito.className = "contadorCarrito__light"; 
    }else if(modoTema == "dark"){
        iconoModo.className = "bi bi-brightness-high " + modoTema;
        contadorCarrito.className = "contadorCarrito__dark";
    }
};
botonTema.onclick = () =>{
    if(modoTema == "light"){
        temaPrincipal.className = "row dark";
        navColor.className = "navbar navbar-expand-lg row dark";
        iconoModo.className = "bi bi-brightness-high dark";
        contadorCarrito.className = "contadorCarrito__dark";
        modoTema = "dark";
    }else{
        temaPrincipal.className = "row light";
        navColor.className = "navbar navbar-expand-lg row light";
        iconoModo.className = "bi bi-moon-fill light";
        contadorCarrito.className = "contadorCarrito__light";
        modoTema = "light";
    }

    localStorage.setItem("modo", modoTema);
};


/* CARRITO DE COMPRAS */
const contenedorProductos = document.getElementById("contenedor__cards");
const contenedorCarrito = document.getElementById("carrito-contenedor");
const botonVaciar = document.getElementById("vaciar-carrito");
const precio__total = document.getElementById("precioTotal");
let precio__totalDos = document.getElementById("precioTotalDos");

let cantidad__CuotaUno = document.getElementById("cantidadCuotaUno");
let cantidad__CuotaDos = document.getElementById("cantidadCuotaDos");
let cantidad__CuotaTres = document.getElementById("cantidadCuotaTres");
let cantidad__CuotaCuatro = document.getElementById("cantidadCuotaCuatro");

let carrito = [];
document.addEventListener('DOMContentLoaded', () =>{
    if(localStorage.getItem("carrito")){
        carrito = JSON.parse(localStorage.getItem("carrito"));
        actualizarCarrito();
    }
});
botonVaciar.onclick = () =>{
    if(carrito.length > 0){
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success m-3',
              cancelButton: 'btn btn-danger m-3'
            },
            buttonsStyling: false
        })
          
        swalWithBootstrapButtons.fire({
            title: 'Estas Seguro?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'No, cancelar!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                carrito.length = 0;
                actualizarCarrito();
                localStorage.clear();
    
                swalWithBootstrapButtons.fire(
                    'Vaciado!',
                    'Todos los productos han sido eliminados del carrito.',
                    'success'
                )
            }else if(result.dismiss === Swal.DismissReason.cancel){
                swalWithBootstrapButtons.fire(
                    'Cancelado',
                    'El carrito continua con los productos',
                    'error'
                )
            }
        })
    }else{
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'El carrito ya esta vacio!',
            showConfirmButton: false,
            timer: 1500
          })
    }
    
};


/*CARDS*/
stockProductos.forEach((producto) =>{
    const divProducto = document.createElement("div");
    divProducto.className = "cards col-xxl-3 col-lg-4 col-md-6";
    divProducto.classList.add("producto");
    divProducto.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">

            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text card-text--marca">${producto.marca}</p>
                <p class="card-text card-body--precio">$${producto.precio}</p>
                <button type="button" id="agregar${producto.id}" class="btn btn-dark">Agregar <i class="bi bi-cart"></i></button>
            </div>
        </div>
    `;

    contenedorProductos.appendChild(divProducto);

    const botonCard = document.getElementById(`agregar${producto.id}`);
    botonCard.onclick = () =>{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto agregado al carrito',
            showConfirmButton: false,
            timer: 1500
        })
        agregarAlCarrito(producto.id);
    };

});

/*FUNCIONES CARRITO*/
const agregarAlCarrito = (productoId) =>{
    const productoExistencia = carrito.some(prod => prod.id === productoId);

    if(productoExistencia){
        const existenciaProd = carrito.map(prod =>{
            if(prod.id === productoId){
                prod.cantidad++;
                prod.precio += prod.precio;
            }
        })
    }else{
        const item = stockProductos.find((prod) => prod.id === productoId);
        carrito.push(item);
        console.log(carrito);
    }

    actualizarCarrito();
    
}; 
const eliminarDelCarrito = (productoId) =>{
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success m-3',
          cancelButton: 'btn btn-danger m-3'
        },
        buttonsStyling: false
    })
      
    swalWithBootstrapButtons.fire({
        title: 'Estas Seguro?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            const item = carrito.find((prod) => prod.id === productoId);
            const indice = carrito.indexOf(item);
            carrito.splice(indice, 1);
            localStorage.removeItem("carrito");
            actualizarCarrito();

            swalWithBootstrapButtons.fire(
                'Eliminado!',
                'El producto a sido eliminado del carrito.',
                'success'
            )
        }else if(result.dismiss === Swal.DismissReason.cancel){
            swalWithBootstrapButtons.fire(
                'Cancelado',
                'El producto continua en el carrito',
                'error'
            )
        }
    })
};
const actualizarCarrito = () =>{
    contenedorCarrito.innerHTML = "";

    carrito.forEach((prod) =>{
        const divProducto = document.createElement("div");
        divProducto.className = ("productoEnCarrito");
        divProducto.innerHTML = `
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-4 cardCarrito__imagen">
                        <img src="${prod.img}" class="img-fluid rounded-start" alt="${prod.nombre}">
                    </div>
                    <div class="col-8">
                        <div class="card-body">
                            <h5 class="card-title">${prod.nombre}</h5>
                            <p>Cantidad: <span id="cantidadProducto">${prod.cantidad}</span></p>
                            <p>Precio: $${prod.precio}</p>
                            <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="bi bi-trash"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        contenedorCarrito.appendChild(divProducto);

        localStorage.setItem("carrito", JSON.stringify(carrito));
    });

    contadorCarrito.innerText = carrito.length;
    precio__total.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0);
    precio__totalDos.innerText = carrito.reduce((accDos, prodDos) => accDos + prodDos.precio, 0);
    // localStorage.setItem("precioFinalTotal", JSON.parse(precio__totalDos));
};








