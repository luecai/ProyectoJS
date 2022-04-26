


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

