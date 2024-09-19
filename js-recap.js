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
  console.log('CIAO', i)
}

for (let i = 0; i < myArr.length; i++) {
  // a questo punto i sarà SEMPRE un INDICE valido per l'array myArr
  console.log(myArr[i])
}

// forEach, map, filter e reduce
