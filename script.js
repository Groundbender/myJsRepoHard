let output = document.querySelector(".output");
let week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
let date = new Date();
let today = date.getDay();

today === 0 ? (today = 6) : today--;

console.log(today);

week.forEach(function (day, index) {
  console.log(index + ": " + day);
  if (index === today) {
    output.insertAdjacentHTML(
      "beforebegin",
      "<div>" + "<b>" + day + "</b>" + "</div>"
    );
  } else if (index === 5 || index === 6) {
    output.insertAdjacentHTML(
      "beforebegin",
      "<div>" + "<i>" + day + "</i>" + "</div>"
    );
  } else {
    output.insertAdjacentHTML("beforebegin", "<div>" + day + "</div>");
  }
});
