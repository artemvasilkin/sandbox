// У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg Вивести зображення з цієї папки, отримане випадковим чином (Math.random)

const appElement = document.getElementById('app');

const image = document.createElement('img');
const maxImage = 9;
const minImage = 1;

image.setAttribute('src', `./images/${Math.floor(Math.random() * (maxImage - minImage) + minImage)}.jpeg`);

appElement.appendChild(image);
