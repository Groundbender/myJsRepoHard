let output = document.querySelector(".output");
let output2 = document.querySelector(".output2");

let time = setInterval(function () {
  Data = new Date();
  Year = Data.getFullYear();
  Month = Data.getMonth();
  Day = Data.getDate();
  weekDay = Data.getDay();
  Hour = Data.getHours();
  Minutes = Data.getMinutes();
  Seconds = Data.getSeconds();

  // Преобразуем месяца
  switch (Month) {
    case 0:
      fMonth = "января";
      break;
    case 1:
      fMonth = "февраля";
      break;
    case 2:
      fMonth = "марта";
      break;
    case 3:
      fMonth = "апреля";
      break;
    case 4:
      fMonth = "мае";
      break;
    case 5:
      fMonth = "июня";
      break;
    case 6:
      fMonth = "июля";
      break;
    case 7:
      fMonth = "августа";
      break;
    case 8:
      fMonth = "сентября";
      break;
    case 9:
      fMonth = "октября";
      break;
    case 10:
      fMonth = "ноября";
      break;
    case 11:
      fMonth = "декабря";
      break;
  }
  switch (weekDay) {
    case 0:
      fweekDay = "воскресенье";
      break;
    case 1:
      fweekDay = "понедельник";
      break;
    case 2:
      fweekDay = "вторник";
      break;
    case 3:
      fweekDay = "среда";
      break;
    case 4:
      fweekDay = "четверг";
      break;
    case 5:
      fweekDay = "пятница";
      break;
    case 6:
      fweekDay = "суббота";
      break;
  }

  const addZero = (elem) => {
    if (String(elem).length === 1) {
      return "0" + elem;
    } else {
      return String(elem);
    }
  };

  const changeEnding = (num, timeElem = "") => {
    let textVariant;
    if (timeElem === "h") {
      textVariant = [" час ", " часа ", " часов "];
    } else if (timeElem === "m") {
      textVariant = [" минута ", " минуты ", " минут "];
    } else if (timeElem === "s") {
      textVariant = [" секунда ", " секунды ", " секунд "];
    }

    const n = num % 10;
    if (num > 4 && num < 20) {
      return textVariant[2];
    } else if (n === 1) {
      return textVariant[0];
    } else if (n > 1 && n < 5) {
      return textVariant[1];
    } else {
      return textVariant[2];
    }
  };

  // console.log(changeEnding(Hour, "h"));
  // console.log(changeEnding(Minutes, "m"));
  // console.log(changeEnding(Seconds, "s"));

  output.textContent =
    "Сегодня " +
    fweekDay +
    " " +
    Day +
    " " +
    fMonth +
    " " +
    Year +
    " года, " +
    Hour +
    " " +
    changeEnding(Hour, "h") +
    " " +
    Minutes +
    " " +
    changeEnding(Minutes, "m") +
    " " +
    +Seconds +
    " " +
    changeEnding(Seconds, "s");

  // Вывод
  output2.textContent =
    addZero(Day) +
    "." +
    addZero(Month) +
    "." +
    Year +
    " - " +
    addZero(Hour) +
    ":" +
    addZero(Minutes) +
    ":" +
    addZero(Seconds);
}, 1000);
