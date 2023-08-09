//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals


// Plantillas etiquetadas

/*
 Las etiquetas le permiten analizar literales de plantilla con una función. El primer argumento de una función de etiqueta contiene una matriz de valores de cadena. Los argumentos restantes están relacionados con las expresiones.

 La función de etiqueta puede realizar las operaciones que desee con estos argumentos y devolver la cadena manipulada. (Alternativamente, puede devolver algo completamente diferente, como se describe en uno de los siguientes ejemplos).

 El nombre de la función utilizada para la etiqueta puede ser el que desee.
 */

var persona = "mike"
var edad = 64

function mytag(strings, personaExp, edadExp){
    var str1 = strings[0];
    var str2 = strings[1]
    let ageExp;

    if(edad > 60){
        ageExp = "Viejo"
    }else{
        ageExp = "Joven"
    }

    return `${str1}${personaExp}${str2}${ageExp}`
}

var output = mytag`Esa ${persona} es un ${edad}`
console.log(output)

function template(strings, ...keys){
    return (function(...values){
        let dict = values[values.length -1] || {}
        let result = [strings[0]]
        
        keys.forEach(function(key, i){
            let value = Number.isInteger(key)?values[key]:dict[key];
            result.push(value, strings[i + 1])
        })
        return result.join("")
    })

}

let t1closure = template`${0}${1}${0}`
console.log(t1closure('Y', 'A'))

let t2Closure = template`${0} ${'foo'}!`
console.log(t2Closure('Hello', {foo: 'World'}))

let t3Closure = template`I'm ${'name'}. I'm almost ${'age'} years old.`;
console.log(t3Closure('foo', {name: 'MDN', age: 30}))
console.log(t3Closure({name: 'MDN', age: 30}))
