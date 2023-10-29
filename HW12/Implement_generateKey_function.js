// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>

// Наприклад:

// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i

const askKeyLength = () => {
  return Number(prompt('Enter key length'));
};

const generateKey = (length, characters) => {
  const keyValues = characters.split('');
  let key = '';

  if (length >= 1) {
    for(i = 0; i < length; i++) {
      key += keyValues[Math.floor(Math.random() * keyValues.length)];
    };

    return alert(`Your key: ${key}`);;
  }

  return alert('Enter valid length');
};

const app = () => {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

  const keyLength = askKeyLength();

  generateKey(keyLength, characters);
};

app();
