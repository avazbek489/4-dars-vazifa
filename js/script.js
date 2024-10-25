// // // Symbol ga oid.
// let arr = Symbol("arr");
// let car = {
//   model: "Pagani",
//   year: 2024,
//   color: "white",
//   [arr]: { owner: "John", age: 38 },
// };
// console.log(car[arr]);
// console.log(Object.keys(car));
// console.log(Object.getOwnPropertySymbols(car));

// // // Rekursiv funksiyaga oid
// // 1-SAVOL JAVOBI
// function sum(num) {
//   if (num <= 1) {
//     return num;
//   } else {
//     return num + sum(num - 1);
//   }
// }
// console.log(sum(13));

// // 2-SAVOL JAVOBI
// function factorial(num) {
//   if (num == 0 || num == 1) {
//     return 1;
//   } else {
//     return num * factorial(num - 1);
//   }
// }
// console.log(factorial(5));

// // 3-SAVOL JAVOBI
// function fibonaci(num) {
//   if (num == 0) {
//     return 0;
//   }
//   if (num == 1) {
//     return 1;
//   }
//   return fibonaci(num - 1) + fibonaci(num - 2);
// }
// console.log(fibonaci(10));

// // // Class ga oid.
// class Car {
//   constructor(name, color, model, year) {
//     this.name = name;
//     this.color = color;
//     this.model = model;
//     this.year = year;
//   }
// }
// let user = new Car("Pagani", "black", "Zonda", 2024);
// console.log(user);
