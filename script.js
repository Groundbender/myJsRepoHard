let num = 266219;
let counter = num.toString();
let multiply = 1;
for (let i = 0; i < counter.length; i++) {
  multiply *= counter[i];
}

console.log(multiply); // перемножение цифр данного числа

let pow = 3;
multiply **= pow;

console.log(multiply); // возведение в степень

let twoNum = Number(multiply.toString().slice(0, 2)); // вывод первых двух чисел в консоль

console.log(twoNum);
