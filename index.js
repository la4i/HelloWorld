/* Задание 1 */

let a = 10;
alert(a);
a = 20;
alert(a);

/* Задание 2 */

let issue = Number(2007);
alert(`Год выпуска первого Iphone - ${issue}`);

/* Задание 3 */

let name = String(`Брэндан Эйх`);
alert(`Создатель языка JavaScript - ${name}`);

/* Задание 4 */

let e = Number(10);
let b = Number(2);
alert(e + b);
alert(e - b);
alert(e * b);
alert(e / b);

/* Задание 5 */

let result = (2 ** 5);
alert(result);

/* Задание 6 */

let r = Number(9);
let t = Number(2);
alert(r % t);

/* Задание 7 */

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

arrt = arrt.flat();

/* Задание 8 */

let age1 = prompt(`Сколько Вам лет?`);
alert(age1);


/* Задание 9 */

const user = {
    name: `Vladislav`,
    age: 27,
    isAdmin: true,
};

/* Задание 9.1 */
user[`city of residence`] = `Varna`;

/* Задание 9.2 */
user.age = 54;

/* Задание 9.3 */
delete user[`city of residence`];

/* Задание 9.4 */
let info = prompt(`Какую информацию хотите узнать о пользователе?`);
alert(user[info]);

/* Задание 10 */
let named = prompt(`Как тебя зовут?`);
alert(`Привет, ${named}!`);

let select = (['слово', '', 'слог', 'длинное предложение', 'буква']);
let wordlength = getLengthWords(select);
console.log(wordlength);



console.log(negationNumb);
