
// Creo CONST
const userEmail = document.getElementById("exampleInputEmail1");
const pass = document.getElementById("exampleInputPassword1");
const subirLocal = document.getElementById("Subir");
const limpiarLocal = document.getElementById("Limpiar");

// Creo funciones
subirLocal.addEventListener('click' , e => {
  localStorage.setItem('user', userEmail.value);
  localStorage.setItem('password', pass.value);
});

limpiarLocal.addEventListener('click' , e => {
  localStorage.removeItem('user', userEmail.value);
  localStorage.removeItem('password', pass.value);
});
