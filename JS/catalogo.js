// Creo las CONST
const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');
const botonVaciar = document.getElementById('vaciar-carrito');
const contadorCarrito = document.getElementById('contadorCarrito');
const cantidad = document.getElementById('cantidad');
const precioTotal = document.getElementById('precioTotal');
const cantidadTotal = document.getElementById('cantidadTotal');
const botonComprar = document.getElementById('comprarTotal');

let carrito = [];

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('carrito')) {
      carrito = JSON.parse(localStorage.getItem('carrito'))
      actualizarCarrito()
  }
});

botonVaciar.addEventListener('click', () => {
  Swal.fire({
      title: 'Estas seguro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'SI'
  }).then((result) => {
      if (result.isConfirmed) {
          Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
          )
      }
  }),

      carrito.length = 0
  actualizarCarrito()
});

botonComprar.addEventListener(`click`, () => {
  Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Compra realizada ',
      showConfirmButton: false,
      timer: 1500
  })
  carrito = []
  eliminarDelCarrito()

})

// ASYNC - AWAIT - FETCH
async function getGames() {
  const response = await fetch("../JSON/game.json")
  const data = await response.json()
  console.log(data);

  data.forEach((producto) => {
      const div = document.createElement('div')
      div.classList.add('producto')
      div.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${producto.imagen}" class="card-img-top" alt=" ${producto.nombre}" style="height: 16rem;">
    <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">Precio: ${producto.precio}</p>
    <p class="card-text">Stock: ${producto.stock}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    </div>
    </div>
    
    `
      contenedorProductos.appendChild(div)

      const boton = document.getElementById(`agregar${producto.id}`)

      boton.addEventListener('click', () => {
          agregarAlCarrito(producto.id)
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'LISTO! Agregado al carrito.',
            showConfirmButton: true,
            timer: 700
          })
      })
  })
};

getGames()

const agregarAlCarrito = (prodId) => {
  const existe = carrito.some(prod => prod.id === prodId)
  if (existe) {
      const prod = carrito.map(prod => {
          if (prod.id === prodId) {
              prod.stock++
          }
      })
  } else {
      const item = juegos.find((prod) => prod.id === prodId)
      carrito.push(item)
  }
  actualizarCarrito()
};

const eliminarDelCarrito = (prodId) => {
  const item = carrito.find((prod) => prod.id === prodId)
  const indice = carrito.indexOf(item)
  carrito.splice(indice, 1)
  actualizarCarrito()
  

}


const actualizarCarrito = () => {

  contenedorCarrito.innerHTML = ""
  carrito.forEach((producto) => {
      const div = document.createElement('div')
      div.className = ('productoEnCarrito')
      div.innerHTML =  `
      <tr>
          <td>-${producto.nombre} </td>
          <td> Cantidad : ${producto.stock}</td>
          <td>Precio : $${producto.precio * producto.stock} ($${producto.precio})</td>
      </tr>
      `
      
      contenedorCarrito.appendChild(div)

      localStorage.setItem('carrito', JSON.stringify(carrito))
  })

  contadorCarrito.innerText = carrito.length
  console.log(carrito)
  precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.stock * prod.precio, 0)

}

