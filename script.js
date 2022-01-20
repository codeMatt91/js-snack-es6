console.log('JS OK!');

/*

Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare ain console la bici con peso minore utilizzando destructuring e template literal

*/

// # Costruisco l'array 
const bikes = [
   {name: 'Orbea', weight: 11},
   {name: 'Pinarello', weight: 7},
   {name: 'Speedoo', weight: 5},
   {name: 'Bianchi', weight: 6},
   {name: 'Merida', weight: 10},
];

let light = [];
for(let i = 0; i < bikes.length; i++){

   let {weight} = bikes[i];
   light.push(weight);
}
console.log(light);
const min = Math.min(...light);
console.log(min);
