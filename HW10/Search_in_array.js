/*
  1. Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.
  2. Знайти мінімальний елемент масиву та його порядковий номер.
  3. Знайти максимальний елемент масиву та його порядковий номер.
  4. Визначити кількість негативних елементів.
  5. Знайти кількість непарних позитивних елементів.
  6. Знайти кількість парних позитивних елементів.
  7. Знайти суму парних позитивних елементів.
  8. Знайти суму непарних позитивних елементів.
  9. Знайти добуток позитивних елементів.
  10. Знайти найбільший серед елементів масиву, ост альні обнулити.
*/

const getArrayInfo = (array) => {
  const arrayInfo = {};
  const sortedArray = [...array].sort();

  arrayInfo.min = sortedArray[0]; // 2. Знайти мінімальний елемент масиву
  arrayInfo.minIndex = array.indexOf(arrayInfo.min); // та його порядковий номер.

  arrayInfo.max = sortedArray[array.length - 1]; // 3. Знайти максимальний елемент масиву
  arrayInfo.maxIndex = array.indexOf(arrayInfo.max); // та його порядковий номер.

  arrayInfo.positiveCounter = 0;
  arrayInfo.negativesCounter = 0;
  arrayInfo.oddPositiveCounter = 0;
  arrayInfo.evenPositiveCounter = 0;
  arrayInfo.sumOfPositive = 0;
  arrayInfo.sumOfEvenPositive = 0;
  arrayInfo.sumOfOddPositive = 0;
  arrayInfo.multOfPositive = 0;
  arrayInfo.strippedArray = [...array];

  array.map((item, index) => {
    if (item > 0) {
      arrayInfo.sumOfPositive += item; // 1. Дан масив [...] Знайти суму
      arrayInfo.positiveCounter += 1; // та кількість позитивних елементів.
    } else {
      arrayInfo.negativesCounter += 1; // 4. Визначити кількість негативних елементів.
    }

    if (item > 0 && item % 2 !== 0) {
      arrayInfo.oddPositiveCounter += 1; // 5. Знайти кількість непарних позитивних елементів.
      arrayInfo.sumOfOddPositive += item; // 8. Знайти суму непарних позитивних елементів.
    }

    if (item > 0 && item % 2 === 0) {
      arrayInfo.evenPositiveCounter += 1; // 6. Знайти кількість парних позитивних елементів.
      arrayInfo.sumOfEvenPositive += item; // 7. Знайти суму парних позитивних елементів.
    }

    if (item > 0) {
      arrayInfo.multOfPositive *= item; // 9. Знайти добуток позитивних елементів.
    }

    if (index !== arrayInfo.maxIndex) {
      arrayInfo.strippedArray[index] = 0; // 10. Знайти найбільший серед елементів масиву, ост альні обнулити.
    }
  });

  return arrayInfo;
};

const app = () => {
  const providedArray = [
    16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
    76, -4, 12, -35, 4, 47,
  ];

  console.log("Provided array:", providedArray);
  console.log("Array info:", getArrayInfo(providedArray));
};

app();
