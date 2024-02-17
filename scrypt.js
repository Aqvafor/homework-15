
// Задание 1
let first = ((5 >= 7) || ("javaskript" != "java")) && !(((11 * 3) == 99) && true);
/*

    ((5 >= 7) || ("javaskript") != "java") && !(((11 * 3) == 99) && true)

    =>

    (false || true) && !(false && true)

    =>

    true || true

    => true

*/
console.log(first);

// Задание 2
let age = Math.floor(Math.random() * (100 - 1 + 1) + 1);
console.log(age);
if (age >= 18 && age <= 59) {
    console.log("Вам еще работать и работать");
} else if (age >= 1 && age <= 17) {
    console.log("Вам рано еще работать")
} else {
    console.log("Вам пора на пенсию");
}

// Задание 3
let voron = Math.floor(Math.random() * (1000 - 1 + 1) + 1);
console.log(voron);
if ((voron % 100 == 11) || (voron % 10 == 1)) {
    console.log(`"На ветке сидела ${voron} ворона"`);
} else if ((voron % 100 == 12) || (voron % 100 == 13) || (voron % 100 == 14)) {
    console.log(`"На ветке сидело ${voron} ворон"`);
} else if ((voron % 10 == 2) || (voron % 10 == 3) || (voron % 10 == 4)) {
    console.log(`"На ветке сидели ${voron} вороны"`);
} else {
    console.log(`"На ветке сидело ${voron} ворон"`);
}

// Задание 4
let a1 = Math.floor(Math.random() * (100 - -100 + 1) - 100);
let b1 = Math.floor(Math.random() * (100 - -100 + 1) - 100);
let c1 = Math.floor(Math.random() * (100 - -100 + 1) - 100);
let max = 0;
let min = 0;
console.log(a1, b1, c1);
if (a1 > b1 && a1 > c1) {
    max = a1;
} else if (b1 > a1 && b1 > c1) {
    max = b1;
} else if (c1 > b1 && c1 > a1) {
    max = c1;
}

if (a1 < b1 && a1 < c1) {
    min = a1;
} else if (b1 < a1 && b1 < c1) {
    min = b1;
} else if (c1 < b1 && c1 < a1) {
    min = c1;
}
console.log(`Наибольшее число:${max}\nНаименьшее число:${min}`)



// Задание 5 Дополнил условие, если масса яблок и апельсинов будет равно, то вывод будет "Бери яблоки и апельсины"
let apple = Math.floor(Math.random() * (10 - 0 + 1) - 0);
let orange = Math.floor(Math.random() * (10 - 0 + 1) - 0);
console.log(apple, orange);
let mas_apple = apple * 100;
let mas_orange = orange * 150;
// console.log(mas_apple, mas_orange);
if (mas_apple > mas_orange) {
    console.log("Бери яблоки");
} else if (mas_apple < mas_orange) {
    console.log("Бери апельсины")
} else console.log("Бери яблоки и апельсины");


