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
// // 1-SAVOL JAVOBI
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

// // 2-SAVOL JAVOBI
// class Rectangle {
//   constructor(length, width) {
//     this.length = length;
//     this.width = width;
//   }
//   S() {
//     return this.length * this.width;
//   }
// }
// let sum = new Rectangle(3, 2);
// console.log(sum.S());
// // // // String metodlariga oid.
// // // ### 1. `charAt`
// // 1-SAVOL JAVOBI
// function charAtIndex(str, i) {
//   return i < 0 || i >= str.length ? "" : str.charAt(i);
// }
// console.log(charAtIndex("Hello ! world", 11));

// // 2-SAVOL JAVOBI
// function lastCharAtIndex(str) {
//   return str.charAt(str.length - 1);
// }
// console.log(lastCharAtIndex("Hello JS"));
// // 3-SAVOL JAVOBI
// function insStr(str) {
//   for (let i = 0; i < str.length; i++) {
//     console.log(str.charAt(i));
//   }
// }
// insStr("HELO🔥");
// // // ### 2. `charCodeAt`
// // 1-SAVOL JAVOBI
// function unicodeCharAt(str, i) {
//   return str.charCodeAt(i);
// }
// console.log(unicodeCharAt("Salom", 3));

// // 2-SAVOL JAVOBI
// function unicodeValue(str) {
//   let res = [];
//   for (let i = 0; i < str.length; i++) {
//     res.push(str.charCodeAt(i));
//   }
//   return res;
// }
// console.log(unicodeValue("Salom"));
// // 3-SAVOL JAVOBI
// function unicodeStringthreeIndex(str, ind) {
//   for (let i = ind + 1; i <= ind + 3; i++) {
//     if (i < str.length) {
//       console.log(str.charCodeAt(i));
//     }
//   }
// }
// unicodeStringthreeIndex("Salom", 1);
// // // ### 3. `at`
// // 1-SAVOL JAVOBI
// function atIndex(str, i) {
//   return str.at(i);
// }
// console.log(atIndex("Hello", 2));
// // 2-SAVOL JAVOBI
// function lastAtIndex(str) {
//   return str.at(-1);
// }
// console.log(lastAtIndex("Lorem"));
// // 3-SAVOL JAVOBI
// function endIndexAt(str, i) {
//   return str.at(-i);
// }
// console.log(endIndexAt("Lorem", 2));

// // // ### 4. `slice`
// // 1-SAVOL JAVOBI
// function sliceMedium(str) {
//   let staRes = Math.floor(str.length / 4);
//   let endRes = Math.ceil((str.length * 3) / 4);
//   return str.slice(staRes, endRes);
// }
// console.log(sliceMedium("JavaScriptda"));

// // 2-SAVOL JAVOBI
// function strSlice(str) {
//   return str.slice(0,3);
// }
// console.log(strSlice("Hello"));
// Domla aynan shu misolni bilmay turgan edim 0,3 ni keyin chgpt dan qande ishlaydi deb soradim kodni ozim yozganman.
// // 3-SAVOL JAVOBI
// function strSlice(str) {
//   return str.slice(-5);
// }
// console.log(strSlice("Hello"));

// // // ### 5. `substring`
// // 1-SAVOL JAVOBI
// function subString(str, startIndex, endIndex) {
//   return str.substring(startIndex, endIndex);
// }
// console.log(subString("Hello ! JS", 0,5));

// // 2-SAVOL JAVOBI
// function first4SubString(str) {
//   return str.substring(0, 4);
// }
// console.log(first4SubString("JavaScript"));

// // 3-SAVOL JAVOBI
// function first5SubString(str) {
//   return str.substring(4);
// }
// console.log(first5SubString("JavaScript"));

// // // ### 6. `substr`
// // 1-SAVOL JAVOBI
// let str = "Najot ta'lim";
// console.log(str.substr(4, 3));
// // 2-SAVOL JAVOBI
// let str = "Najot talim";
// let res = Math.floor(str.length / 2);
// console.log(str.substr(res, 6));

// // 3-SAVOL JAVOBI
// let str = "Najot talim";
// console.log(str.substr(-4));

// // // ### 7. `trim`, `trimStart`, `trimEnd`
// // 1-SAVOL JAVOBI
// let input = prompt("Sozni kiriting:");
// console.log(input.trim());
// // 2-SAVOL JAVOBI
// let input = prompt("Sozni kiriting:");
// console.log(input.trimStart());
// // 3-SAVOL JAVOBI
// let input = prompt("Sozni kiriting:");
// console.log(input.trimEnd());

// // // ### 8. `padEnd`, `padStart`
// // 1-SAVOL JAVOBI
// let str = "Hello";
// console.log(str.padEnd(10, "!"));
// // 2-SAVOL JAVOBI
// let str = "Java";
// console.log(str.padStart(15, "$"));
// // 3-SAVOL JAVOBI
// let num = "12345";
// console.log(num.padStart(8, "0"));

// // // ### 9. `repeat`
// // 1-SAVOL JAVOBI
// function repeat(str) {
//   return str.repeat(3);
// }
// console.log(repeat("Hello"));
// // 2-SAVOL JAVOBI
// function repeatString(str) {
//   let res = "";
//   for (let i = 0; i < str.length; i++) {
//     res += str[i].repeat(2);
//   }
//   return res;
// }
// console.log(repeatString("Hello"));

// // 3-SAVOL JAVOBI
// function repeat(str) {
//   return str + ",".repeat(4) + str;
// }

// console.log(repeat("Hello"));

// // // ### 10. `replace`
// // 1-SAVOL JAVOBI
// let str = "Najot Ta'limda";
// let res = str.replace("da", "");
// console.log(res);
// // 2-SAVOL JAVOBI
// let str = "Salom hammaga";
// console.log(str.replace("Salom", "Xayr"));
// // 3-SAVOL JAVOBI
// let str = "Meni yoshim 016da";
// console.log(str.replace(/\d/, "*"));

// // // ### 11. `replaceAll`
// // 1-SAVOL JAVOBI
// let str = "Frontend reactJS";
// console.log(str.replaceAll("a", "o"));
// // 2-SAVOL JAVOBI
// let str = "Lorem ipsum Lorem ipsum Lorem ipsum";
// console.log(str.replaceAll("Lorem ipsum", "dolor etin"));
// // 3-SAVOL JAVOBI
// let str = "Hozir 2024-yil 2024-yil tugashiga ozgina qoldi";
// console.log(str.replaceAll(/\d/g, "*"));
// // // ### 12. `split`
// // 1-SAVOL JAVOBI
// let str = "Najot, ta'lim";
// console.log(str.split(", "));
// // 2-SAVOL JAVOBI
// let str = "Frontend";
// console.log(str.split(""));
// // 3-SAVOL JAVOBI
// let str = "Frontend";
// console.log(str.split(" "));
// // // ### 13. `indexOf`
// // 1-SAVOL JAVOBI
// let str = "Najot talim";
// console.log(str.indexOf("talim"));
// // 2-SAVOL JAVOBI
// let str = "Welcome to Dubai";
// console.log(str.indexOf(" tow"));
// // 3-SAVOL JAVOBI
// let str = "Hello";
// console.log(str.indexOf("ll"));
// // // ### 14. `lastIndexOf`
// // 1-SAVOL JAVOBI
// let str = "Hello Uzbekistan";
// console.log(str.lastIndexOf("a"));
// // 2-SAVOL JAVOBI
// let str = "F r o n t e n d ";
// console.log(str.lastIndexOf(" "));
// // 3-SAVOL JAVOBI
// let str = "salom 123 dunyo 456";
// console.log(str.lastIndexOf(/\d/g));
// // // ### 15. `includes`
// // 1-SAVOL JAVOBI
// let str = "Najot talim";
// console.log(str.includes("oqish"));
// // 2-SAVOL JAVOBI
// let str = prompt("Kiriting");
// console.log(str.includes(Number));
// // 3-SAVOL JAVOBI
