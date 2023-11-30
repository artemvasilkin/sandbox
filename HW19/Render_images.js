// У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg Вивести зображення з цієї папки, отримане випадковим чином (Math.random)

const rootElement = document.getElementsByTagName('body')[0];

const image = document.createElement('img');

const srcList = [
  './images/1.jpeg',
  './images/2.jpeg',
  './images/3.jpeg',
  './images/4.jpeg',
  './images/5.jpeg',
  './images/6.jpeg',
  './images/7.jpeg',
  './images/8.jpeg',
  './images/9.jpeg',
];

const randomSrc = srcList[Math.floor(Math.random() * srcList.length)];

image.setAttribute('src', randomSrc);

rootElement.appendChild(image);
