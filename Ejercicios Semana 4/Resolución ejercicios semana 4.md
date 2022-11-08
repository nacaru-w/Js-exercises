---
title: "Introducción a Javascript I: ejercicios semana 4"
author: Ignacio Casares Ruiz
documentclass: scrartcl
---

## 1.

```js

function evenOrOdd (input) {
    let toPrint;
    input % 2 === 0 ? toPrint = "Es par" : toPrint = "Es impar";
    alert(toPrint);
}

evenOrOdd (+prompt("Escribe un número para saber si es par o impar"));

```

## 2.

```js

function posOrNeg (input) {
    let toPrint;
    input >= 0 ? toPrint = "Es positivo" : toPrint = "Es negativo";
    alert(toPrint);
}

posOrNeg (+prompt("Escribe un número para saber si es positivo o negativo"));

```

## 3.

```js

function oldOrNew (input) {
    let toPrint;
        if ( input > 60000 ) {
            toPrint = "es viejo";
        } else if (input <= 60000 ) {
            toPrint = "es nuevo";
        }
    alert(`Un coche con un kilometraje de ${input} ${toPrint}`);
}

oldOrNew (+prompt("Introduce el kilometraje del coche para saber
si es nuevo o viejo"));

```

## 4.

```js

function oldOrNew (input) {
    let toPrint;
    input > 60000 ? toPrint = "es viejo" : toPrint = "es nuevo";
    alert(`Un coche con un kilometraje de ${input} ${toPrint}`);
}

oldOrNew (+prompt("Introduce el kilometraje del coche para saber 
si es nuevo o viejo"));

```

## 5.

```js

function canDrive (age, bloodOH) {
    let string;
    if (age >= 18 && bloodOH < 0.25) {
        string = "puede conducir";
    } else {
        string = "no puede conducir";
    }
    alert (`Con una edad de ${age} y una tasa de alcoholemia de ${bloodOH} 
    mg/l esta persona ${string}`)
}

canDrive (+prompt("Escribe la edad del posible conductor"), 
+prompt("Escribe la tasa de alcoholemia del posible conductor"))

```

## 6.

```js

function canDrive (age, bloodOH) {
    let string;
    age >= 18 && bloodOH < 0.25 ? 
    string = "puede conducir" : string = "no puede conducir";
    alert (`Con una edad de ${age} y una tasa de alcoholemia de $
    {bloodOH} mg/l esta persona ${string}`)
}

canDrive (+prompt("Escribe la edad del posible conductor"), 
+prompt("Escribe la tasa de alcoholemia del posible conductor"))

```