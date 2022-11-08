---
title: "Introducción a Javascript I: ejercicios semana 4"
author: Ignacio Casares Ruiz
documentclass: scrartcl
header-includes:
- \usepackage[a4paper, margin=2cm]{geometry}
---

## 1.

```js

function binaryValue (input) {
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

binaryValue (+prompt ("Escribe un número del 0 al 9 para conocer su binario"))

```


## 2.

```js

function finalMortgageValue (input) {
    try {
        if (input <= 0 ) {
            throw "El valor no puede ser inferior a 0"
        } else if (isNaN(input)) {
            throw "El valor debe de ser un número"
        } else {
            alert( `El valor total con pŕestamo es de ${(input * 1.31).toFixed(2)} €` )
        }
    } catch (e) {
        alert(e)
    }
}

finalMortgageValue (+prompt("Inserte el valor de su hipoteca"))

```

## 3.

```js

function biggerNumber (n1, n2) {
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

```

## 4.

```js

function shopping (input) {
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

shopping (+prompt("Inserte el valor de su compra"))

```

## 5.

```js

function costCalculator (container, flavour) {
    let containerCost, flavourCost;
    try {
        switch (container) {
            case "cono" :
                containerCost = 1.55;
                break;
            case "tarrina" :
                containerCost = 2;
                break;
            default :
                throw "Contenedor incorrecto"
                break;
        }
        switch (flavour) {
            case "vainilla" :
            case "chocolate" :
                flavourCost = 0;
                break;
            case "turrón" :
            case "menta" :
            case "oreo" :
                flavourCost = 0.5;
                break;
            case "crema" :
            case "café" :
            case "almendras" :
                flavourCost = 1;
                break;
            default :
                throw "El sabor no está disponible"
                break;
        }
        alert (`El precio de su helado es de ${containerCost + flavourCost} €`)
    }   catch (e) {
        alert (e);
        alert ("El costo del helado es de 0")
    }
}

costCalculator (prompt("Elija cono o tarrina").toLowerCase(), 
prompt("Elija su sabor: vainilla, chocolate, turrón, menta, 
oreo, crema, café, almendras").toLowerCase())

```