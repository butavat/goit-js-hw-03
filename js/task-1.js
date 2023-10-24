// const name = 'Tetiana';
// const age = 43;
// const subject = 'JavaScript';
// let message = `ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ${name}, МЕНІ ${age} РОКІВ, Я ВИВЧАЮ ${subject}`;
// console.log(message);

// ЗАДАЧА 2
// ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ , ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"

// const userName = prompt("Введіть своє ім'я");
// const userMail = prompt('Введіть вашу пошту');
// const userPhone = prompt('Введіть ваш номер телефону');

// let message = `КОРИСТУВАЧ ${userName} ВИКОРИСТОВУЄ ${userMail} ПОЧТУ І ${userPhone} ТЕЛЕФОН`;
// console.log(message);
// alert(message);

//ЗАДАЧА 3
// ПОРАХУЙТЕ СУМУ ТОВАРІВ У КОРЗИНІ . ПОТРІБНО ВВЕСТИ СУМУ 3-Х ТОВАРІВ І ПОРАХУВАТИ ЇХ СУМУ

// const mobile = Number(prompt("Введіть ціну телефона"));
// const simCard = Number(prompt("Введіть ціну sim-картки"));
// const caseMobile = +prompt("Введіть ціну чохла на телефон");
// let sum = mobile + simCard + caseMobile;

// console.log(sum);
// alert(sum);

// ЗАДАЧА 4
// ВИКОРИСТОВУЮЧИ КОНСТРУКЦІЮ IF...ELSE , НАПИШИ КОД, ЯКИЙ БУДЕ ЗАПИТУВАТИ:
// "СКІЛЬКИ МІСЯЦІВ МАЄ РІК", ЯКЩО КОРИСТУВАЧ ВВОДИТЬ 12 ТО У КОНСОЛІ ПИШЕ ВІРНО, ЯКЩО НЕ ПРАВИЛЬНО КОРИСТУВАЧ ВВІВ, ТОДІ У КОНСОЛІ ПИШЕ
// "НЕ ЗНАЄТЕ? 12"

// const month = Number(prompt("СКІЛЬКИ МІСЯЦІВ МАЄ РІК"));
// if (month === 12) {
//     console.log("вірно");
// }else{
//     console.log("НЕ ЗНАЄТЕ? 12");
// }

//АБО МОЖНА ЗАПИСАТИ ЧЕРЕЗ ТЕРНАРНИЙ ОПЕРАТОР

// const month = Number(prompt("СКІЛЬКИ МІСЯЦІВ МАЄ РІК?"));

// const message = month === 12 ? "ВІРНО" : "НЕ ЗНАЄТЕ? 12";

// console.log(message);
// alert(message);

// ЗАДАЧА 5
// НАПИШІТЬ ПРОГРАМУ, ЯКА ДОЗВОЛЯТИМЕ ЮЗЕРУ ВВОДИТИ ЧИСЛО І ВИЗНАЧАТИМЕ ЧИ ЦЕ ПАРНЕ ЧИСЛО , ЧИ НЕ ПАРНЕ.

// const number = prompt('Введіть число');
// if (number % 2 === 0) {
//     alert('ПАРНЕ ЧИСЛО');
//     } else {
//         alert('НЕ ПАРНЕ ЧИСЛО');
//     }
//АБО МОЖНА ЗАПИСАТИ ЧЕРЕЗ ТЕРНАРНИЙ ОПЕРАТОР
const number = prompt("Введіть число");

const message = number % 2 === 0 ? "ПАРНЕ ЧИСЛО" : "НЕПАРНЕ ЧИСЛО";
console.log(message);
alert(message);
