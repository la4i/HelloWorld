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

let obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400',
};
for (let name in obj) {
    alert(`${name} - зарплата ${obj[name]} долларов`)
}

// Задание 5

for (let n = 1000; n > 50; num++) {

    n /= 2;
    console.log(n);
    num = 5;
    num++;
}

// Задание 6 

for (let friday = 5; friday <= 31; friday += 7) {
    console.log(`Сегодня пятница, ${friday}-е число.Необходимо подготовить отчет.`);
}