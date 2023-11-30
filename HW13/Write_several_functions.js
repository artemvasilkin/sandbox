// Ця дз складається з чотирьох невеликих завдань, за реалізацію кожної з них можна отримати 25 балів:

// 1. Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const calculateArithmeticMean = (array) => array
  .filter((value) => typeof value === 'number' && Number.isInteger(value))
  .reduce((accumulator, currentValue, index, currentArray) => accumulator + currentValue / currentArray.length, 0);

const assortedArray = [1, 2, 3, 4, 5, "one", "two", "three", "four", "five", true, false, [], {},];

console.log(calculateArithmeticMean(assortedArray));

// 2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

const doMath = (x, operand, y) => {
  switch (operand) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    case '/':
      return x / y;
    case '%':
      return x % y;
    case '^':
      return x / y;
    default:
      return null;
  }
}

// 3. Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.
// 4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
