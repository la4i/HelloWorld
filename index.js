/* ДЗ урока 2.3 */

/* Задание 1 */

let password = ('vac123');
let input = prompt('Введите пароль');
if (password === input) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}


/* Задание 2 */

let c = 7;
if (c > 0 && c < 10) {
    alert('Верно');
} else {
    console.log('Неверно');
}

/* Задание 3 */

let d = 50;
let e = 150;
if (d || e > 100) {
    alert('Верно');
} else {
    alert('Неверно');
}

/* Задание 4 */

let a = 3;
let b = 2;
alert(a + b);


/* Задание 5 */

let monthNumber = (prompt('Введите номер месяца'));
switch (monthNumber) {
    case '1':
        alert('Зима');
        break;
    case '2':
        alert('Зима');
        break;
    case '3':
        alert('весна');
        break;
    case '4':
        alert('весна');
        break;
    case '5':
        alert('весна');
        break;
    case '6':
        alert('лето');
        break;
    case '7':
        alert('лето');
        break;
    case '8':
        alert('лето');
        break;
    case '9':
        alert('осень');
        break;
    case '10':
        alert('осень');
        break;
    case '11':
        alert('осень');
        break;
    case '12':
        alert('Зима');
        break;
    default:
        alert('Не существует');
        break;
}