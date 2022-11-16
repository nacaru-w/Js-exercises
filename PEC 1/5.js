// Ejercicio 5: Ignacio Casares Ruiz

/*

Escribid un programa en JavaScript que, dada una fecha como un número de día (Número natural entre 1 y 31, ambos incluidos) y un número de mes (número natural entre 1 y 12, ambos incluidos), muestre por consola el nombre del mes y la estación del año, según estos rangos de datos:

Entre 21/03 y 20/06 la estación es "primavera"
Entre 21/06 y 22/09 la estación es "verano"
Entre 23/09 y 20/12 la estación es "otoño"
Entre 21/12 y 20/03 la estación es "invierno"

Ejemplos:

Si el día es 1 y el mes es 5 debe escribir "mayo" y "primavera".
Si el día es 25 y el mes es 6 debe escribir "junio" y "verano".
Si el día es 31 y el mes es 12 debe escribir "diciembre" e "invierno".

*/

let diaDelMes = +prompt("Escribe un día del mes entre 1 y 31");
let numeroMes = +prompt("Escribe un número de mes, entre 1 y 12");

let mesEscrito;
let estacion;

try {
    switch (numeroMes) {
        case 1:
            mesEscrito = "enero";
            break;
        case 2:
            mesEscrito = "febrero";
            break;
        case 3:
            mesEscrito = "marzo";
            break;
        case 4:
            mesEscrito = "abril";
            break;
        case 5:
            mesEscrito = "mayo";
            break;
        case 6:
            mesEscrito = "junio";
            break;
        case 7:
            mesEscrito = "julio";
            break;
        case 8:
            mesEscrito = "agosto";
            break;
        case 9:
            mesEscrito = "septiembre";
            break;
        case 10:
            mesEscrito = "octubre";
            break;
        case 11:
            mesEscrito = "noviembre";
            break;
        case 12:
            mesEscrito = "diciembre";
            break;
        default:
            throw "Error: el número del mes no es válido o no es un número";
    }

    if (diaDelMes > 31 || diaDelMes <= 0) {
        throw "Error: el día del mes no puede ser superior a 31 o inferior a 0"
    } else if (numeroMes <= 2 || (numeroMes == 3 && diaDelMes <= 20) || (numeroMes == 12 && diaDelMes >= 21)) {
        estacion = "invierno";
    } else if ((numeroMes == 3 && diaDelMes >= 21) || numeroMes == 4 || numeroMes == 5 || (numeroMes == 6 && diaDelMes <= 20)) {
        estacion = "primavera";
    } else if ((numeroMes == 6 && diaDelMes >= 21) || numeroMes == 7 || numeroMes == 8 || (numeroMes == 9 && diaDelMes <= 20)) {
        estacion = "verano";
    } else if ((numeroMes == 9 && diaDelMes >= 21) || numeroMes == 10 || numeroMes == 11 || (numeroMes == 12 && diaDelMes <= 20)) {
        estacion = "otoño";
    } else {
        throw "Error: se ha producido un error";
    }

    console.log(`El mes es ${mesEscrito} y la estación es ${estacion}`)

} catch (error) {
    console.log(error)
}
