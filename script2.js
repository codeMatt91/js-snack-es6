console.log('JS OK!');

/*

Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

*/

// # Creo un array 
const clubs = [
   {name: 'Milan', points: 0, fouls: 0},
   {name: 'Roma', points: 0, fouls: 0},
   {name: 'Inter', points: 0, fouls: 0},
   {name: 'Napoli', points: 0, fouls: 0},
   {name: 'Atalanta', points: 0, fouls: 0},
];


// # Ciclo for per girare nell'array 
for(let i = 0; i < clubs.length; i++){
   let randomPoint = Math.floor(Math.random() * 100) + 1;
   let randomFoul = Math.floor(Math.random() * 30) + 1;
   clubs[i].points = randomPoint;
   clubs[i].fouls = randomFoul;
}

console.table(clubs);

for(let j = 0; j < clubs.length; j++){

   const nome = clubs[j].name;
   const falli = clubs[j].fouls;
   
   console.table(nome, falli);
}