/*const PI = 3.14159265359;

exports.area = radius => (radius ** 2) * PI
exports.circunferencia = radius => (2 * radius) * PI
*/

//https://adrianmejia.com/getting-started-with-node-js-modules-require-exports-imports-npm-and-beyond/

/*class Cat{
    makeSound(){
        return `${this.constructor.name}: Meowww`;  
    }
}


var cat = new Cat() 
module.exports = cat*/

class Template{
    templater(strings, ...keys){
         return function(data){
            var tmp = strings.slice()

            keys.forEach((key, i) => {
                tmp[i] = tmp[i] + data[key] 
            })
            
             return tmp.join('')
        }
    }
}


var template = new Template()
module.exports = template;
