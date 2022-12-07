// 1- Hacer un programa que cuente el número de "a" que hay en una cadena de caracteres.
// Por ejemplo: "Amanda va a hacer pan"

function howManyA(string) {
    let aCounter = 0;
    for (let index = 0; index <= string.length; index++) {
        if (string[index] == 'a' || string[index] == 'A') {
            aCounter += 1
        }
    }
    console.log(`Hay un total de ${aCounter} «A»s en el texto`)
}

howManyA(prompt('Escribe una frase para averiguar cuantas «A» hay en ella', 'Amanda va a hacer pan'))


// 2- Hacer un programa que cuente el número de palabras que hay en una cadena terminada en punto, teniendo en cuenta que entre palabra y palabra hay siempre un espacio (y sólo un espacio).
// Por ejemplo: "Ayer me encontré con Tomas y me preguntó por Laura."

function howManyWords(string) {
    if (string[string.length - 1] !== '.') {
        string = string + '.'
    }
    let wordCounter = 0;
    let index = 0;
    do {
        if (string[index] == ' ' || (string[index] == '.' && index == string.length - 1)) {
            wordCounter += 1
        }
        index++
    } while ((index - 1) <= string.length);
    console.log(`Hay un total de ${wordCounter} palabras en esa frase`);
}

howManyWords(prompt('Escribe una frase para averiguar cuántas palabras hay en ella', 'Ayer me encontré con Tomas y me preguntó por Laura.'));


/* 3- Crear una código que dado un número introducido por teclado, y otro indicando el número de repeticiones cree y sume la una serie como la siguiente:
Número: 9
Número de repeticiones: 5
Salida del programa:
9 99 999 9999 99999
La suma de la serie es: 111105
*/

function seriesAndAddition(number, repetitions) {
    let series = '';
    let thisLoopNumber = '';
    let addition = 0;
    for (let counter = 1; counter <= repetitions; counter++) {
        thisLoopNumber += number
        series += thisLoopNumber + ' '
        addition += thisLoopNumber
    }
    console.log(thisLoopNumber)
    console.log(series)
    console.log(addition)
}

seriesAndAddition(prompt("Escribe un número"), +prompt("Escribe el número de repeticiones"))


/* 4- Vamos a realizar un código que con un bucle se recoja la lista de 10 invitados a una fiesta. Cada vez que el bucle itere, obtendré un nuevo nombre que se añadirá a la lista.
La salida debe ser: "Lista de invitados: Paquita, Lucia, Manuel, Rodrigo, Roberto, Susana, Pepe, Paco, Maria, Antonio"
Fijaos que no incluye una "," en la última posición
*/


// 5- Repetir el ejercicio anterior, pero recogiendo un número ilimitado de nombres, que se detendrá cuando el usuario introduzca el texto "STOP".
// Una vez recogidos esos nombres se deberá mostrar: "Lista de invitados: Maria, Lucia, Rodrigo, Roberto, Manuel, Leticia, Susana, Luis, Fernando, Esther, Antonio"


// 6- Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla en una sola cadena de texto todos los números impares desde 1 hasta ese número separados por comas.


// 7- Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla la cuenta atrás desde ese número hasta cero separados por comas. En caso de que el número introducido no sea entero positivo, se mostrara un error.



/* 
8- Escribir un programa que nos pida un número por teclado, y que dibuje el triángulo de FLOYD para ese número. El triángulo está formado por tantas líneas como el número leído, teniendo la primera línea un número, y uno más cada una de las líneas siguientes. Los números son los naturales empezando por el 1. El triángulo de floyd para n=5 sería:

1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
*/

/*
9- Crear un código que imprima por pantalla todas las horas del día, mostrando horas minutos y segundos.

00:00:00
00:00:01
00:00:02
00:00:03
00:00:04
00:00:05
//...
01:01:21
01:01:22
01:01:23
01:01:24
01:01:25
//...
11:23:58
11:23:59
11:24:00
11:24:01
11:24:02
//...
23:59:57
23:59:58
23:59:59
*/