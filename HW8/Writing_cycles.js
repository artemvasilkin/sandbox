// Написати цикли, які зможуть:

// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20.

console.group('1. Вивести на сторінку в один рядок через кому числа від 10 до 20.');

// for

let stringOfNumbers = '';

for (let i = 10; i <= 20; i++) {
  stringOfNumbers = i > 10 ? `${stringOfNumbers},${i}` : i;
}

console.log(stringOfNumbers);

// while

// let stringOfNumbers = '';
// let i = 10;
//
// while (i <= 20) {
//   stringOfNumbers = i > 10 ? `${stringOfNumbers},${i}` : i;
//   i++;
// }
//
// console.log(stringOfNumbers);

// do while

// let stringOfNumbers = '';
// let i = 10;
//
// do {
//   stringOfNumbers = i > 10 ? `${stringOfNumbers},${i}` : i;
//   i++;
// } while (i <= 20);
//
// console.log(stringOfNumbers);

console.groupEnd();

// 2. Вивести квадрати чисел від 10 до 20.

console.group('2. Вивести квадрати чисел від 10 до 20.');

// for

for (let i = 10; i <= 20; i++) {
  console.log(`${i}^2 = ${i ** 2}`);
}

// while

// let i = 10;

// while (i <= 20) {
//   console.log(`${i}^2 = ${i ** 2}`);
//   i++;
// }

// do while

// let i = 10;

// do {
//   console.log(`${i}^2 = ${i ** 2}`);
//   i++;
// } while (i <= 20);

console.groupEnd();

// 3. Вивести таблицю множення на 7.

console.group('3. Вивести таблицю множення на 7.');

for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${i * 7}`);
}

// while

// let i = 0;

// while (i <= 10) {
//   console.log(`7 x ${i} = ${i * 7}`);
//   i++;
// }

// do while

// let i = 0;

// do {
//   console.log(`7 x ${i} = ${i * 7}`);
//   i++;
// } while (i <= 10);

console.groupEnd();

// 4. Знайти суму всіх цілих чисел від 1 до 15.

console.group('4. Знайти суму всіх цілих чисел від 1 до 15.');

// for

let sumOfNumbers = 0;

for (let i = 1; i <= 15; i++) {
  sumOfNumbers += i;
}

console.log(`Cума всіх цілих чисел від 1 до 15 = ${sumOfNumbers}`);

// while

// let sumOfNumbers = 0;
// let i = 1;

// while (i <= 15) {
//   sumOfNumbers += i;
//   i++;
// }

// console.log(`Cума всіх цілих чисел від 1 до 15 = ${sumOfNumbers}`);

// do while

// let sumOfNumbers = 0;
// let i = 1;

// do {
//   sumOfNumbers += i;
//   i++;
// } while (i <= 15);

// console.log(`Cума всіх цілих чисел від 1 до 15 = ${sumOfNumbers}`);

console.groupEnd();

// 5. Знайти добуток усіх цілих чисел від 15 до 35.

console.group('5. Знайти добуток усіх цілих чисел від 15 до 35.');

const wholeNumbersArray = [];
let multOfWholeNumbers = 1;

for (let i = 15; i <= 35; i++) {
  wholeNumbersArray.push(i);
}

for (wholeNumberIndex in wholeNumbersArray) {
  multOfWholeNumbers *= wholeNumbersArray[wholeNumberIndex]
}

console.log(`${wholeNumbersArray.join(' x ')} = ${multOfWholeNumbers}`);

console.groupEnd();

// 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

console.group('6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.');

let sumOfArithmeticMeanNumbers = 0;

for (let i = 1; i <= 500; i++) {
  sumOfArithmeticMeanNumbers += i;
}

console.log(`Cереднє арифметичне всіх цілих чисел від 1 до 500 = ${sumOfArithmeticMeanNumbers / 500}`);

console.groupEnd();

// 7. Вивести суму лише парних чисел в діапазоні від 30 до 80.

console.group('7. Вивести суму лише парних чисел в діапазоні від 30 до 80.');

let sumOfParityNumbers = 0;

for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    sumOfParityNumbers += i;
  }
}

console.log(`Cума лише парних чисел в діапазоні від 30 до 80 = ${sumOfParityNumbers}`);

console.groupEnd();

// 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.

console.group('8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.');

for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

console.groupEnd();

// 9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// 10. Визначити кількість його парних дільників.
// 11. Знайти суму його парних дільників.

console.group(`
  9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
  10. Визначити кількість його парних дільників.
  11. Знайти суму його парних дільників.
`);

const naturalNumber = Number(prompt('Enter a natural number', 1));
let stringOfDividers = '';
let quantityOfDividers = 0;
let sumOfDividers = 0;

for (let i = 1; i <= naturalNumber; i++) {
  if (naturalNumber % i === 0) {
    stringOfDividers = i > 1 ? `${stringOfDividers},${i}` : i;
    quantityOfDividers++;
    sumOfDividers += i;
  }
}

console.log('Дільники:', stringOfDividers);
console.log('Кількість дільників:', quantityOfDividers);
console.log('Сума дільників:', sumOfDividers);

console.groupEnd();

// 12. Надрукувати повну таблицю множення від 1 до 10.

console.group('12. Надрукувати повну таблицю множення від 1 до 10.');

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${j} x ${i} = ${i * j}`);
  }
}

console.groupEnd();
