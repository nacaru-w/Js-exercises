// Escribid un programa en JavaScript que muestre por consola la descomposición de un número natural positivo en cualquiera en sus factores primos. 

// Ejemplos:

// Si N es 357, entonces mostrar “3*7*17”
// Si N es 1024, entonces mostrar “2*2*2*2*2*2*2*2*2*2”
// Si N es 22848, entonces mostrar “2*2*2*2*2*2*3*7*17”

function seeFactors(inputNumber) {
    let finalString = ''
    let threshold = inputNumber
    for (let counter = 2; threshold > 1; counter++) {
        if (threshold % counter == 0) {
            threshold == inputNumber ? finalString += counter : finalString += '*' + counter;
            threshold /= counter;
            counter = 1
            console.log(threshold)
        }
    }
    console.log(finalString)
}

seeFactors(+prompt("Escribe un número para conocer su primo"))