/* let producto = prompt("Seleccion que producto desea: A - Alineacion o B - Balanceo");

do {
if (producto.toUpperCase() === "A"){
 var formaPago = prompt ("Seleccion tu forma de pago: A - En efectivo o B - Con tarjeta")
 if (formaPago.toUpperCase() === "A") {
     alert ("El precio de la alineacion en efectivo es de $1500")
 } else {
     alert ("El precio de la alineacion en tarjeta es de $4000")
 }



} else if (producto.toUpperCase() !== "") {
    alert("ES B")
}
} while (producto = "A"); */

/* let pass = " ";


while (pass != "hola"){
    pass = prompt ("Ingrese su contraseña")
}
alert ("Saliste del bucle pa");
 */

/*producto = prompt("Seleccione que producto desea: A- Alineacion o B- Balanceo")

while (producto.toUpperCase() !== "A" || producto.toUpperCase()) {
    producto = prompt("Seleccione que producto desea: A- Alineacion o B- Balanceo")
}

alert ("Salir");
*/

/* 
do{
    producto = prompt("Seleccione que producto desea: A- Alineacion o B- Balanceo");

}while(producto.toUpperCase() !== "A" && producto.toUpperCase() !== "B" );

alert ("Salir");
 */


/* var producto = prompt("Seleccione que producto desea: A- Alineacion o B- Balanceo");

while(parseInt(producto) !== 1 && parseInt(producto) !== 2){
    producto = prompt("Seleccione que producto desea: A- Alineacion o B- Balanceo");
}

alert("puto"); */


// WHILE SIEMPRE HAY QUE PREGUNTAR Y GUARDAR EN VARIABLE PARA LUEGO CHEQUEAR EN EL CICLO, CUANDO SE CUMPLE
//ADENTRO DEL CICLO, SALE DE EL.


/* var contraseña = document.getElementById('asd'); */


//VARIABLES Y CONSTANTES
const IVA = 1.21;
let alineacion = 2000;
let balanceo = 4000;
let descuento = 0.1;
var producto = prompt("Seleccione que producto desea: A- Alineacion o B- Balanceo")


while(producto.toUpperCase() !== "A" && producto.toUpperCase() !== "B"){
        producto = prompt("selecione que producto desea: A- Alineacion o B - Balanceo");
}

if (producto.toUpperCase () == "A") {
    alert ("Elegiste Alineacion! el precio es $" + alineacion)
    do {
    var modoPago = prompt ("Como vas a abonar ? A- EFECTIVO (10% DE DESCUENTO) o B- TARJETA (RECARGO DEL IVA)")
}  while (modoPago.toUpperCase() !== "A" && modoPago.toUpperCase() !== "B")  
    if (modoPago.toUpperCase () == "A") {
        alert ("El precio de la Alineacion con descuento en efectivo es de $" + (alineacion -(descuento*alineacion)))
    } else {
        alert ("El precio de la Alineacion con tarjeta mas el IVA es de $" + (alineacion*IVA))
    }
} else {
    alert ("Elegiste Balanceo! el precio es $" + balanceo)
    do {
        var modoPago = prompt ("Como vas a abonar ? A- EFECTIVO (10% DE DESCUENTO) o B- TARJETA (RECARGO DEL IVA)")
    }  while (modoPago.toUpperCase() !== "A" && modoPago.toUpperCase() !== "B")  
        if (modoPago.toUpperCase () == "A") {
            alert ("El precio de la Balanceo con descuento en efectivo es de $" + (balanceo -(descuento*balanceo)))
        } else {
            alert ("El precio de la Balanceo con tarjeta mas el IVA es de $" + (balanceo*IVA))
        }
}

