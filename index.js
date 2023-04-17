// Задание 1

let u = 1;

do {
    console.log('Привет');
    u++;
} while (u < 3)

// Задание 2 

let t = 1;

do {
    console.log(t);
    t++;
} while (t < 6)

// Задание 3 

let y = 7;

do {
    console.log(y);
    y++;
} while (y < 23)

// Задание 4

const user = {
    name: 'Коля',
    name: 'Вася',
    name: 'Петя',
};

for (key in user) {
    if (user[key]) {
        alert('Коля — зарплата 200 долларов.');
        alert('Вася — зарплата 300 долларов.');
        alert('Петя — зарплата 400 долларов.');
    }
}

// Задание 5

for (let n = 1000, num = 5; n > 50; num++) {

    n /= 2;
    console.log(n);
}

// Задание 6 

for (let friday = 5; friday <= 31; friday = friday + 7) {
    console.log(`Сегодня пятница, ${friday}-е число.Необходимо подготовить отчет.`);
}