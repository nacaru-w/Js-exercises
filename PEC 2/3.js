// Haz un código que, dado un número, sume e imprima por pantalla todos los valores desde 1 hasta ese número, como en los siguientes ejemplos:
// - Dado el 2 es  1 + 2 = 3 
// - Dado el 4 es 1 + 2 + 3 + 4 = 10
// - Dado el 5 es 1 + 2 + 3 + 4 + 5 = 15

function additionToInput(inputNumber) {
    let additionString = '';
    let result = 0;
    try {
        if (isNaN(inputNumber) || inputNumber < 0) {
            throw "No has escrito un número o no es un número positivo"
        } else {
            for (let counter = 1; counter <= inputNumber; counter++) {
                counter == 1 ? additionString += counter : additionString += " + " + counter
                result += counter
            }
            console.log(`Dado el ${inputNumber} es ${additionString} = ${result}`);
        }
    } catch (error) {
        console.log(error)
    }
}

additionToInput(+prompt("Escribe un número")) 