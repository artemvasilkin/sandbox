// Напишіть скрипт, який переводить години в секунди і має робити насутпне:

// запитати у користувача кількість годин;
// порахувати, скільки секунд у цій кількості годин;
// записати обчислене значення у змінну;
// вивести цю змінну користувачеві через alert.

const hours = Number(prompt('Enter hours', 0));
const seconds = hours * 60 * 60;
alert(seconds);