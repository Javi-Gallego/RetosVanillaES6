
/*RETO 1*/

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



/*RETO 2*/

// let array = [1, 2, 4, 3, 6, 9, 8, 2]

// for (let i = 0; i < array.length*2; i++) {
//     if (array[i] !== " " && array[i] !== "-") {
//         if (array[i] % 2 === 0 && array[i+1] % 2 === 0) {
//             array.splice(i+1, 0, "-")
//         }
//         if ((array[i] % 2 === 1 && array[i+1] % 2 === 0) 
//         || (array[i] % 2 === 0 && array[i+1] % 2 === 1) 
//         || (array[i] % 2 === 1 && array[i+1] % 2 === 1)) {
//             array.splice(i+1, 0, " ")
//         }
//     }
// }

// let stringOfArray = array.join("")

// console.log(stringOfArray)

/*RETO 3*/
//Intenté usar el metodo splice para eliminar los elementos repetidos, pero no funcionó. No sé porqué algunos elementos no se eliminaban y por ejemplo del nº 3 me hacía dos cuentas diferentes y me decía que en vez de estar 5 veces estaba por un lado 4 veces y por otro una vez. Así es menos optimo porque si el 3 se repite 9 veces inserta 9 veces en el array contador, cada vez diciendo que hay un tres menos que el anterior. No es óptimo, pero funciona.

// let repetidos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 2, 3, 5, 7, 9, 3, 3, 3, 9, 3, 3, 3, 3]
// let contador = []
// let repMax = 0
// let indiceMax = 0

// for (let i = 0; i < repetidos.length; i++) {
//     let repeticiones = 1
//     for (let j = i+1; j < repetidos.length; j++) {
//         if (repetidos[i] === repetidos[j]) {           
//             repeticiones++
//             // repetidos.splice(j, 1)
//         }
//     }
//     let objetoCont = { num: repetidos[i], rep: repeticiones }
//     contador.push(objetoCont)
// }

// for (let i = 0; i < contador.length; i++) {
//     if (contador[i].rep > repMax) {
//         repMax = contador[i].rep
//         indiceMax = i
//     }
// }

// console.log("El elemento que más se repite es " + contador[indiceMax].num + " con " + contador[indiceMax].rep + " repeticiones")

/*RETO 4*/

// let string = "Hola, estamos probandoO esto"
// let arrayIntermedio = [] 

// for (let i = 0; i < string.length; i++) {

//     let code = string[i].codePointAt()

//     if (code >= 65 && code <= 90) {
//         code += 32
//     }else if (code >= 97 && code <= 122) {
//         code -= 32        
//     }
    
//     let cambio = String.fromCharCode(code)
    
//     arrayIntermedio.push(cambio)
// }

// string = arrayIntermedio.join("")
// console.log(string)

/*RETO 5*/

// let array = [[1,2,1,24],[8,11,9,4],[7,0,7,27],[7,4,28,14],[3,10,26,7]]

// for(let i= 0; i < array.length; i++) {
//     console.log("Fila " + (i+1))
//     for(let j = 0; j < array[i].length; j++) {
//         console.log(array[i][j])
//     }
// }

/*RETO 6*/

// ¿Cómo saber si un año es bisiesto?
// -Todos los años bisiestos son divisibles entre 4.
// -Aquellos años que son divisibles entre 4, pero no entre 100, son bisiestos.
// -Los años que son divisibles entre 100, pero no entre 400, no son bisiestos.
// -Sin embargo, los años divisibles entre 100 y entre 400 sí que son bisiestos.

// let initYear = 1950
// let finalYear = 2024

// if (InitYear <= finalYear) {
//     for (let i = initYear; i <= finalYear; i++) {
//         if ((i % 4 === 0 && i % 100 !== 0) || (i % 100 === 0 && i % 400 === 0)) {
//             console.log(i + " es un año bisiesto")
//         }
//     }
// }

/*RETO 7*/

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let elemento = 3

// let borrado = (array, elemento) => {
//     let indice = array.indexOf(elemento)
//     if (indice !== -1){
//         array.splice(indice, 1)
//     }
//     return array
// }

// let resultado = borrado(array, elemento)

// console.log(resultado)

/*RETO 8*/

// let array1 = [1, 2, 3, 6, 7, 7, 9, 10]
// let array2 = [1, 2, 2, 14, 11, 13, 10]

// const concatenar = (array1, array2) => {
//     let newarray = array1.concat(array2)
//     let repetidos = []

//     newarray.forEach( element => {
//         if(!repetidos.includes(element)){
//             repetidos.push(element)
//         }
//     })

//     return repetidos
// }

// let resultado = concatenar(array1, array2)

// console.log(resultado)

/*RETO 9*/

// let array = ["Carlos", "Pepe", "Javier", "Silvia"]
// let elemento = "Pepe"
// let elemento2 = "Juan"

// const buscar = (array, elemento) => {
//     array.includes(elemento) ? console.log("El elemento " + elemento + " está en el array") : console.log("El elemento " + elemento + " no está en el array")
// }

// buscar(array, elemento)
// buscar(array, elemento2)

/*RETO 10*/

// const rellenar = (repeticiones, elemento) => {
//     let array = []
//     for (let i = 0; i < repeticiones; i++) {
//         array.push(elemento)
//     }
//     return array
// }

// let resultado = rellenar(3, 4)

// console.log(resultado)

/*RETO 11*/

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const changePos = (array, elem1, elem2) => {
    
//     let pos1 = array.indexOf(elem1)
//     let pos2 = array.indexOf(elem2)
    
//     if (pos1 !== -1 && pos2 !== -1) {
//         array.splice(pos1, 1, elem2)
//         array.splice(pos2, 1, elem1)
//     } else {
//         console.log("Alguno de los elementos no está en el array")
//     }
    
//     return array
// }

// let resultado = changePos(array, 2, 9)

// console.log(resultado)

/*RETO 12*/

// const newArray = (initNumber, long) => {
//     let array = []
    
//     for (let i = 0; i < long; i++) {
//         array.push(initNumber + i)
//     }

//     return array
// }

// let result = newArray(3, 7)

// console.log(result)

/*RETO 13*/

// let array = [1, "Juan", 3, 4, "casa", "perro", 7, 5, 10]

// const addNumber = (array) => {
//     let suma = 0

//     for(element in array) {
//         if(!isNaN(array[element])){
//             suma += array[element]
//         }
//     }

//     return suma
// }

// let result = addNumber(array)

// console.log(result)

/*RETO 14*/

// let string = "Hola, estamos.... probandoO esto. ¿Cuál será la palabra más larga?"

// const longestWord = (string) => {

//     string = string.replaceAll(".", "")
//     string = string.replaceAll(",", "")
//     string = string.replaceAll("?", "")
//     string = string.replaceAll("¿", "")
//     string = string.replaceAll("!", "")
//     string = string.replaceAll("¡", "")
    
//     let array = string.split(" ")
//     let longest = ""

//     for (let i = 0; i < array.length; i++) {
//         if (array[i].length > longest.length) {
//             longest = array[i]
//         }
//     }

//     return longest
// }

// let result = longestWord(string)

// console.log(result)

/*RETO 15*/

// let string = "Hola, estamos.... probandoO esto."

// const vocalCount = (string) => {
//     let count = 0

//     for (let i = 0; i < string.length; i++) {
//         let code = string[i].codePointAt()

//         if(code === 65 || code === 69 || code === 73 || code === 79 || code === 85 || code === 97 || code === 101 || code === 105 || code === 111 || code === 117){
//             count++
//         }
        
//     }

//     return count
// }

// let result = vocalCount(string)

// console.log("Hay " + result + " vocales en el string")

/*RETO 16*/

// const passGen = (long) => {
//     let pass = ""
//     let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.,"

//     for (let i = 0; i < long; i++) {
//         pass += characters[(Math.floor(Math.random() * characters.length))]
//     }

//     return pass
// }

// let result = passGen(10)

// console.log(result)

/*RETO 17*/

// const Reloj = () => {
//     let fecha = new Date()
//     let hora = fecha.getHours()
//     let minutos = fecha.getMinutes()
//     let segundos = fecha.getSeconds()

//     console.log(hora + ":" + minutos + ":" + segundos)
       
//     setTimeout( () => {
//         Reloj()
//     }, 1000)  
// }

// let initHour = 23
// let initMin = 58
// let initSec = 0
// let finalHour = 0
// let finalMin = 0
// let finalSec = 0
// const cuenta = (initHour,initMin,initSec,finalHour,finalMin,finalSec) => {
//     if (initSec === 60) {
//         initSec = 0
//         initMin++
//     }
//     if (initMin === 60) {
//         initMin = 0
//         initHour++
//     }
//     if (initHour === 24) {
//         initHour = 0
//     }

//     if (initHour === finalHour && initMin === finalMin && initSec === finalSec) {
//         console.log("Cuenta atrás finalizada")
//     } else {
//         console.log(initHour + ":" + initMin + ":" + initSec)
//         initSec++
//         setTimeout( () => {
//             cuenta(initHour,initMin,initSec,finalHour,finalMin,finalSec)
//         }, 1000)
//     }
// }

// cuenta(initHour,initMin,initSec,finalHour,finalMin,finalSec)

/*RETO 18*/

// let person = {
//     name: "Javier",
//     age: 40,
//     profession: "programador"
// }

// const objectCont = (object, property) => {

//     return object.hasOwnProperty(property) ? true : false
// }

// let result = objectCont(person, "age")
// let result2 = objectCont(person, "weight")

// console.log(result + " " + result2)

/*RETO 19*/

// const functionAdd = (...args) => {
//     let suma = 0

//     for (let i = 0; i < args.length; i++) {
//         suma += args[i]
//     }

//     return suma
// }

// let result = functionAdd(1, 2, 3, 4, 5)

// console.log(result)

/*RETO 20*/
//Entiendo que si la media de sus notas es mayor que 5, está aprobado y devuelve true, si no, devuelve false.
//Si hay que mirar cada nota independiente dentro del for se podría comparar cada una con 5 y devolver false si es menor, en caso contrario al final de la funcion devolvería un true.

// const passStudent = (...args) => {
//     let total = 0

//     for (let i = 0; i < args.length; i++) {
//         total += args[i]
//     }
    
//     let average = total / args.length
    
//     if (average >= 5) {
//         return true
//     }

//     return false
// }

// let aprobado = passStudent(5, 4, 6, 5, 5)

// console.log(aprobado)

/*RETO 21*/

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const differenceMaxMin = (...args) => {
//     let max
//     let min

//     for (let i = 0; i < args.length; i++) {
//         if (args[i] > max || max === undefined) {
//             max = args[i]
//         }
//         if (args[i] < min || min === undefined) {
//             min = args[i]
//         }
//     }

//     return max - min
// }

// let result = differenceMaxMin(...array)

// console.log(result)

/*RETO 22*/

// let array1 = [ {name: "Javier", age: 40}, {name: "Silvia", age: 45}, {name: "Carlos", age: 38} ]
// let array2 = [ {direction: "Rio Jarama n34", city: "Chiva"}, {direction: "Rio Jarama n34", city: "Chiva"}, {direction: "Popeye n33", city: "Burjassot"} ]

// const objectAdd = (array1, array2) => {
//     let finalArray = []

//     if (array1.length === array2.length) {
//         for (let i = 0; i < array1.length; i++) {
//             let object = {...array1[i], ...array2[i]}
//             finalArray.push(object)
//         }
//     }
    
//     return finalArray
// }

// let result = objectAdd(array1, array2)

// console.log(result)

/*RETO 23*/

// let array1 = [ {name: "Javier", age: 40}, {name: "Silvia", age: 45}, {name: "Carlos", age: 38} ]
// let array2 = [ {direction: "Rio Jarama n34", city: "Chiva"}, {direction: "Rio Jarama n34", city: "Chiva"}, {direction: "Popeye n33", city: "Burjassot"} ]

// const objectAdd = (array1, array2) => {
//     let finalArray = []

//     if (array1.length === array2.length) {
//         for (let i = 0; i < array1.length; i++) {
//             let object = {...array1[i], ...array2[i]}
//             finalArray.push(object)
//         }
//     }
    
//     return finalArray
// }

// let completeArray = objectAdd(array1, array2)

// const getData = (array) => {

//     let newArray = array.map( ({age, ...resto}) => resto)
//     return newArray
// }

// let result2 = getData(completeArray)

// console.log(result2)

/*RETO 24*/

// let names = ["mara", "pAblo", "juan", "MARCOS"]

// const normalize = (array) => {
    
//     let newArray = array.map( element => {
//         element = element.toLowerCase()
//         element = element.charAt(0).toUpperCase() + element.slice(1)
//         return element
//     })

//     return newArray
// }

// let result = normalize(names)

// console.log(result)

/*RETO 25*/

// let personas = [ {nombre: "Mara", edad: 30}, {nombre: "Pablo", edad: 35}, {nombre: "Juan", edad: 26}, {nombre: "Marta", edad: 56}, {nombre: "Rodrigo", edad: 31} ]

// const filterAge = (array, edad) => {
//     let newArray = array.filter( element => {
//         if(element.edad > edad){
//             return element
//         }
//     })
//     return newArray
// }

// let result = filterAge(personas, 30)

// console.log(result)

/*RETO 26*/

// let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const sumArray = (array) => {
//     let suma = 0

//     array.forEach( element => {
//         if(element % 2 === 0){
//             suma += element
//         }
//     })
//     return suma
// }

// let result = sumArray(numberArray)

// console.log(result)

/*RETO 27*/

// let completeName = "Javier Gallego Garrido"

// const initials = (name) => {
//     let array = name.split(" ")
//     let initials = ""

//     array.forEach( element => {
//         initials += element.charAt(0)
//     })

//     return initials
// }

// let result = initials(completeName)

// console.log(result)

/*RETO 28*/

let estudiantes = [ {nombre:"Mara",notas:[10,7,8,8,9]},{nombre:"David",notas:[6,2,5,10,7]},{nombre:"Marcos",notas:[3,5,2,8,5]},{nombre:"Pablo",notas:[10,10,9,8,9]} ]

const aboveNoteAverage = (array, note) => {
    let newArray = array.filter( element => {
        let suma = 0
        for (let i = 0; i < element.notas.length; i++) {
            suma += element.notas[i]
        }
        let average = suma / element.notas.length
        
        return average > note
        
    })
    return newArray
}

let result = aboveNoteAverage(estudiantes, 9).map( element => element.nombre)

console.log(result)