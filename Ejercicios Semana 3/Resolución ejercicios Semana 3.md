---
header-includes:
 - \usepackage{fvextra}
 - \DefineVerbatimEnvironment{Highlighting}{Verbatim}{breaklines,commandchars=\\\{\}}
---

## 1.

```js

function writtenMonth (monthNumber) {
    if ( monthNumber === 1 ) {
        alert ( "Enero" );
    } else if ( monthNumber === 2 ) {
        alert ( "Febrero" ); 
    } else if ( monthNumber === 3 ) {
        alert ( "Marzo" );
    } else if ( monthNumber === 4 ) {
        alert ( "Abril" );
    } else if ( monthNumber === 5 ) {
        alert ( "Mayo" );
    } else if ( monthNumber === 6 ) {
        alert ( "Junio" );
    } else if ( monthNumber === 7 ) {
        alert ( "Julio" );
    } else if ( monthNumber === 8 ) {
        alert ( "Agosto" );
    } else if ( monthNumber === 9 ) {
        alert ( "Septiembre" );
    } else if ( monthNumber === 10 ) {
        alert ( "Octubre" );
    } else if ( monthNumber === 11 ) {
        alert ( "Noviembre" );
    } else if ( monthNumber === 12 ) {
        alert ( "Diciembre" );
    } else {
        alert ( "Error" );
    }
} 

writtenMonth ( +prompt ( "Escribe el número del mes" ) )

```

## 2

```js

function writtenMonth (monthNumber) {
    switch (monthNumber) {
        case 1 :
            alert ("Enero");
            break;
        case 2 :
            alert ("Febrero");
            break;
        case 3 :
            alert ("Marzo");
            break;
        case 4 :
            alert ("Abril");
            break;
        case 5 :
            alert ("Mayo");
            break;
        case 6 :
            alert ("Junio");
            break;
        case 7 :
            alert ("Julio");
            break;
        case 8 :
            alert ("Agosto");
            break;
        case 9 :
            alert ("Septiembre");
            break;
        case 10 :
            alert ("Octubre");
            break;
        case 11 :
            alert ("Noviembre");
            break;
        case 12 :
            alert ("Diciembre");
            break;
        default :
            alert ("Error");
    }
}

writtenMonth ( +prompt ( "Escribe al número del mes" ) )

```

## 2.1

_Alternativa usando un [diccionario](https://pietschsoft.com/post/2015/09/05/javascript-basics-how-to-create-a-dictionary-with-keyvalue-pairs) (este ejercicio no estaba en la lista, he decidido hacerlo yo para practicar otros conceptos):_

```js

let monthDict = {
    1 : "Enero",
    2 : "Febrero",
    3 : "Marzo",
    4 : "Abril",
    5 : "Mayo",
    6 : "Junio",
    7 : "Julio",
    8 : "Agosto",
    9 : "Septiembre",
    10 : "Octubre",
    11 : "Noviembre",
    12 : "Diciembre",
}

function writtenMonth (monthNumber) {
    if (monthDict[monthNumber] !== undefined ) {
        alert (monthDict[monthNumber])
    } else {
        alert ("Error")
    }
}

writtenMonth (+prompt ( "Escribe un número del mes" ) )

```

## 3.

```js

function writtenWeekday (input) {
    if (input === "L" || input === "l") {
        alert( "Lunes" );
    } else if ( input === "M" || input === "m" ) {
        alert( "Martes" );
    } else if ( input === "X" || input === "x" ) {
        alert ( "Miércoles" );
    } else if ( input === "J" || input === "j" ) {
        alert ( "Jueves" );
    } else if ( input === "V" || input === "v" ) {
        alert ( "Viernes" );
    } else if ( input === "S" || input === "s" ) {
        alert ( "Sábado" );
    } else if ( input === "D" || input === "d") {
        alert ( "Domingo" );
    } else {
        alert ( "Error" );
    }
}

writtenWeekday ( prompt ( "Escribe la inicial de un día de la semana" ) );

```
Puede evitarse la evaluación con el operador lógico `OR` (`||`) mediante la aplicación de los métodos [.toLowerCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) o [toUpperCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) al `prompt` que se pasa como argumento a la función.

## 4.

```js

function writtenWeekday (input) {
    switch (input) {
        case "L":
        case "l":
            alert ( "Lunes" );
            break;
        case "M":
        case "m":
            alert ( "Martes" );
            break;
        case "X":
        case "x":
            alert ( "Miércoles" );
            break;
        case "J":
        case "j":
            alert ( "Jueves" );
            break;
        case "V":
        case "v":
            alert ( "Viernes" );
            break;
        case "S":
        case "s":
            alert ( "Sábado" );
            break;
        case "D":
        case "d":
            alert ( "Domingo" );
            break;
        default :
            alert ( "Error" );
    }
}

writtenWeekday ( prompt ( "Escribe la inicial de un día de la semana " ));

```

## 5.

```js

function numberToMorse (input) {
    switch (input) {
        case 0 :
            alert ( "_ _ _ _ _" );
            break;
        case 1 :
            alert ( "._ _ _ _" );
            break;
        case 2 :
            alert ( ".._ _ _" );
            break;
        case 3 :
            alert ( "..._ _" );
            break;
        case 4 :
            alert ( "...._" );
            break;
        case 5 :
            alert ( "....." );
            break;
        case 6 :
            alert ( "_...." );
            break;
        case 7 :
            alert ( "_ _..." );
            break;
        case 8 :
            alert ( "_ _ _.." );
            break;
        case 9 :
            alert ( "_ _ _ _." );
            break;
        default :
            alert ( "Error" );
    }
}

numberToMorse ( +prompt ( "Escribe un número del 0 al 9 que será traducido a código morse" ) );

```