console.log('JS OK!');

/*

SNACK 4
Abbiamo un elenco degli studenti di una facoltà, identificati da id, nome e somma totale dei loro voti di esame...
1. dobbiamo creare una lista contenente delle targhe (stringhe) con il loro nome in maiuscolo
ES (marco de iulio => Marco de iulio);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

*/

const students = [
   {name: 'matteo', id: 122, votExams:25},
   {name: 'mario', id: 155, votExams:60},
   {name: 'anna', id: 23, votExams:123},
   {name: 'mattia', id: 45, votExams:245},
   {name: 'elisabetta', id: 56, votExams:90},
   {name: 'alex', id: 200, votExams:40},
   {name: 'miriam', id: 30, votExams:39},
   {name: 'beatrice', id: 5, votExams:122},
   {name: 'federico', id: 230, votExams:70},
   {name: 'antonio', id: 145, votExams:37},
];

const newStudents = students.map((student) => {
   
   const lettFirst = student.name.charAt(0).toUpperCase();
   const lettRest = student.name.substring(1).toLowerCase();
   return lettFirst + lettRest;

});

console.log(newStudents);

const newVote = students.filter((student) => student.votExams >= 70 ? true : false);

console.log(newVote);

const newStudents2 = students.filter((student) => (student.votExams >= 70 && student.id >= 120) ? true : false);

console.log(newStudents2);