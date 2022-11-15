// Ejercicio 3: Ignacio Casares Ruiz

/*
Escribir un código que calcule, dado el sueldo del empleado, lo que tiene que cobrar sabiendo que se le tiene que aplicar al sueldo una retención del 20%.
*/


let sueldoInicial = +prompt("Inserte el valor inicial del sueldo para calcular el sueldo con la retención", "Escriba el valor aquí en €");

try {
    if (isNaN(sueldoInicial)) {
        throw "Error: no se ha insertado un valor numérico";
    } else if (sueldoInicial < 0) {
        throw "Error: el sueldo no puede poseer un valor negativo";
    }
    else {
        let retencion = (sueldoInicial * 0.2).toFixed(2);
        let sueldoFinal = (sueldoInicial - retencion).toFixed(2);
        alert(`El sueldo inicial es de ${sueldoInicial.toFixed(2)} €, tras aplicársele la retención del 20%, equivalente a ${retencion} €, el sueldo final es de ${sueldoFinal} €`);
    }
} catch (err) {
    alert(err);
}
