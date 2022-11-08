# Ejercicios semana 1

__Por Ignacio Casares Ruiz__

## 1.

* Cálculo mental:

        a = 42
        b = 4
        c = 30

* Resultados en consola de Firefox: los mismos

## 2.

* Cálculo mental:

        a = 16
        b = 35
        c = 62
        d = 70

* Resultados en la consola de Firefox: los mismos

## 3.

```js
let n = 3
alert(n)
alert(n*2)
alert(n*3)
alert(n**2)
```

## 4.

```js
function perimeterAndArea( side1, side2 ) {
    perimeter = ( side1 + side2 ) * 2
    area = side1 * side2

    alert( `El perímetro es ${perimeter}` )
    alert( `El área es ${area}` )
}

perimeterAndArea( 20, 80 )
perimeterAndArea( +prompt( 'Inserte el valor de un lado' ), 
+prompt( 'Inserte el valor del otro lado' ) )
```

## 5.

```js
function lengthAndArea ( r ) {
    let length = 2 * 3.1416 * r
    let area = 3.1416 * ( r ** 2 )

    alert( length ) 
    alert( area )
}

lengthAndArea ( +prompt( 'Inserte el valor del radio') )
```

## 6.

```js
function monthlySalaryCalculator( hours, hourlyWage ) {
    alert ( hours * hourlyWage )
}

monthlySalaryCalculator ( 160, 12 )
monthlySalaryCalculator ( +prompt( 'Indique el número de horas trabajadas' ), 
+prompt( 'Indique el precio por hora trabajada' ) )
```

## 7.

```js
function varSwap( x, y ) {
    let storedVar = x
    alert ( x = y )
    alert ( y = storedVar )
}

varSwap( "Hola", 3 )
```