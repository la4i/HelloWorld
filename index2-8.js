// дз 2.8 лек з 1

const fibonacci = [1, 1, 2, 3, 5, 8];

const multipleByTwoFib = fibonacci.map(el => el * 2)

const plusTenFib = fibonacci.map(el => el + 10)

const onlyBigFib = fibonacci.filter(el => el > 3)

console.log(multipleByTwoFib);
console.log(plusTenFib);
console.log(onlyBigFib);

//лек з 2

function callbackWithArrayLength(arr, callback) {

  callback(arr.length);
}

callbackWithArrayLength([1], (length) => {
  console.log(length);
});

callbackWithArrayLength([1, 1], (len) => {
  console.log(len);
});
callbackWithArrayLength([1, 1, 1, 1, 1], (l) => {
  console.log(l);
});

// лек з 3

function log(arrItem) {
  console.log("Элемент массива:", arrItem);
}

function each(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
}

each(["Глеб", "Олег", "Татьяна", "Платон"], log);

// Задание 1;

const people1 = [
  { name: "Глеб", age: 29 },
  { name: "Анна", age: 17 },
  { name: "Олег", age: 7 },
  { name: "Оксана", age: 47 },
];

console.log(
  people1.sort(function (a, b) {
    if (a.age > b.age) {
      return 1;
    }
    if (a.age < b.age) {
      return -1;
    }
    return 0;
  })
);

// Задание 2;

function isPositive(arr) {
  let a = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      a.push(arr[i]);
    }
  }

  return a;
}

function isMale(arr) {
  let b = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].gender == "male") {
      b.push(arr[i]);
    }
  }

  return b;
}
function filter(arr, callback) {
  let result = callback(arr);

  return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
  { name: "Глеб", gender: "male" },
  { name: "Анна", gender: "female" },
  { name: "Олег", gender: "male" },
  { name: "Оксана", gender: "female" },
];

console.log(filter(people, isMale));

// Задание 3;

const timer = (deadline) => {
  if (isNaN(+deadline)) {
    console.log("Передано некорректное число");
    return;
  }

  let time = deadline;
  const interval = setInterval(() => {
    time -= 3;
    nowTime = new Date();
    console.log(nowTime);
  }, 3000);

  setTimeout(() => {
    clearInterval(interval);
    console.log("30 секунд прошло");
  }, deadline * 3000);
};

timer(30);

// Задание 4;

function delayForSecond(callback) {
  setTimeout(callback, 1000);
}

delayForSecond(function () {
  console.log("Привет, Глеб!");
});

// Задание 5;

function delayForSecond(cb) {
  setTimeout(() => {
    console.log("Прошла одна секунда");
    if (cb) {
      cb();
    }
  }, 1000);
}

function sayHi(name) {
  setTimeout(() => {
    console.log(`Привет, ${name}!`);
  }, 1001);
}
delayForSecond(sayHi("Глеб"));
