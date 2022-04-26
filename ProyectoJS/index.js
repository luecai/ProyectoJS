


//VARIABLES Y CONSTANTES
const IVA = 1.21;
let FIFA = 2000;
let ASSETO = 4000;
let descuento = 0.1;
var producto = prompt("Seleccione que producto desea: A- FIFA o B- ASSETO CORSA")


while(producto.toUpperCase() !== "A" && producto.toUpperCase() !== "B"){
        producto = prompt("selecione que producto desea: A- FIFA o B - ASSETO CORSA");
}

if (producto.toUpperCase () == "A") {
    alert ("Elegiste FIFA! el precio es $" + FIFA)
    do {
    var modoPago = prompt ("Como vas a abonar ? A- EFECTIVO (10% DE DESCUENTO) o B- TARJETA (RECARGO DEL IVA)")
}  while (modoPago.toUpperCase() !== "A" && modoPago.toUpperCase() !== "B")  
    if (modoPago.toUpperCase () == "A") {
        alert ("El precio de la FIFA con descuento en efectivo es de $" + (FIFA -(descuento*FIFA)))
    } else {
        alert ("El precio de la FIFA con tarjeta mas el IVA es de $" + (FIFA*IVA))
    }
} else {
    alert ("Elegiste ASSETO CORSA! el precio es $" + ASSETO)
    do {
        var modoPago = prompt ("Como vas a abonar ? A- EFECTIVO (10% DE DESCUENTO) o B- TARJETA (RECARGO DEL IVA)")
    }  while (modoPago.toUpperCase() !== "A" && modoPago.toUpperCase() !== "B")  
        if (modoPago.toUpperCase () == "A") {
            alert ("El precio de la ASSETO CORSA con descuento en efectivo es de $" + (ASSETO -(descuento*ASSETO)))
        } else {
            alert ("El precio de la ASSETO CORSA con tarjeta mas el IVA es de $" + (ASSETO*IVA))
        }
}

