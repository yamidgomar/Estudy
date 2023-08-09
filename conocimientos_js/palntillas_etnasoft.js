/*
var mytemplate = `La donna e mobile,
cual piuma al vento.`;

var arr = ['La', 'donna', 'e', 'mobile']

console.log(mytemplate)
console.info(`My chain joined: ${arr.join(' ')}`)

var collection = [
    {
        id:1,
        title:"lo que el viento se llevo"
    },
    {
        id:2,
        title: "The matrix"
    }
];

console.info(`Book title: ${collection.find(item => item.id === 2 ).title}`)

//Metodos:

var str = 'la donna e mobile';

console.info(`Uppercase: ${str.toUpperCase()}`)

//Matematicas

var val1 = 100,
    val2 = 200;

console.info(`La suma de val1 y val2 es : ${val1 + val2}`)

//Operador ternario:

var book = {
    id:1,
    title:false,
    year:2016
}

console.info(`Book report: ${book.title?book.title:'missing book title!'}`)

//Operadores logicos:

var book = {
    id:1,
    title: "Lo que el viento se llevo.",
    year:false
} 

console.info(`Book year: ${book.year || 'Unkonout!'}`)
*/

//******************* Post procesado de plantillas **************************

//Procederemos viendo de forma aislada la sintaxis y el uso:

//var tag = strings => console.log(strings)

//tag`Hello word!`
// output console: [ 'Hello word!'  ]
// Creamos una function llamada tag (quasi-parser) que recoge un parametro strings y que como salida pinta ese mismo valor.
// Luego llamamos a esa funcion que en lugar de los parentesis habituales lo hacemos con una plantilla de texto(quasi-quotation).
// ‘tag‘ recibe la plantilla como argumento y nos la pinta en pantalla; DEVOLVIENDONOS UN ARRAY.
/*
var tag2 = function(strings){
    return strings
}

var result = tag2`Hola YAMID!, Como estas?`
console.info(result)
*/
//La interpolacion la conseguimos atravez del resto deparametros

/*
var nombre = "yamid gonzalez",
    ciudad = "Cienaga, Magdalena"

var tag = function(strings, ...values){
    console.log(strings.slice());
    console.log(values)
}

console.log(tag`Hola mi nombre es ${nombre} y soy de ${ciudad}`)
*/
//agrupadois todos los argumentos que lleguen a partir del segundo usando el operador arrastre
//SINTAXIS:
//function tag( [ param[ ,param[ , ...param  ]  ]  ]  )

/*
 ******************************* Marcado HTML5 para imágenes *******************************************

function templater(strings, ...keys){
    return function(data){
        let temp = strings.slice()  //slice(start_index, upto_index) extrae una sección de un arreglo y devuelve un nuevo arreglo.
        return temp.join(' ')       //join(delimiter = ',') une todos los elementos de un arreglo en una cadena.
                                      Sin join nos devolvera esto :
                                        [ '<figure>\n    <img alt="',
                                          '" src="',
                                          '">\n    <figcaption>',
                                          '</figcaption>\n</figure>' ]
    }
}

outpu console:

<figure>
    <img alt=" " src=" ">
    <figcaption> </figcaption>
</figure>


function templater(strings, ...keys){
    return function(data){
        let temp = strings.slice()          //creamos una copia de los strings 

                                            //iteramos sobre los valores a interpolar para ir construyendo con ellos la nueva salida:
    
        keys.forEach((key, i ) => {         //forEach() ejecuta la función indicada una vez por cada elemento del array, \
                                            // Sintaxis: arr.forEach(function callback(currentValue, index, array) {tu iterador}).
                                            //{ name: 'Hidetaka Miyazaki',  src: 'Hidetaka_miyazaki.jpg',  caption: 'Japanese God'  }    

            temp[i] = temp[i] + data[key]  A cada elemento del array temp le concatenamos el valor correspondiente de cada key  del objeto data
                                            [ '<figure>\n    <img alt="Hidetaka Miyazaki',
                                                '" src="Hidetaka_miyazaki.jpg',
                                                '">\n    <figcaption>Japanese God',
                                                '</figcaption>\n</figure>' ]"'"' ]
                                                
        })
        return temp.join('')    //Join retorna todo como una cadena.
    }
}

var img1 = {
        name: 'Hidetaka Miyazaki',
        src: 'Hidetaka_miyazaki.jpg',
        caption: 'Japanese God' 
};

var imgTemplate = templater`<figure>
    <img alt="${'name'}" src="${'src'}">
    <figcaption>${'caption'}</figcaption>
</figure>`;

var myTemplate = imgTemplate(img1);
console.info(myTemplate);

//output console:
 <figure>
    <img alt="Hidetaka Miyazaki" src="Hidetaka_miyazaki.jpg">
    <figcaption>Japanese God</figcaption>
</figure>


Si omitimos por un momento la función ‘templater‘, el resto del código es autoexplicativo: hemos creado una plantilla con el marcado HTML de una imagen para más adelante rellenarlo a partir de un objeto dado.

    La magia se cocina precisamente en esa función ‘templater‘, donde primero creamos una copia de los literales y a continuación iteramos sobre los valores a interpolar para ir construyendo con ellos la nueva salida. Finalmente el array obtenido se convierte en una cadena y se devuelve al intérprete.

var pics = [
    {
        name: 'Hidetaka Miyazaki',
        src: 'Hidetaka_miyazaki.jpg',
        caption: 'Japanese God'
            
    }, {
        name: 'Hironobu Sakaguchi',
        src: 'Hironobu_sakaguchi.jpg',
        caption: 'Another Japanese God'
            
    },{
        name:'YosiRobo Moto',
        src:'yosi_robo_moto.jpg',
        caption:'Inventado por mi'
    }
    
];

var templater = function(strings, ...keys){
    return function(data){
        var temp = strings.slice()

        keys.forEach((key, i) => {
            temp[i] = temp[i] + data[key]
        })
        return temp.join('')
    }
}

var imgTemplate = templater`
<figure>
    <img src="${'name'}" alt="${'src'}">
    <figcaption>${'caption'}</figcaption>
</figure>
`
var myTemplate = pics.map(pic => imgTemplate(pic)).join('\n')
console.log(myTemplate)
console.log(String.raw`Hi\n${2+3}!`)
console.log(`Hi\n${2+3}!`)

******************************** Creación dinámica de tablas ******************************************

 la base sería reutilizable para emular un sistema de plantillas clásico a los que estamos más habituados.
parte de (http://clausreinke.github.io/) desarrollada en (https://2ality.com/2015/01/template-strings-html.html)

Empezamos con un marcado semántico en el que definimos nuestra tabla base:

var users = [
    {
            id: 1,
            name: 'Yasumi Matsuno',
            email: 'yasumi_matsuno@example.com',
    }, {
            id: 2,
            name: '<Hiroshi Minagawa>',
            email: 'hiroshi_minagawa@example.com',
            role: 'artist'
    }, {
            id: 3,
            name: 'Akihiko Yoshida',
            email: 'akihiko_yoshida@example.com',
            role: 'artist'
    }
    
];

var tmpl = users => html`
<table>
${users.map(user => html`
    <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>$${user.role}</td>
    </tr>
`)}
</table>
`

function html(literalSections, ...substs){
    let raw = literalSections.raw;
    let result = ''
    
    substs.forEach((subst, i) => {
        let lit = raw[i];
        
        if(Array.isArray(subst)){
            subst = subst.join('');
        } 
        
        if(lit.endsWith('$')){
            subst = isNaN(subst)?htmlEscape(subst):subst;
            lit = lit.slice(0, -1);        
        }

        result += lit;
        result += subst
    })
    result += raw[raw.length - 1];
    return result;
}

function htmlEscape(str){

}


console.info(tmpl(users));
*/

