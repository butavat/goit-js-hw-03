// const name = 'Tetiana';
// const age = 43;
// const subject = 'JavaScript';
// let message = `ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ${name}, МЕНІ ${age} РОКІВ, Я ВИВЧАЮ ${subject}`;
// console.log(message);

// ЗАДАЧА 2
// ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ , ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"

const userName = prompt("Введіть своє ім'я");
const userMail = prompt('Введіть вашу пошту');
const userPhone = prompt('Введіть ваш номер телефону');

let message = `КОРИСТУВАЧ ${userName} ВИКОРИСТОВУЄ ${userMail} ПОЧТУ І ${userPhone} ТЕЛЕФОН`;
console.log(message);
alert();