# Ejercicios semana 2

__Por Ignacio Casares Ruiz__

## 1.
```js
function euroToPesetaConverter (euros) {
    let pesetas = +euros * 166.386
    alert(`${euros} euros equivalen a ${pesetas} pesetas`)
}

euroToPesetaConverter(+prompt("Introduce el número en euros"))
```

## 2.

```js
function toTheThree(input) {
    let cubo = (input**3)
    alert(`El cubo de ${input} es ${cubo}`)
}

toTheThree(+prompt("Introduce el número que quieres elevar al cubo"))
```

## 3.

```js
function operations(input1, input2) {
    alert(`La suma de los números es ${input1 + input2}`)
    alert(`La resta de los números es ${input1 - input2}`)
    alert(`La multiplicación de los números es ${input1 * input2}`)
    alert(`La división de los números es ${input1 / input2}`)
}

operations(+prompt("Escriba el primer número"), +prompt("Escriba el segundo número"))
```

## 4.
Con `else`:
```js
function posOrNeg(input) {
    if ( input >= 0 ) {
        alert( "El número es positivo" );
    } else {
        alert( "El número es negativo" );
    }
}

posOrNeg(+prompt("Introduce un número"));
```
Sin `else`:
```js
function posOrNeg(input) {
    input >= 0 ? alert("El número es positivo") : alert("El número es negativo");
}

posOrNeg(+prompt("Introduce un número"));

```

## 5.

```js

function parImpar(input) {
    input % 2 == 0 ? alert("El número es par") : alert("El número es impar")
}

parImpar(+prompt("Escribe un número"))

```