// Задание 1 решение через if

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(min(8, 4));
console.log(min(6, 6));

// Задание 1 решение через оператор ?

function min(a, b) {
    return a < b ? a : b;
}

console.log(min(8, 4));
console.log(min(6, 6));

// Задание 2 

function exchange(n = number) {
    if (n % 2 == 0) {
        return ('Число четное');
    } else {
        return ('Число нечетное')
    }
}

console.log(exchange(6));

// Задание 3.1

function cube($num) {
    console.log($num * $num)
}

console.log(cube(2));


// Задание 3.2

function cube($num) {
    return $num * $num
}

console.log(cube(3));

// Задание 4

let age = prompt('Сколько вам лет?');

if (age < 0) {

    function printMessage() {
        alert('Вы ввели неправильное значение');
    }

} else if (age <= 12) {

    function printMessage() {
        alert('Привет, Друг!');
    }

} else if (age >= 13) {

    function printMessage() {
        alert('Добро пожаловать!');
    }
}

printMessage();

// Задание 5 

function num(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        return console.log(a * b)
    }
    else {
        return console.log("Одно или оба значения не являются числом")
    }
}
num(prompt(), prompt())

// Задание 6

function num(g) {
    if (!isNaN(g)) {
        return console.log(`${g} в кубе равняется ${g * g * g}`)
    }
    else {
        return console.log("Переданный параметр не является числом")
    }
}
num(prompt("Введите число"))


// задание 7

function getCircleArea() {
    return 3.14 * Math.pow(this.radius, 2);
}
function getCirclePerimeter() {
    return 6.28 * this.radius;
}

const circle1 = {
    radius: '10',

    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};

const circle2 = {
    radius: '20',

    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());

// Задание 8

function seasons() {
    let monthNumber = prompt('Напишите номер месяца');

    if (monthNumber >= 1 && monthNumber <= 2 || monthNumber == 12) {
        alert('Зима');
    }

    else if (monthNumber >= 3 && monthNumber <= 5) {
        alert('Весна');
    }

    else if (monthNumber >= 6 && monthNumber <= 8) {
        alert('Лето');
    }

    else if (monthNumber >= 9 && monthNumber <= 11) {
        alert('Осень');
    }

    else if (monthNumber <=0 || monthNumber >=13) {
        alert('Попробуй заново');
    }
}
