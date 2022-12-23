// Crear un código que permita realizar una potencia. Se debe leer la base y el exponente de la potencia y el programa debe calcular el resultado. Por ejemplo:
// - Base 2 y Exponente 2 será: 2 * 2 = 4
// - Base 2 y Exponente 3 será: 2 * 2 * 2 = 8
// - Base 3 y Exponente 2 será: 3 * 3 = 9
// - Base 5 y Exponente 4 será: 5 * 5 * 5 * 5 = 625

function exponentiation(base, exponent) {
    try {
        if (isNaN(base) || isNaN(exponent) || exponent < 1) {
            throw "Tu base o tu exponente no es un número o el exponente que has introducido no es positivo"
        } else {
            let result = base;
            for (let multiplicationsToExponent = 1; multiplicationsToExponent < exponent; multiplicationsToExponent++) {
                result *= base;
            }
            console.log(`El resultado es ${result}`)
        }
    } catch (e) {
        console.log(e)
    }
}

exponentiation(+prompt("Escribe una base"), +prompt("Escribe un exponente"));