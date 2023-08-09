/*var arr = ['la', 'donna', 'e', 'mobile']

console.log(`Mi texto dice: ${arr.join(' ')}`)

var collection = [ 
    {
        id: 1,
        title:'Lo que el viento se llevo'
    },{
        id: 2,
        title:'The matrix'
    }
]

var constante = `El titulo del libro 2 es : ${collection.find(item => item.id  === 2).title}`

console.log(constante)


var constante2 = "La donna e mobile."

console.info(`Metodo toUpercase: ${constante2.toUpperCase()}`)

var valor1 = 100;
var valor2 = 200;

console.log(`La suma de valor1 y valor2 es: ${valor1 + valor2}`)

var book = {
    id: 1,
    title:null,
    //title:"Lo que el viento se llevo.",
    year: 1930
}

//console.info(`Hacepta el operador ternario ? :${book.title?book.title:"missing book title!."}`)

console.info(`Hacepta operadores logicos || : ${book.title || 'Uncanout!.'}`)
*/

//**************** POST procesado de plantillas ********************* POST procesado de plantillas ******************tpmvar img1 = {

/*var collection = [
    {
        name:'Hirohito Tocawa',
        src:'./Hirohito_Tocawa.jpg',
        caption:"Imagen japonesa"
    },{
        name:'Pedro coral',
        src:'./Pedro_coral.jpg',
        caption:'Imagen colombiana'
    },{
        name:'Salvador gaviota',
        src:'./Salvador_gaviota.jpg',
        caption:'No se de donde es'
    }
] 
*/
var collection = [
    {
        nombres:"Yamid Alejandro",
        apellidos:"Gonzalez Martinez",
        tipoDocumento:'cedula',
        nDocumento:1083456452,
        dia:'21 de febrero del 2020',
        lugarEntrega:'Justo y bueno calle 20',
        hora:'4:00',
        jornada:'P.M.'
    },{
        nombres:"Rodrigo Alejandro",
        apellidos:"Mellado Cervantes",
        tipoDocumento:'cedula',
        nDocumento:12626196,
        dia:'22 de febrero del 2020',
        lugarEntrega:'Justo y bueno carrera 13',
        hora:'10:00',
        jornada:'A.M.'
    }
]

var templater = (strings, ...keys) => {
    return function(data){
        var tmp = strings.slice();

        keys.forEach((key, i) => {
            tmp[i] = tmp[i] + data[key]
        })

        return tmp.join('')
    }
}

var mensajeTemplate = templater`Buenas tardes Señor(a): ${'nombres'} ${'apellidos'}. 
Si su numero de cedula es ${'nDocumento'}, usted a sido beneficiario del programa Mercados Solidarios de la Gobernacion del Magdalena. 
Favor hacercarse el dia ${'dia'}, a las ${'hora'} ${'jornada'}, al ${'lugarEntrega'}, para reclamar su beneficio.
Si no es titular de la cedula, favor astenerce de asistir.`
/*var imgTemplate = templater`<figure>
    <img src="${'src'}" alt="${'name'}">
    <figcaption>${'caption'}</figcaption>
</figure>`
*/
//var resultado = collection.map(collec => imgTemplate(collec)).join('\n')
var resultado = collection.map(collec => mensajeTemplate(collec)).join('\n\n')
console.log(resultado)
