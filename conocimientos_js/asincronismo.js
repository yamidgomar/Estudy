/*console.log('a')
setTimeout(() => console.log('b') ,10000)
for(let i = 0;i < 100000; i++){
    console.log(i)
}
console.log('c')
*/

//CallBack

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opcs = {crossDomain:true}
const onPeopleResponse = function(people){
    console.log(people.name)
}

function obtenerPersonaje(id, callback){
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(URL, opcs, onPeopleResponse)
    if(callback){
        callback()
    }
}

//Por el asincronismo de JS. No sabemos en qué orden nos llegarán las respuestas, esto depende del servidor y de cada uno de los requests

obtenerPersonaje(1, function(){
    obtenerPersonaje(2, function(){
        obtenerPersonaje(3)
    })
})

