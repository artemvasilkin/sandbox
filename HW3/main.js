// В якості ДЗ, необхідно вирішити дві наступні задачі:

// Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація);

const string1 = prompt('What is your name?');
const string2 = prompt('What is your middle name?');
const string3 = prompt('What is your surname?');

alert(`${string1} ${string2} ${string3}`);

// Розбити за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.

const number = prompt('Enter a number');

alert(number.split('').sort((a, b) => a > b && -1).join(' '));
