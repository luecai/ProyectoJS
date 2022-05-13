const contenedor = document.getElementById("productos");


// Creo las Class de Juegos
class ProductoJuegos{
  constructor (id, nombre, precio, tipo, stock, imagen){
  this.id = id;
  this.nombre = nombre;
  this.precio = parseFloat(precio);
  this.tipo = tipo;
  this.stock = parseFloat(stock);
  this.imagen = imagen;
  }

}




// Creo las Array

const PRODUCTOS = [];


// Creo las funciones para pushear 

function nuevoProductoJuegos(id, nombre, precio, tipo, stock, imagen) {
  PRODUCTOS.push(new ProductoJuegos(id, nombre, precio, tipo, stock, imagen));
}

nuevoProductoJuegos(1, "CS GO ", 600, "Shooter", 10, "https://estnn.com/wp-content/uploads/2018/08/Counter-Strike-GO-1200x720.png");
nuevoProductoJuegos(2, "FIFA", 1500, "Deporte", 5, "https://image.api.playstation.com/vulcan/img/rnd/202111/0822/zDXM9K2cQiq0vKTDwF0TkAor.png");
nuevoProductoJuegos(3, "F1 22", 1200, "Carrera", 6, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIp2Pt-9FzA2BxyF9eTeAD66B0uLb4puBV5AP8In5wensGjIwMJOUJ8cTFMeV4ufn8H4I&usqp=CAU");
nuevoProductoJuegos(4, "GTA V", 1200, "Mundo Abierto", 3, "https://static.wikia.nocookie.net/esgta/images/c/c1/GTA_V_logo.png/revision/latest?cb=20130906185925");




const getCarta = (item) => {
  return (`
  <div class="card" style="width: 18rem;">
    <img src="${item.imagen}" class="card-img-top" alt=" ${item.nombre}">
    <div class="card-body">
      <h5 class="card-title">${item.nombre}</h5>
      <p class="card-text">Precio: ${item.precio}</p>
      <p class="card-text">Stock: ${item.stock}</p>
      <a href="#" onclick=agregarCarrito(${item.id}) class="btn btn-primary">AGREGAR AL CARRITO </a>
    </div>
  </div>
  `)
};


const cargarProductos = (datos, nodo) => {
  let acumulador = "";
  datos.forEach((el) => {
    acumulador += getCarta(el);
  })
  nodo.innerHTML = acumulador;
};

const agregarCarrito = (id) => {
  const seleccion = PRODUCTOS.find(item => item.id === id);
  alert("Agregaste " + seleccion.nombre)

}

cargarProductos (PRODUCTOS, contenedor);
