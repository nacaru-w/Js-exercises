// 1- Crear un código que devuelva un carácter de un string a partir de su posición (índice en el String).
function whatsInInput(string, input) {
    console.log(string.charAt(input))
}

whatsInInput(prompt("Escribe una frase"), +prompt("Escribe el número de un carácter en la frase"))

// 2- Crear un código que concatene dos Strings
function joinSentences(sentence1, sentence2) {
    console.log(sentence1.concat(sentence2))
}

joinSentences(prompt("Escribe una frase o palabra"), prompt("Escribe una segunda para unirla a la primera"))

// 3- Dado un Array que contenga todo letras, que cree un String con el mismo orden que el array
function wordBuilder() {
    let array = [];
    for (let char = ''; char != "STOP";) {
        char = prompt("Escribe un carácter, para acabar escribe «STOP»")
        if (char !== "STOP") {
            char.length > 1 ? alert("Solo uno, por favor") : array.push(char)
        }
    }
    console.log(array.join(''));
}

wordBuilder()

// 4- Crear un código que devuelva si un String termina con un String dado.
function endsWith(input, ending) {
    input.endsWith(ending) ? console.log("Tu frase termina en lo que escribiste") : console.log("Tu frase no termina así");
}

endsWith(prompt("Escribe una frase"), prompt("Escribe un string para ver si coincide con el final de la frase anterior"))

// 5- Crear una función que compare dos Strings y nos diga si son iguales.
function compare(input1, input2) {
    input1.localeCompare(input2) === 0 ? console.log("Son iguales") : console.log("Esas frases no son iguales");
}

compare(prompt("Escribe una frase"), prompt("Escribe una segunda frase para ver si es igual a la primera"));

// 6- Transformar un String en un Array en el que cada posición contenga cada una de las letras del String y después volver a construir un Array con el contenido del String pero en orden inverso.
function reverse(input) {
    let array = input.split("");
    let reversedArray = array.reverse();
    console.log(reversedArray.join(""))
}

reverse(prompt("Escribe una frase para darle la vuelta"))

// 7- Imprimir por pantalla la fecha actual

// 8- Crear una fecha con los siguientes datos: 20 de mayo de 2018

// 9- Crear un código que imprima el número de milisegundos trascurridos desde el 1 de enero de 1970 a las 00.00.00 hasta el momento donde se ejecute tu código.

// 10- Dado un numero introducido por el usuario, comprobar si es o no es un número entero.