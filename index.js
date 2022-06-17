// Creo CONST
const userEmail = document.getElementById("exampleInputEmail1");
/* const nombre = userEmail.value; */
const pass = document.getElementById("exampleInputPassword1");
const subirLocal = document.getElementById("Subir");
const limpiarLocal = document.getElementById("Limpiar");
const bar = document.getElementById("barChange");
const nombreUser = document.getElementById("nombreUser");

// Creo funciones
subirLocal.addEventListener('click' , e => {
  localStorage.setItem('nombre', nombreUser.value);
  localStorage.setItem('user', userEmail.value);
  localStorage.setItem('password', pass.value);
  Swal.fire({
    icon: 'success',
    title: 'Gracias!'
  })
});

limpiarLocal.addEventListener('click' , e => {
  localStorage.removeItem('nombre', nombreUser.value);
  localStorage.removeItem('user', userEmail.value);
  localStorage.removeItem('password', pass.value);
  Swal.fire({
  icon: 'error',
  title: 'Limpiaste'
})
});



function cambio() {

  if ( localStorage.getItem('nombre') ){
  console.log("hay algo");
  bar.innerHTML = "STEAM YA! Bienvenido " + localStorage.getItem('nombre');
} else {
  console.log("no hay user");
  bar.innerHTML = "STEAM YA! Por favor loguéese!";
  };
  

}
cambio();