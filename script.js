"use strict";

let arr = ["12345", "54321", "67891", "92392", "2435435", "4671203", "41756"];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].startsWith("2") || arr[i].startsWith("4")) {
    console.log(arr[i]);
  }
}

const dividers = function (num) {
  let arr = [];
  if (num !== 1) {
    arr.push(1);
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        arr.push(i);
      }
    }
  }
  arr.push(num);
  return arr;
};

for (let i = 1; i <= 100; i++) {
  const n = dividers(i);
  if (n.length <= 2) {
    console.log(i + ": Простое число. Делители  числа: " + n.join(", "));
  }
}

for (let i = 1; i <= 100; i++) {
  console.log(i + ": Делители  числа: " + dividers(i).join(", "));
}

dividers();
