// Задание 1 

console.log('шоколад'.toUpperCase());

// Задание 2

function searchStart(ko) {
    return ko.filter(ko => /^ко/i.test(ko));

}
console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог']));

// Задание 3

console.log(Math.floor(32.58884));
console.log(Math.round(32.58884));
console.log(Math.ceil(32.58884));

// Задание 4

var arrayMin = Math.min.apply(null, [52, 53, 49, 77, 21, 32])
var arrayMax = Math.max.apply(null, [52, 53, 49, 77, 21, 32])

console.log(arrayMin);
console.log(arrayMax);

// Задание 5 

function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * maxValue);
}

console.log(getRandomInt(1, 10));

// Задание 6 

function getRandomArrNumbers(n) {

    let mass = [];

    for (i = 0; i < (Math.floor(n / 2)); i++) {
        mass.push(Math.round(Math.random() * 7));

    }

    return mass;

}
console.log(getRandomArrNumbers(7));


// Задание 7

function result(minValue, maxValue) {

    return Math.round(Math.random() * (maxValue - minValue) + minValue);
}

console.log(result(5, 7));

// Задание 8 

let currentDate = new Date();

console.log(currentDate.toLocaleDateString('ru-RU')); // так красивее)

// Задание 9

var currentDate1 = new Date();

currentDate1.setDate(currentDate1.getDate() + 73);

console.log(currentDate1);

// Задание 10 

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];


let myDate = new Date();
myDate.setDate(29);
myDate.setMonth(3);
myDate.setYear(2023);

let fullDate = myDate.getDate() + " " + months[myDate.getMonth()] +
    " " + myDate.getFullYear() + ", " + days[myDate.getDay()] + " " + myDate.toLocaleTimeString('ru-RU');

    console.log(fullDate);
    