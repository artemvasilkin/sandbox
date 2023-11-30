// Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)

const appElement = document.getElementById('app');

const table = document.createElement('table');

for (let i = 0; i < 10; i++) {
  const tr = table.insertRow();

  for (let j = 1 + (10 * i); j <= 10 + (10 * i); j++) {
    const td = tr.insertCell();
    td.appendChild(document.createTextNode(j));
  }
}

appElement.appendChild(table);
