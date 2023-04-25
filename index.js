// Задание 1

const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
    console.log(numbs[i]);
    if (numbs[i] == 10) break;
}


// Задание 2

let arr = [1, 5, 4, 10, 0, 3];

console.log(arr.indexOf(4));

// Задание 3

let numb = [1, 3, 5, 10, 20];

numb = numb.join('');

console.log(numb);

// Задание 4 

let arr1 = [];

for (let i = 0; i < 3; i++) {
    let investArr = [];
    for (let k = 0; k < 3; k++) {
        investArr.push(1);
    }
    arr1.push(investArr);
}
console.log(arr1);

// Задание 5 

let numbs1 = [1, 1, 1];

numbs1.push(2, 2, 2);

console.log(numbs1);

// Задание 6 

let bull = [9, 8, 7, 'a', 6, 5];

bull = bull.sort();
console.log(bull.pop());

console.log(bull);

// Задание 7 

const arr3 = [9, 8, 7, 6, 5];
let userInp = +prompt('Введите число от 1 до 10');
if (arr3.includes(userInp)) {
    alert('Число содержиться в массиве')
} if (isNaN(userInp)) {
    alert('Не является числом')
}  else {
    alert('Не содержиться в массиве')
}

// Задание 8

const str = 'abcdef';

const reverse = str.split('').reverse().join('');

console.log(reverse);

// Задание 9 

let arrt = [
    [1, 2, 3],
    [4, 5, 6],
];

arrt = arrt.flat();

console.log(arrt);

// Задание 10

const arr2 = [2, 5, 7, 10, 3];

for (let elem of arr2) {
    const result = arr2.reduce((intermediate, value) => intermediate + value); {
        const sum = (a, b) => {
            let result = a + b;
        }
        console.log(result);
    }
}

// Задание 11 

const numbers = [2, 4, 6];

function squareNumbers(numbers) {
    return numbers.map(x => x ** 2);
}

console.log(squareNumbers(numbers));

// Задание 12

function getLengthWords(select) {
    const arr = [];
    for (let i = 0; i < select.length; i++) {
        const wordlength = select[i].length;
        arr.push(wordlength)
    } return arr;
}

let select = (['слово', '', 'слог', 'длинное предложение', 'буква']);
let wordlength = getLengthWords(select);
console.log(wordlength);

// Задание 13 

const number = [3, -3, 6, -2, 8, -4];
let negationNumb = number.filter(item => item < 0);

console.log(negationNumb);
