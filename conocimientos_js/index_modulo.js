/*var Cat = require('./modulo')
const r = 3 

console.log(`El circulo con radio de ${r}, tiene:
*Un area de ${circle.area(r)} y 
*Una circunferencia de ${circle.circunferencia(r)}`)
console.log(Cat.makeSound())

*/
var template = require('./modulo')

var img = {
    name:"The matrix",
    src:"./imagenes/the_matrix.jpg",
    caption:"Pelicula hacerca la matrix"
}
var collection = [
    {
        nombre:"El hombre del sombrero",
        autor:"Vincent vangod",
        year:1940
    },{
        nombre:"La casa en el aire",
        autor:"Rafael Escalona",
        year:1970
    },{
        nombre:"La casa del diablo",
        autor:"Yago Martinez",
        year:1999
    }
];

var imgTemplate = template.templater`<figure>
    <img src="${'src'}" alt="${'name'}">
    <figcaption>${'caption'}</figcaption>
</figure>`

console.log(imgTemplate(img))

var cuadrosTemplate = template.templater`<div>
    <h3>${'nombre'}</h3>
    <p>Autor: ${'autor'}</p>
    <p>Año: ${'year'}</p>
</div>`

let resultadoCuadros = collection.map(collec => cuadrosTemplate(collec)).join('\n') 

console.log(`<main>
        <h3>Cuadros famosos</h3>
        ${resultadoCuadros}
</main>`)
