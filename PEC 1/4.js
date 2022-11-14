// Ejercicio 4: Ignacio Casares Ruiz

/*
Escribir un código que pida por teclado tres valores de tipo entero y calcule si se cumple que la suma de dos de ellos es igual al tercero. La salida del programa tiene que indicar los números introducidos:

Números introducidos: a b c

Y una de las cuatro líneas de salida siguientes:

- Se cumple que: a=b+c
- Se cumple que: b=a+c
- Se cumple que: c=a+b
- Los números no cumplen la condición
*/

let valorA = +prompt("Escribe un número entero");
let valorB = +prompt("Escribe un segundo número entero");
let valorC = +prompt("Escribe un tercer número entero");

let textoFinal;

if (valorA == valorB + valorC) {
    textoFinal = `Se cumple que ${valorA} = ${valorB} + ${valorC}`
} else if (valorB == valorA + valorC) {
    textoFinal = `Se cumple que ${valorB} = ${valorA} + ${valorC}`
} else if (valorC == valorA + valorB) {
    textoFinal = `Se cumple que ${valorC} = ${valorA} + ${valorB}`
} else {
    textoFinal = "Los números no cumplen la condición"
}

alert(`Números introducidos: ${valorA}, ${valorB}, ${valorC}.
${textoFinal}`)