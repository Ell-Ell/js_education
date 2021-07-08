// const types =
// str = 'hello';
// num = 12345;
// symb = Symbol('hello') примитивный тип данных, нужен для создания уникальных идентификаторов;
// bool = true;
// bigInteger = BigInt(37827327382) для вычислений больше,чем 2 в 53 степени, криптовалюта;
// arr = [];
// obj = {};
// und = undefined;
// nu = null;

// Напиши скрипт который просит пользователя ввести число в prompt
// до тех пор, пока посетитель не нажмёт Cancel  и каждый раз
// добавляет введенное число к общей сумме.

// let total = 0;

// while (true) {
//     const enterSth = prompt('Enter a number');
//     let result;
//     if (+enterSth === null) {
//         result = `total sum is ${total}`;
//         break;
//     }
//     else if (!isNaN(enterSth)) {
//         result = `total sum is ${total += +enterSth}`;
//     }
//     else {
//         result = 'enter a number'
//     }
// }

// =============or=====================
// while (true) {
//     const a = prompt('Enter a number');
//     if (a = null) {
//         alert(`total = ${total}`);
//         break;
//     }
//     !isNaN(a) ? (total += +a) : alert('Its not a number');
// }

// =task 2=

// const a = 15
// // если переменная равноф 10, то вывести 'Верно', иначе вывести 'неверно'.
// function isTrue(a) {
//     let message;
//     if (a === 10) {
//         message = 'Верно';
//     }
//     else {
//         message = 'неверно'
//     }
//     return message;
// }

// =====================================or=======================

// const a = prompt('enter a number');
// let userInput =
// Number(a) === 10 ? 'Верно' : isNaN(a) ? 'Its not a number' : 'HeВерно';
// console.localStorage(userInput);

// task 3 case
// const num = prompt('enter a number');
// let result;

// switch (+num) {
//   case 1:
//     result = 'winter';
//     break;
//   case 2:
//     result = 'spring';
//     break;
//   case 3:
//     result = 'summer';
//     break;
//   case 4:
//     result = 'autumn';
//         break;
//     default: result = 'wrong'
// }
// console.log(result);

// ============================
// task 4 напиши функцию которая будет сумировать соседние числа
// // и пушить их в новый массив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// const someFn = function (arr) {
//   const array = [];
//   for (let i = 0; i < arr.length; i += 2) {
//     array.push(arr[i] + arr[i + 1]);
//   }
//   return array;
// //
// import users from './data.js';
// // Получить массив имен пользователей по полу (поле gender)
// console.log(users);
// const getUsersWithGender = (users, gender) => {
//   return users.reduce((acc, user) => {
//     if (user.gender === gender) {
//       acc.push(user.name);
//     }
//     return acc;
//   }, []);
// };
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
// const getUsersWithGender = (users, gender) => {
//   return users.filter(user => user.gender === gender).map(user => user.name);
// };
// console.log(getUsersWithGender(users, 'male'));
// Task 10

// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть
// повторяющихся умений и они должны быть

// Task 10

// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть
// повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
// const getSortedUniqueSkills = users => {
//   return users
//     .flatMap(user => user.skills)
//     .filter((skill, idx, arr) => {
//       return arr.indexOf(skill) === idx;
//     })
//     .sort();
// };

// console.log(getSortedUniqueSkills(usersArr));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
// / Task 13

// Дополни функцию getTotalBalanceByGender(users, gender, maxAge) так, чтобы она возвращала
// общий баланс пользователей (свойство balance), пол которых
// (свойство gender) совпадает со значением параметра gender и возраст которых меньше, чем maxAge.

// const getTotalBalanceByGender = (users, gender, maxAge) => {
//   return users.reduce((acc, user) => {
//     if (user.gender === gender && user.age < maxAge) {
//       acc += user.balance;
//     }
//     return acc;
//   }, 0);
// };
// console.log(getTotalBalanceByGender(usersArr, 'male', 35));
