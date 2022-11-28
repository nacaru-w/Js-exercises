// 1- Hacer un código que escriba todos los números consecutivos del 1 al 100.

for (let n = 1; n <= 100; n++) {
    console.log(n)
}

// 2- Crear un código que escriba los números al revés, de 4 a 1.

for (let n = 4; n >= 1; n--) {
    console.log(n)
}

// 3- Crea un código para que escriba los números del 50 al 54.

for (let n = 50; n >= 54; n++) {
    console.log(n)
}

// 4- Crea un código que escriba los números del 1 al 70 pero de 2 en 2. En la práctica esto se puede hacer de dos maneras:
// incrementando la variable del for en dos en vez de uno. ¿Sabrías hacerlo?

for (let n = 1; n <= 70; n += 2) {
    console.log(n)
}

// 5- Crea un código que escriba solo los números impares entre 1 y 100. Se debe resolver usando un if dentro del bucle.

for (let n = 1; n <= 100; n++) {
    if (n % 2 == 1) {
        console.log(n)
    }
}

// 6- Utilizando do..while, leer por teclado 5 números enteros positivos, y escribir cual fue el mayor de los números introducidos.

let counter = 1
let finalNumber = 0;
do {
    let input = +prompt("Escribe un número")
    try {
        if (isNaN(input)) {
            throw "Eso que has escrito no es un número :("
        } else if (input > finalNumber) {
            finalNumber = input
        }
    } catch (e) {
        console.log(e)
    }
    counter++
} while (counter <= 5)

console.log(`El mayor número escrito es el ${finalNumber}`)

/* 
7- Crear un código que dibuje por pantalla el siguiente patrón, en función del número que el usuario introduzca por teclado, en este caso para un 4 sería:

*
**
***
****

*/

function asteriskMaker(input) {
    try {
        if (isNaN(input)) {
            throw "Oye, eso no es un número :( "
        } else {
            let result = "";
            for (let counter = 1; counter <= input; counter++) {
                result += "*"
                console.log(result)
            }
        }
    } catch (e) {
        console.log(e)
    }

}

asteriskMaker(+prompt("Escribe un número y verás estrellitas"))