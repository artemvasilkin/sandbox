// Частина №1

// Створити скрипт яки повинен виконувати наступне:

// запитати у користувача рік народження;
// запитати в нього, в якому місті він живе;
// запитати його улюблений вид спорту.
// При натисканні на ОК показуємо вікно, де має бути відображена наступна інформація:

// його вік;
// якщо користувач вкаже Київ, Вашингтон чи Лондон, то показати йому повідомлення - "Ти живеш у столиці..." і на місце точок підставляємо країну, столицею якої є місто. Інакше показуємо йому “ти живеш у місті…”, де місце точок – введене місто.
// Частина №2

// Вибираємо самі три види спорту та три чемпіони у цих видах. Відповідно, якщо користувач вкаже один із цих видів спорту, то показуємо йому повідомлення “Круто! Хочеш стати …? і підставляємо на місце точок ім'я та прізвище чемпіона.

// Все це має бути відображено в одному вікні (алерті).

// Якщо в якомусь випадку він не захоче вводити інформацію і натисне Скасувати, показати йому повідомлення – “Шкода, що Ви не захотіли ввести свій(ю) …” і вказуємо, що він не захотів вводити – дату народження, місто чи вид спорту .

const userPortrait = {
  birthYear: prompt("What year were you born?"),
  city: prompt("In which city do you live?"),
  favoriteSport: prompt("What is your favorite sport?"),
};

const getAgeMessage = (year) =>
  year
    ? `You are ${new Date().getFullYear() - year} years old.`
    : `It's a shame you didn't share you favorite sport :(`;

const getCityMessage = (city) => {
  const capitalsMapper = {
    London: "England",
    Washington: "United States",
    Kyiv: "Ukraine",
  };

  if (!city) {
    return `It's a shame you didn't share you city :(`;
  }

  return capitalsMapper[city]
    ? `You live in the capital of ${capitalsMapper[city]}`
    : `You live in ${city}`;
};

const getSportMessage = (sportType) => {
  const sportChampionsMapper = {
    Football: "Cristiano Ronaldo",
    Basketball: "Shaquille O'Neal",
    Hockey: "Connor McDavid",
  };

  if (!sportType) {
    return `It's a shame you didn't share you favorite sport :(`;
  }

  return sportChampionsMapper[sportType]
    ? `Cool! Do you wanna become the next ${sportChampionsMapper[sportType]}?`
    : `You like to play ${sportType}`;
};

alert(
  `${getAgeMessage(userPortrait.birthYear)}
${getCityMessage(userPortrait.city)}
${getSportMessage(userPortrait.favoriteSport)}`
);
