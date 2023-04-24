// Задание 1

const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
    if (numbs[i] == 10) break;
    console.log(numbs[i]);
}

// Задание 2

let arr = [1, 5, 4, 10, 0, 3];

console.log(arr.indexOf(4));

// Задание 3

let numb = [1, 3, 5, 10, 20];

numb = numb.join('');

console.log(numb);

// Задание 4 

const arr1 = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
];

for (let arrIn of arr1) {
    for (let element of arrIn) {
        console.log(element);
    }
}

// Задание 5 

let numbs1 = [1, 1, 1];

numbs1.push(2, 2, 2);

console.log(numbs1);


