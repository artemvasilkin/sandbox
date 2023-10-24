// Створити масив, довжину та елементи якого задає користувач.

// Відсортувати масив за зростанням.

// Видалити елементи з масиву з 2 по 4 (включно!).

// У міру змін виводити вміст масиву на сторінку.

const getArrayLength = () => {
  const arrayLengthQuery = prompt('Enter array length:');
  const arrayLength = Number(arrayLengthQuery);

  if (!arrayLengthQuery) {
    return 0;
  }

  if (isNaN(arrayLength) || arrayLength <= 0) {
    alert('Enter array length bigger than 0');

    return getArrayLength();
  }

  return arrayLength;
};

const getArrayItemContent = (itemIndex) => {
  const arrayContent = prompt(`Enter array item ${itemIndex + 1}`);

  if (isNaN(arrayContent)) {
    alert('Array item content must be a number, try again');

    return getArrayItemContent(itemIndex);
  }

  return arrayContent;
};

const getArrayContent = (arrayLength) => {
  const array = [];

  if (arrayLength > 0) {
    for(let i = 0; i < arrayLength; i++) {
      array.push(getArrayItemContent(i));
    }
  }

  return array;
};

const app = () => {
  const userArrayLength = getArrayLength(); // Створити масив, довжину та елементи якого задає користувач.
  const userArray = getArrayContent(userArrayLength); // Створити масив, довжину та елементи якого задає користувач.
  const sortedUserArray = [...userArray].sort(); // Відсортувати масив за зростанням.
  const cleanedUpArray = [...userArray].filter((item, index) => (index < 1 || index > 3)); // Видалити елементи з масиву з 2 по 4 (включно!).

  alert(`
    Congrats! You have created an array: [${userArray}]
    Your array in ascending order: [${sortedUserArray}]
    Your array without elements 2 though 4: [${cleanedUpArray}]
  `); // У міру змін виводити вміст масиву на сторінку.
};

app();
