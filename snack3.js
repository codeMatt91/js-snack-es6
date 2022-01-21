console.log('JS OK');

/*

SNACK 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array visti oggi in classe.


*/

// # Creo un array 
const clubs = [
   {name: 'Milan', points: 0, fouls: 0},
   {name: 'Roma', points: 0, fouls: 0},
   {name: 'Inter', points: 0, fouls: 0},
   {name: 'Napoli', points: 0, fouls: 0},
   {name: 'Atalanta', points: 0, fouls: 0},
   {name: 'Cagliari', points: 0, fouls: 0},
   {name: 'Bologna', points: 0, fouls: 0},
   {name: 'Sampdoria', points: 0, fouls: 0},
];


// # Ciclo for per girare nell'array 
for(let i = 0; i < clubs.length; i++){
   let randomPoint = Math.floor(Math.random() * 100) + 1;
   let randomFoul = Math.floor(Math.random() * 50) + 1;
   clubs[i].points = randomPoint;
   clubs[i].fouls = randomFoul;
}

console.log(clubs);

function getElementsByArray(array,index1,index2){

}