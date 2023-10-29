// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

// Наприклад:

// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5 );
// console.log(array);
// // Результат: [1, 2, 3, 4, 6, 7]

const askToRemoveElementFromArray = (array) => {
  return prompt(`
    What element would you like to remove from array below?
    ${array}
  `);
};

const removeElementFomArray = (element, array) => {
  const elementIndex = array.indexOf(Number(element));

  if (elementIndex >= 0) {
    array.splice(elementIndex, 1);
    alert(`Success: ${array}`);

    return;
  }

  return alert(`Sorry, could not find element "${element}" in array :(`)
};

const app = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const elementToRemove = askToRemoveElementFromArray(array);

  removeElementFomArray(elementToRemove, array);
};

app();
