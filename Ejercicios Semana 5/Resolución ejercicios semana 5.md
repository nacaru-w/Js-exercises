---
title: "Introducción a Javascript I: ejercicios semana 4"
author: Ignacio Casares Ruiz
documentclass: scrartcl
---

## 1.

```js

function passwordTester (password) {
    try {
        if (password.length <= 5) {
            throw `La contraseña no es válida al tener 5 caracteres o menos`
        } else if (password.length >= 12) {
            throw `La contraseña no es válida al tener 12 caracteres o más`
        } else {
            alert("Bienvenido usuario")
        }
    } catch (e) {
        alert(e)
    }
}

passwordTester (prompt('Escribe una contraseña'))

```

## 2.

```js

function ageTester (age) {
    try {
        if (age < 0) {
            throw "No se puede tener una edad negativa"
        } else if (age > 130) {
            throw "La persona más longeva tiene 122 años"
        } else {
            alert(`Tu edad es de ${age} años`)
        }
    } catch (e) {
        alert(e)
    }
}

ageTester (+prompt("Escribe tu edad"))

```