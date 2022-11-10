/*

1- Escribir un programa en el que dado un número del 0 al 9, aparezca su valor en binario. 
Los valores en binario son:

0 = 0
1 = 1
2 = 01
3 = 10
4 = 11
5 = 100
6 = 101
7 = 110
8 = 111
9 = 1000

*/

function binaryValue(input) {
    try {
        switch (input) {
            case 0:
                alert("0");
                break;
            case 1:
                alert("1");
                break;
            case 2:
                alert("01");
                break;
            case 3:
                alert("10");
                break;
            case 4:
                alert("11");
                break;
            case 5:
                alert("100");
                break;
            case 6:
                alert("101");
                break;
            case 7:
                alert("110");
                break;
            case 8:
                alert("111");
                break;
            case 9:
                alert("1000");
                break;
            default:
                throw "No se trata de un número válido"
        }
    } catch (e) {
        alert(e)
    }
}

binaryValue(+prompt("Escribe un número del 0 al 9 para conocer su binario"))

/*

2- Calcular cuál es el valor total de la hipoteca si, dado un valor leído por teclado, 
sabemos que el banco nos cobra un 31% más de ese valor por pedir la hipoteca con ellos.

*/

function finalMortgageValue(input) {
    try {
        if (input <= 0) {
            throw "El valor no puede ser inferior a 0"
        } else if (isNaN(input)) {
            throw "El valor debe de ser un número"
        } else {
            alert(`El valor total con préstamo es de ${(input * 1.31).toFixed(2)} €`)
        }
    } catch (e) {
        alert(e)
    }
}

finalMortgageValue(+prompt("Inserte el valor de su hipoteca"))

/*

3- Realizar un programa que pida dos números por teclado al usuario, 
e indique cuál de los dos es mayor o si son iguales.

*/

function biggerNumber(n1, n2) {
    try {
        if (isNaN(n1) || isNaN(n2)) {
            throw "Ambos valores deben de ser números"
        } else if (n1 > n2) {
            alert(`${n1} es mayor que ${n2}`)
        } else if (n2 > n1) {
            alert(`${n2} es mayor que ${n1}`)
        } else {
            alert(`${n1} es igual a ${n2}`)
        }
    } catch (e) {
        alert(e)
    }
}

biggerNumber(+prompt("Escribe un número"), +prompt("Escribe otro número"))

/*

4- Realizar un programa que simule una compra en una web. El usuario deberá introducir 
una cantidad por teclado.

En caso de que esa cantidad sea 30 ? o más, se le mostrará un mensaje por el valor de 
su compra, indicando que como ha pasado de 30 ?, el envío es gratis. En caso de que se
inserte una cantidad menor, se le mostrará un mensaje con el valor de su compra 
detallando un envío de 4.95 ? y sumando ese costo al de su compra.

*/

function shopping(input) {
    try {
        if (isNaN(input) || input <= 0) {
            throw "Por favor, inserta una cantidad válida"
        } else if (input >= 30) {
            alert("En las compras superiores a 30 € el envío es gratis")
        } else {
            alert("En las compras inferiores a 30 € el envío cuesta 4.95 €")
        }
    } catch (e) {
        alert(e)
    }
}

shopping(+prompt("Inserte el valor de su compra"))

/*

5- Un usuario va a una heladería, habrá que calcular el costo del helado según las 
siguientes características:

- El usuario puede elegir cono o tarrina, y esto dará el precio base del helado
- Cono: 1.55 ?
- Tarrina: 2 ?

- El usuario puede elegir un sabor, y habrá ciertos sabores que incrementen el precio.
- Vainilla y Chocolate: +0 ?
- Turrón, Menta, Oreo: + 0.5 ?
- Crema, Café, Almendras: +1 ?

Se pide, dados las dos variables leídas por teclado (una para cono o tarrina y otra para 
sabor) calcular el costo total del helado. En caso de que el usuario no escriba bien 
"cono" o "tarrina" se lanzará un error y se mostrará por pantalla: 
"Contenedor Incorrecto". En caso de que el texto del sabor no esté bien introducido se 
lanzará un error y se mostrará por pantalla: "Ese sabor no está disponible"
Si se produce cualquier error, el programa mostrará un costo de 0 ? por el helado.

*/

function costCalculator(container, flavour) {
    let containerCost, flavourCost;
    try {
        switch (container) {
            case "cono":
                containerCost = 1.55;
                break;
            case "tarrina":
                containerCost = 2;
                break;
            default:
                throw "Contenedor incorrecto"
                break;
        }
        switch (flavour) {
            case "vainilla":
            case "chocolate":
                flavourCost = 0;
                break;
            case "turrón":
            case "menta":
            case "oreo":
                flavourCost = 0.5;
                break;
            case "crema":
            case "café":
            case "almendras":
                flavourCost = 1;
                break;
            default:
                throw "El sabor no está disponible"
                break;
        }
        alert(`El precio de su helado es de ${containerCost + flavourCost} €`)
    } catch (e) {
        alert(e);
        alert("El costo del helado es de 0")
    }
}

costCalculator(prompt("Elija cono o tarrina").toLowerCase(),
    prompt("Elija su sabor: vainilla, chocolate, turrón, menta, oreo, crema, café, almendras").toLowerCase())
