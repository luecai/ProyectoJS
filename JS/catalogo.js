// Creo las CONST
const contenedor = document.getElementById("productos");
const tablaCarrito = document.getElementById("tablaCarrito");





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

const carrito = [];
const PRODUCTOS = [];


// Creo las funciones para pushear 

function nuevoProductoJuegos(id, nombre, precio, tipo, stock, imagen) {
  PRODUCTOS.push(new ProductoJuegos(id, nombre, precio, tipo, stock, imagen));
}

nuevoProductoJuegos(1, "CS GO ", 600, "Shooter", 10, "https://estnn.com/wp-content/uploads/2018/08/Counter-Strike-GO-1200x720.png");
nuevoProductoJuegos(2, "FIFA", 1500, "Deporte", 5, "https://image.api.playstation.com/vulcan/img/rnd/202111/0822/zDXM9K2cQiq0vKTDwF0TkAor.png");
nuevoProductoJuegos(3, "F1 22", 1200, "Carrera", 6, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIp2Pt-9FzA2BxyF9eTeAD66B0uLb4puBV5AP8In5wensGjIwMJOUJ8cTFMeV4ufn8H4I&usqp=CAU");
nuevoProductoJuegos(3, "F1 22", 1200, "Carrera", 6, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIp2Pt-9FzA2BxyF9eTeAD66B0uLb4puBV5AP8In5wensGjIwMJOUJ8cTFMeV4ufn8H4I&usqp=CAU");



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
  `
  )
};

const getRow = (item) => {
  return (        
  `
  <tr>
      <th scope="row">${item.id}</th>
      <td>${item.nombre}</td>
      <td>${item.cantidad}</td>
      <td>$${item.precio * item.cantidad} ($${item.precio})</td>
  </tr>
  `
  )
}


const cargarProductos = (datos, nodo, esTabla) => {
  let acumulador = "";
  datos.forEach((el) => {
    acumulador += esTabla ?  getRow(el) : getCarta(el);
  })
  nodo.innerHTML = acumulador;
};

const agregarCarrito = (id) => {
  const seleccion = PRODUCTOS.find(item => item.id === id);
  const busqueda = carrito.findIndex(el => el.id === id);

  if (busqueda === -1) {
   carrito.push({
     id: seleccion.id,
     nombre: seleccion.nombre,
     precio: seleccion.precio,
     cantidad: 1,
   })
  } else {
    carrito[busqueda].cantidad = carrito[busqueda].cantidad +1; 
  }
    cargarProductos(carrito, tablaCarrito, true);

}

cargarProductos (PRODUCTOS, contenedor, false);



const btn = document.getElementById("myBtn");



btn.addEventListener('click', () => {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'LISTO! Agregado al carrito.',
    showConfirmButton: true,
    timer: 1000
  })
});