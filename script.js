"use strict";

let lang = "ru";

if (lang == "ru") {
  console.log(
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье"
  );
} else if (lang == "en") {
  console.log(
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  );
} else {
  console.log("Другое значение");
}

lang = "en";

switch (lang) {
  case "en":
    console.log(
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    );
    break;
  case "ru":
    console.log(
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
      "Воскресенье"
    );
    break;
  default:
    console.log("Другое значение");
}

lang = "ru";

week = {
  ru: [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ],
  en: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
};

console.log(week[lang]);

let namePerson = "Александр";

namePerson == "Артем"
  ? console.log("директор")
  : namePerson == "Александр"
  ? console.log("преподаватель")
  : console.log("студент");
