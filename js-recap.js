// RECAP JS :)

// variabile
// una variabile è un "contenitore" per un valore
// si inizializzano in JS con le parole "let" e "const"

let myVariable = 100
const anotherVariable = 'costante'

let boh // ha valore undefined

myVariable = 101
// anotherVariable = 'nuovo valore' // dà errore
console.log('myVariable', myVariable)

// cosa si può salvare in una variabile?
// quali sono i TIPI DI DATO in JS?

// tipi di dato primitivi:
// string -> 'ciao', "hello"
// number -> 4, 4.56, 10000000
// boolean -> true/false
// undefined -> il valore non è stato definito
// null -> rappresenta l'esplicita ASSENZA di un valore

// JS è un linguaggio "weakly typed" -> debolmente tipizzato
let x = true // il tipo è booleano
// x = 'stefano' // cambio il tipo in stringa <-- brutto da vedere (e da fare!)
// volete salvare un tipo di dato diverso? create una nuova variabile!
console.log(typeof myVariable) // non stampa 101, ma "number"

const teacherName = 'Stefano'
// teacherName.length <-- 7
console.log(teacherName.slice(0, 3)) // 'Ste'
console.log(teacherName.toUpperCase()) // 'STEFANO'

// tipi di dato "complessi"
// array -> lista di valori, separati da virgola es. [30, 40, 50]
// oggetti

// array
// un array rappresenta una lista, collezione, elenco di valori
// dentro un array è possibile salvare qualsiasi tipo di dato, anche misti
// ha lo scopo di memorizzare in una sola variabile più valori insieme
const myArr = ['caterina', 'andrea', 'federico', 'giacomo']
myArr.push('alessandra') // aggiungo un nuovo elemento dopo "giacomo"
myArr.pop() // elimino l'ultimo elemento dell'array, in questo "alessandra"
myArr.unshift('erika') // aggiungo un nuovo elemento in cima all'array
myArr.shift() // elimino il primo elemento dell'array

console.log('myArr', myArr) // come all'inizio!

// CICLO
// un ciclo è un'istruzione che permette di RIPETERE l'esecuzione di una determinata
// quantità di righe di codice un numero determinato/indeterminato di volte

// il ciclo while ri-esegue una quantità di istruzione fino a che la sua condizione
// preimpostata NON si verifica più

let dice // undefined

while (dice !== 6) {
  // mi voglio fermare quando il dado fa 6
  // ri-entreremo nel ciclo while se random è > 3
  console.log('ESECUZIONE DEL CICLO WHILE')
  dice = Math.ceil(Math.random() * 6) // da 1 a 6
}

for (let i = 0; i < 10; i++) {
  // console.log('CIAO', i)
}

for (let i = 0; i < myArr.length; i++) {
  // a questo punto i sarà SEMPRE un INDICE valido per l'array myArr
  console.log(myArr[i])
}

// forEach, map, filter e reduce
// forEeach esegue una lista di istruzioni per ogni elemento dell'array
// NON ha un valore di ritorno!
myArr.forEach((element, i) => {
  console.log('FOREACH', element, i) // viene stampato 4 volte
  // i sarebbe l'indice dell'elemento, ce l'avete su forEach, map e filter
})

// map serve a TRASFORMARE un array in un NUOVO ARRAY
const newArr = myArr.map((element) => {
  return element.charAt(0).toUpperCase()
})
console.log('newArr', newArr)

// filter serve a FILTRARE un array
// filter ritorna sempre un NUOVO ARRAY, la cui lunghezza è al max pari alla lunghezza
// dell'array originale
const numbersArr = [5, 78, 2.4, 67, 1]

const justAbove10 = numbersArr.filter((element) => {
  // if (element > 10) {
  //   return true
  // } else {
  //   return false
  // }
  return element > 10
})
console.log('justAbove10', justAbove10)

// reduce
// reduce TRASFORMA un ARRAY in un NUMERO
const total = myArr.reduce((acc, element) => {
  return acc + element.length
}, 0)

console.log('TOTAL', total)

const fourButtons = document.querySelectorAll('section > div > button')
console.log(fourButtons)

// fourButtons è un ARRAY di 4 bottoni
fourButtons.forEach((element, i) => {
  // element è il singolo bottone!
  element.addEventListener('click', function () {
    console.log(element)
  })
})

const myForm = document.getElementById('main-form')
myForm.addEventListener('submit', function (e) {
  e.preventDefault()
  console.log('INVIO IL FORM')
})

// OBJECTS
// gli oggetti in JS sono delle collezioni di COPPIE chiave:valore

const school = {
  name: 'EPICODE',
  courseLengthInMonths: 6,
  'teacher-name': 'Stefano',
  epic: true,
}

// recuperiamo i valori dell'oggetto
// DOT NOTATION
school.name // 'EPICODE'

// SQUARE BRACKETS NOTATION
school['teacher-name'] // 'Stefano'

const variable = 'epic'

school.variable // undefined
school[variable] // -> school['epic'] -> true

school.market = 'Italy'
delete school.market

let a = 10
let b = a // 10

a = 20
console.log(b) // 10

let objA = {
  name: 'Mario',
}

let objB = objA // :O
console.log(objB.name) // 'Mario'

objA.name = 'Luigi'
console.log(objB.name) // ?

const realObjB1 = Object.assign({}, objA) // VERA COPIA DI objA
const realObjB2 = {
  ...objA, // tutte le proprietà di objA
} // VERA COPIA DI objA
