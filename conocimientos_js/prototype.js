function heredaDe(prototypePadre, prototypeHijo){
    var fn = function(){}
    fn.prototype = prototypePadre.prototype
    prototypeHijo.prototype = new fn()
    prototypeHijo.prototype.constructor = prototypeHijo
}

function Persona(nombre, apellido, edad){
    this.nombre = nombre
    this.apelido = apellido
    this.edad = edad
}

Persona.prototype.saludar = function(){
    console.log(`Hola ${this.nombre} ${this.apelido} tienes ${this.edad} años de edad, por lo tanto ${this.mayoriaDeEdad()}`)
}

Persona.prototype.mayoriaDeEdad = function(){
    return this.edad >= 18?'Eres mayor de edad':'no eres mayor de edad'
}

function esDev(nombre, apellido, edad, carrera){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.carrera = carrera
}

heredaDe(Persona, esDev)
esDev.prototype.eresDev = function(){
    return (this.carrera === "Desarrollador"?"Eres Desarrollador":"no eres desarrolador")
}
esDev.prototype.saludar = function(){
    console.log(`Tu nombre es ${this.nombre} ${this.apellido} tienes ${this.edad}, ${this.mayoriaDeEdad()} y ${this.eresDev()}`)
}

var yamid = new Persona("yamid", "gonzalez", 34)
var yago = new esDev("yago", "martinez", 17, "Desarrollador")
var nata = new esDev("natalia", "iguaran", "19", "Ingeniera civil")
yamid.saludar()
yago.saludar()
nata.saludar()
