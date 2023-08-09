var collection = [
    {
        name:"imagen de lorem",
        src:"./imagenlorem.jpg",
        caption:"Esta es una imagen cualquiera"
    },{
        name:"imagen dos",
        src:"./imagendos.jpg",
        caption:"caption para la segunda imagen"
    },{
        name:"imagen tres",
        src:"./imagentres.jpg",
        caption:"caption para la tercera imagen"
    }
]

var newobjeto = collection[0]
var templater = function (strings, ...keys){
    return function(data){
       var tmp = strings.slice()
        keys.forEach((key, i) => {
            tmp[i] = tmp[i] + data[key]
        })

        return tmp.join('').trim()
    }
}

var imgtemplate = templater`
        <figure>
            <img src="${'src'} alt="${'name'}">
            <figurecaption>${'caption'}</figurecaption>
        </figure>
`
var resultado = collection.map((collec) => imgtemplate(collec)).join('\n')
var result = `
<main>
    <h1>Peliculas famosas.</h1>
    <div class="recuadro">
        ${resultado}
    </div>
</main>
`
console.log(result)
