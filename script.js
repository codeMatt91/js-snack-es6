console.log('JS OK!');

/*

Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare ain console la bici con peso minore utilizzando destructuring e template literal

*/

// # Costruisco l'array 
const bikes = [
   {name: 'Orbea', peso: 11},
   {name: 'Pinarello', peso: 7},
   {name: 'Speedoo', peso: 5},
   {name: 'Bianchi', peso: 6},
   {name: 'Merida', peso: 10},
];

// # Ciclo per estrapolare tutti i pesi in un array 

let min = 0;
for (let i = 0; i < bikes.length; i++) {
const currentWeight = bikes[i].peso;
if (i == 0) {
    min = currentWeight;
}
if (currentWeight < min) {
    min = currentWeight;
}
};
console.log(min);


// # Ciclo con funzione Math.min 
// let light = [];
// for(let i = 0; i < bikes.length; i++){

//    let {weight} = bikes[i];
//    light.push(weight);
// }
// console.log(light);

// // # Determino il più piccolo 
// const min = Math.min(...light);
// console.log(min);