let stringConverter = function (arg) {
  let result = "Объявлена не строка";
  if (typeof arg === "string") {
    let maxLength = 30;
    let string = arg.trim();
    if (string.length > maxLength) {
      result = string.substr(0, maxLength) + "...";
    } else {
      result = string;
    }
  }
  return result;
};

console.log(stringConverter());
