/*Transformar declaracion de función a una función de expresion

Declaración de función

function example(a, b, c){
    return a+b+c
    } 

Función de expresion*/

const example = function (a, b, c) {
    return a + b + c
}

/*verificación en consola*/
let total = example(2, 4, 6)
console.log(total)