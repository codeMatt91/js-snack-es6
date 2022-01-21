console.log('JS OK!');

/*

SNACK 4
Abbiamo un elenco degli studenti di una facoltà, identificati da id, nome e somma totale dei loro voti di esame...
1. dobbiamo creare una lista contenente delle targhe (stringhe) con il loro nome in maiuscolo
ES (marco de iulio => Marco de iulio);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

BONUS  nei nomi sulle targhe l'iniziale di ogni parola deve essere maiuscola
ES.: (marco de iulio  => Marco De Iulio)
*/

// #Creo un array di oggetti 

const students = [
   {name: 'matteo imbimbo', id: 122, votExams:25},
   {name: 'mario rossi', id: 155, votExams:60},
   {name: 'anna neri', id: 23, votExams:123},
   {name: 'mattia grigi', id: 45, votExams:245},
   {name: 'elisabetta bianchi', id: 56, votExams:90},
   {name: 'alex mainardi', id: 200, votExams:40},
   {name: 'miriam bernardi', id: 30, votExams:39},
   {name: 'beatrice di carlo', id: 5, votExams:122},
   {name: 'federico iodice', id: 230, votExams:70},
   {name: 'antonio di bartolomei', id: 145, votExams:37},
];

// # Punto numero 1 
const newStudents = students.map((student) => {
   
   const lettFirst = student.name.charAt(0).toUpperCase();
   const lettRest = student.name.substring(1).toLowerCase();
   return lettFirst + lettRest;

});

console.log(newStudents);

// # Punto numero 2 
const newVote = students.filter((student) => student.votExams >= 70 ? true : false);

console.log(newVote);

// # Punto numero 3
const newStudents2 = students.filter((student) => (student.votExams >= 70 && student.id >= 120) ? true : false);

console.log(newStudents2);

// # BONUS!!!! 
students.forEach((student) => {
   const namesNewStudent = student.name.split(' ');
   namesNewStudent.forEach((student,index) => {
      namesNewStudent[index] = student.charAt(0).toUpperCase() + student.substring(1).toLowerCase();
   })
   const newFrase = namesNewStudent.join(' ');
   console.log(newFrase);
})