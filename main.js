// 1. a və b ədədimiz var. Əgər a b-dən böyükdürsə, consolda
//  "a b-den boyukdur" yazılsın, bərabərdirsə "beraber", digər
//   halda isə "a b den kicikdir";
// let a = 6;
// let b = 5;
// if (a > b) {
//     console.log("a b den boyukdur");
// } else if (a == b) {
//     console.log(" a b-e beraberdir");
// } else {
//     console.log("a b den kicikdir");
// }
// -------------------------------------------------------------
// Aşağıdakı tasklar bu array üzərindən işləniləcək:

let students = [

    { id: 1, name: "Ali", surname: "Alisoy", age: 20, grade: 95 },

    { id: 2, name: "Vusala", surname: "Nabiyeva", age: 34, grade: 77 },

    { id: 3, name: "Aliya", surname: "Gurbanzade", age: 14, grade: 98 },

    { id: 4, name: "Sabir", surname: "Nuruyev", age: 15, grade: 54 },

    { id: 5, name: "Mehman", surname: "Heydarov", age: 22, grade: 100 },

    { id: 6, name: "Sevana", surname: "Mammadli", age: 41, grade: 35 },

    { id: 7, name: "Ilham", surname: "Babayev", age: 24, grade: 95 },

    { id: 8, name: "Namiq", surname: "Gulahmedov", age: 20, grade: 95 },

    { id: 9, name: "Aygun", surname: "Kazimova", age: 24, grade: 100 }

]
// --------------------------------------------------------------------------------
// 2. students arrayində indeksi cüt olan tələbələri yeni arrayə əlavə edib, yeni yaranmış arrayi consolda yazdırın;
// let newArr = [];
// for (i = 0; i < students.length; i++) {
//     if (students[i].id % 2 === 0) {
//         newArr.push(students[i]);
//     }
// }
// console.log(newArr);
// ------------------------------------------------------------------------------
// 3.  students arrayində id-i tək olan tələbələrin adlarını consolda yazdırın.
// let newArr = [];
// for (i = 0; i < students.length; i++) {
//     if (students[i].id % 2 === 1) {
//         newArr.push(students[i].name);
//     }
// }
// console.log(newArr);
// ----------------------------------------------------------------------------------
// 4. students arrayinda yaşı 20+ olan tələbələri yeni arrayə əlavə edib, yeni yaranmış arrayi consolda yazdırın;
// let newAge = [];

// for (i = 0; i < students.length; i++) {
//     if (students[i].age > 20) {
//         newAge.push(students[i].name);
//     }
// }
// console.log("yasi 20+ olan telebeler:")
// console.log(newAge)
// ----------------------------------------------------------------------------------
// 5. students arrayinda id-i cüt və grade-i 90+ olan tələbələri  yeni arrayə əlavə edib, yeni yaranmış arrayi consolda yazdırın;
// let newGrade = [];

// for (i = 0; i < students.length; i++) {
//     if (students[i].id % 2 === 0 && students[i].grade > 90) {
//         newGrade.push(students[i].name);
//     }
// }
// console.log("id-i cüt və grade-i 90+ olan tələbələri:")
// console.log(newGrade);
// ----------------------------------------------------------------------------------
// 6.  students arrayinda grade-i 100 və ya 95-ə bərabər olan tələbələrin adlarını yeni arrayə əlavə edib, 
// yeni yaranmış arrayi consolda yazdırın;
// let = newGrade = [];
// let = oldGrade = [];


// for (i = 0; i < students.length; i++) {
//     if (students[i].grade == 95) {
//         newGrade.push(students[i].name);
//     } else if (students[i].grade == 100) {
//         oldGrade.push(students[i].name);
//     }
// }
// ---------------------------------------------------------------------
// burda 95 ve ya 100 olan telebe sayi
// let total = [];

// for (i = 0; i < students.length; i++) {
//     if (students[i].grade == 95 || students[i].grade == 100) {
//         total.push(students[i].name);
//     }
// }

// console.log("Grade'i 95 veya 100 olan telebeler:");
// console.log(total);

// console.log(" grade i 100 olan telebeler : ");
// console.log(oldGrade);
// console.log(" grade i 95 olan telebeler : ");
// console.log(newGrade);
