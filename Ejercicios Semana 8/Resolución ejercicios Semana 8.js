// Copiar y pegar el código de cada ejercicio en la consola del navegador para comprobar su funcionamiento.

/* 
1- Hacer un código que imprima por pantalla cinco veces el mensaje "estamos estudiando los bucles".
Hacerlo una vez con cada bucle: utilizando while, do-while y for.
*/

// Con while
let iWhile = 0;
while (i < 5) {
    console.log("Estamos estudiando los bucles");
    iWhile++;
}

// Con do-while
let iDoWhile = 0;
do {
    console.log("Estamos estudiando los bucles");
    iDoWhile++;
} while (iDoWhile < 5);

//Con for
for (let iFor = 0; iFor < 5; iFor++) {
    console.log(" Estamos estudiando los bucles")
}

/* 
2- Hacer un código que escriba todos los números consecutivos del 1 al 10.
Hacerlo una vez con cada bucle: utilizando while, do-while y for.
*/

// Con while
let whileCounter = 1;
while (whileCounter <= 10) {
    console.log(whileCounter);
    whileCounter++;
}

// Con do-while
let doWhileCounter = 1;
do {
    console.log(doWhileCounter);
    doWhileCounter++;
} while (doWhileCounter <= 10);

//Con for
for (let forCounter = 1; forCounter <= 10; forCounter++) {
    console.log(forCounter)
}

/* 
3- Utilizando for escribir un código que visualice los n primeros múltiplos de 2, siendo n un valor leído por teclado.
Si por ejemplo n vale 4, la salida generada por el programa sería:
"4 primeros múltiplos del número 2: 2, 4, 6, 8"
El texto anterior debe estar concatenado en una única línea.
*/

let n = +prompt("Escribe el número de múltiplos de 2 que quieres averiguar");

try {
    if (isNaN(n)) {
        throw "No se trata de un número válido"
    } else {
        let finalString = `Los ${n} primeros múltiplos del número 2:`
        for (let counter = 1; counter <= n; counter++) {
            if (counter == n) {
                finalString += ` ${2 * counter}`;
            } else {
                finalString += ` ${2 * counter},`
            }
        }
        console.log(finalString);
    }
} catch (e) {
    console.log(e)
}

/* 
4- Utilizando el bucle for, crear un código que imprima la tabla de multiplicar del 4:
"1 x 4 = 4"
"2 x 4 = 8"
...
"10 x 4 = 40"

Cada valor aparecerá impreso en una línea y debe ser igual que las anteriores. Habrá que concatenar el contenido.
*/

let multiplicationTable = "";
for (let counter = 1; counter <= 10; counter++) {
    multiplicationTable += `4 x ${counter} = ${counter * 4}\n`;
}
console.log(multiplicationTable);