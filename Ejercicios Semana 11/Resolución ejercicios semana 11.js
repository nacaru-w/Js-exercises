// 1- Crea un algoritmo que calcule la media de 5 números que se le pasan por teclado. Sólo se podrán utilizar bucles.

function averageCalculator() {
    let aggregator = 0
    for (let counter = 1; counter <= 5; counter++) {
        let input = +prompt(`Escribe un número para calcular su media: 5 números. Este es el número ${counter}`)
        aggregator += input
        if (counter == 5) {
            aggregator = aggregator / 5
        }
    }
    console.log(aggregator)
}
averageCalculator()

// 2- Utilizando bucles, genera dinámicamente la siguiente serie:
// 1, 5, 3, 7, 5, 9, 7, ..., 23.
// 23 será el último dígito de la serie.

function hopper() {
    let i = 1;
    do {
        console.log(i)
        console.log(i + 4)
        i += 2
    } while (i <= 23 && i + 4 <= 23)
}

hopper()

// 3- Crear un código que utilizando un bucle dibuje la secuencia de Fibonacci del valor n.
// La secuencia de Fibonacci consiste en la suma de los dos números anteriores, partiendo de 1, 1, 2, 3, 5, 8, 13, 21...
// Por ejemplo:
// la secuencia para n=5 de Fibonacci será: 1, 1, 2, 3, 5
// la secuencia para n=7 de Fibonacci será: 1, 1, 2, 3, 5, 8, 13

function fibonacci(input) {
    let finalString = ''
    let i = 1
    let oldi = 0
    let olderi = 0
    for (let loops = 1; loops <= input; loops++) {
        loops == input ? finalString += i : finalString += i + ', ';
        olderi = oldi
        oldi = i
        i = oldi + olderi
    }
    console.log(finalString)
}

fibonacci(+prompt("Inserte un número para conocer su secuencia de Fibonacci"))

// 4- Solicitar al usuario que ingrese una frase y luego imprimir la cantidad de vocales que se encuentran en dicha frase.
// Por ejemplo:
// - "El martes tengo que ver a mi prima" devolverá 12
// - "No sé si tengo que ir" devolverá 8

function howManyVowels(sentence) {
    vowelCounter = 0
    for (let index = 0; index < sentence.length; index++) {
        switch (sentence[index]) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                vowelCounter++;
                break;
            default:
                break;
        }
    }
    console.log(vowelCounter)
}

howManyVowels(prompt("Escribe una frase para conocer el número de vocales en ella"));

// 5- Crear un programa que muestre todos los números que son múltiplos de 3 en una única lista concatenada de la siguiente forma:
// 3, 6, 9, 12, ...