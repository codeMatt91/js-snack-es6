console.log('JS OK');

/*

SNACK 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array visti oggi in classe.


*/

// # Creo un array 
const students = ['Federico', 'Matteo', 'Pietro', 'Federico', 'Nico', 'Anna', 'Maria', 'Giovanni', 'Marco'];

// const element = [];

// function getElementsByArray(arrays,index1,index2){
   
//    for(let i = 0; i < arrays.length; i++){
//       if(i >= index1 && i <= index2){
//          element.push(arrays[i]);
//       }
//    }
//    return element;
// }

// getElementsByArray(students, 3, 5);

// console.log(element)

// # Ciclo in un array con il Filter 
function getElementsByArray(arrays,a,b){
   const newArray = arrays.filter((item, index) => (index >= a && index <= b) ? true : false)
   return newArray;
};

const newArray = getElementsByArray(students,3,5);

console.log(newArray);