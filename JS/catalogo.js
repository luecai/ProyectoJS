// Creo las Class de Juegos y Programas
class ProductoJuegos{
    constructor (id, nombre, precio, tipo){
    this.id = id;
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.tipo = tipo;
    }
  
  /*   obtenerJuegos () {
      return `Juego: ${this.nombre}, Precio:${this.precio}`
    }
   */
  }
  
  /* class ProductoProgramas{
    constructor (id, nombre, precio, tipo){
    this.id = id;
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.tipo = tipo;
    }
  
    obtenerProgramas () {
      return `Juego: ${this.nombre}, Precio:${this.precio}`
    }
  
  } */
  
  
  
  // Creo las Array
  
  const arrayJuegos = [];
  const contenedor = document.getElementById("productos");
  const tablaCarrito = document.getElementById("tablaCarrito");
  const carrito = [];
  
  /* const arrayProgramas = []; */
  
  
  
  // Creo las funciones para pushear 
  
  function nuevoProductoJuegos(id, nombre, precio, tipo) {
    arrayJuegos.push(new ProductoJuegos(id, nombre, precio, tipo));
  }
  
  /* function nuevoProductoProgramas(id, nombre, precio, tipo) {
    arrayProgramas.push(new ProductoProgramas(id, nombre, precio, tipo));
  }
   */
  
  
  
  nuevoProductoJuegos(1, "CS GO ", 600, "Shooter");
  nuevoProductoJuegos(2, "FIFA", 1500, "Deporte");
  nuevoProductoJuegos(3, "FORMULA 1", 1200, "Carrera");
  nuevoProductoJuegos(4, "MAFIA 2", 1200, "Mundo Abierto");
  nuevoProductoJuegos(5, "BATTLEFIELD", 450, "Shooter");
  nuevoProductoJuegos(6, "CALL OF DUTY", 900, "Shooter");
  nuevoProductoJuegos(7, "NEED FOR SPEED", 2100, "Carrera");
  nuevoProductoJuegos(8, "FORZA", 1200, "Deporte");
  nuevoProductoJuegos(9, "NBA", 2800, "Deporte");
  nuevoProductoJuegos(10, "GTA", 2500, "Mundo Abierto");
  
  /* nuevoProductoProgramas(1, "PHOTOSHOP ", 600, "Shooter");
  nuevoProductoProgramas(2, "COREL", 1500, "Deporte");
  nuevoProductoProgramas(3, "AUTOCAD", 1200, "Carrera");
  nuevoProductoProgramas(4, "SONY VEGAS", 3800, "Mundo Abierto");
   */
  
  
  
  // Creo los for para recorrer las array
  
  const listadoJuegos = () => {
    for (let i = 0; i < arrayJuegos.length; i++) {
      console.log(arrayJuegos[i].obtenerJuegos());
      }
    }
  
  const listadoProgramas = () => {
    for (let i = 0; i < arrayProgramas.length; i++) {
      console.log(arrayProgramas[i].obtenerProgramas());
      }
    }
  
  
  // Alert y Console.Log
    
  /* alert("Bienvenidos a SteamYA!");
   */
  
  
  /* let busqueda = prompt ("Que estas buscando juegos o programas ?");
  
  while(busqueda.toUpperCase() !== "JUEGOS" && busqueda.toUpperCase() !== "PROGRAMAS"){
    busqueda = prompt("Por favor ingrese juegos o programas");
  }
    if(busqueda.toUpperCase() === "JUEGOS") {
      alert("Los Juegos con los precios se veran en console!");
      listadoJuegos();
  
    } else if (busqueda.toUpperCase() === "PROGRAMAS") {
      alert("Los Programas con los precios se veran en console!");
      listadoProgramas();
    }else {
      alert ("Error no encontramos nada :(")
    }; */
  
  
  const getCarta = (item) => {
  
  return (
      `
      <div><h3>${item.name}</h3></div>
      <br>
      <h5> Precio: ${item.precio}
      <div> <button onclick=agregarCarrito(${item.id}) ${!item.stock ? 'disabled' : '' } >Agregar al carrito </button> </div>
      `
  )
  }
  
  const getRow = (item) => {
  
  return (
      `
      <th scope="row">${item.id}</th>
      <td>${item.nombre}</td>
      <td>${item.cantidad}</td>
      <td>$${item.precio * item.cantidad} ($${item.precio})</td>
      `
  )
  }
  
  // función flecha
/*   const cargarProductos = (datos, nodo, esTabla) => {
      let acumulador = "";
      datos.forEach((el) => {
          acumulador += esTabla ? getRow(el) : getCarta(el);
      })
      nodo.innerHTML = acumulador;
  };
   */

  const cargarProductos = (datos, nodo) => {
    let acumulador = "";
    datos.forEach((el) => {
        acumulador += getCarta(el);
    })
    nodo.innerHTML = acumulador;
    };



  const agregarCarrito = (id) => {
      const seleccion = arrayJuegos.find(item => item.id === id);
      const busqueda = carrito.findIndex(el => el.id === id);
      
      if (busqueda === -1) {
          carrito.push({
              id: seleccion.id,
              nombre: seleccion.nombre,
              precio: seleccion.precio,
              cantidad: 1,
              imagen: seleccion.imagen,
          })
      } else {
          carrito[busqueda].cantidad = carrito[busqueda].cantidad + 1
      }
      
      cargarProductos(carrito, tablaCarrito, true);
  }
  
  cargarProductos(arrayJuegos, contenedor, false);
  tablaCarrito
  
  console.log(arrayJuegos);