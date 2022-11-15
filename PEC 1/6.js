// Ejercicio 5: Ignacio Casares Ruiz

/*

Los libros tienen un código identificador, el ISBN (International Standard Book Number). Hay códigos ISBN de 10 dígitos (ISBN-10) o de 13 dígitos (ISBN-13), estos últimos desde 2007. El dígito de control de un código ISBN-13 se calcula multiplicando el primer dígito por 1, el segundo por 3, el tercero por 1, el cuarto por 3, etc, hasta llegar al 12º dígito. El 13º dígito es el de control, y es el valor que hay que añadir a la suma de todos estos productos para que sea divisible por 10.
Escribid un programa en JavaScript que compruebe si un código ISBN-13 dado tiene el dígito de control correcto o no. Si el dígito de control es correcto debe escribir por consola el mensaje "CORRECTO", sinó debe escribir "INCORRECTO".

Podéis consultar la wikipedia: https://es.wikipedia.org/wiki/ISBN
Ejemplos:

Si el código ISBN es 9781593272821, debe escribir "CORRECTO"
Si el código ISBN es 9781593272820, debe escribir "INCORRECTO"

*/

let d1 = +prompt("Escribe el primer dígito del código ISBN-13")
let d2 = +prompt("Escribe el segundo dígito")
let d3 = +prompt("Escribe el tercer dígito")
let d4 = +prompt("Escribe el cuarto dígito")
let d5 = +prompt("Escribe el quinto dígito")
let d6 = +prompt("Escribe el sexto dígito")
let d7 = +prompt("Escribe el séptimo dígito")
let d8 = +prompt("Escribe el octavo dígito")
let d9 = +prompt("Escribe el noveno dígito")
let d10 = +prompt("Escribe el décimo dígito")
let d11 = +prompt("Escribe el undécimo dígiito")
let d12 = +prompt("Escribe el duodécimo dígito")
let d13 = +prompt("Escribe el decimotercer dígito o dígito de control")

let sumaD = d1 + d2 * 3 + d3 + d4 * 3 + d5 + d6 * 3 + d7 + d8 * 3 + d9 + d10 * 3 + d11 + d12 * 3

if ((sumaD + d13) % 10 == 0) {
    alert("CORRECTO")
} else {
    alert("INCORRECTO")
}