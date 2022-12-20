// Realizar un código que imprima por pantalla las tablas de multiplicar completas del 1 al 10
// - 1 x 1 = 1
// - 1 x 2 = 2
// - [...]
// - 1 x 10 = 10
// - 2 x 1 = 1
// - 2 x 2 = 4
// - [...]
// - 10 x 10 = 100

function multiplicationTable() {
    let finalString = '';
    for (let multiplicand = 1; multiplicand <= 10; multiplicand++) {
        for (let multiplier = 1; multiplier <= 10; multiplier++) {
            console.log(`${multiplicand} x ${multiplier} = ${multiplicand * multiplier}`)
        }
    }
}

multiplicationTable()