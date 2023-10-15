// Створити скрипт який повинен виконувати наступне:

// питаємо у користувача, що він хоче зробити (add, sub, mult, div);
// питаємо у користувача перше число;
// запитуємо у користувача друге число;
// виводимо результат дії (add, sub, mult, div) з усіма операндами (Наприклад "2 + 3 = 5").

const operation = prompt('Choose operation (add, sub, mult, div)', 'add');
const op1 = Number(prompt('Enter first operand', 0));
const op2 = Number(prompt('Enter second operand', 0));

switch (operation) {
  case 'add':
    alert(`${op1} + ${op2} = ${op1 + op2}`);
    break;
  case 'sub':
    alert(`${op1} - ${op2} = ${op1 - op2}`);
    break;
  case 'mult':
    alert(`${op1} * ${op2} = ${op1 * op2}`);
    break;
  case 'div':
    alert(`${op1} / ${op2} = ${op1 / op2}`);
    break;
  default:
    alert('Wrong operation, try again');
}
