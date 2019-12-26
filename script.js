let money = +prompt("Ваш бюджет на месяц?", ""),
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

for (let i = 0; i < 2; i++) {
  let a = prompt("Введите обязательную статью расходов в этом месяце", "");

  while (
    typeof a !== "string" || //необязательная проверка
    typeof a == null ||
    a == "" ||
    a.length > 50
  ) {
    alert("try again");
    a = prompt("Введите обязательную статью расходов в этом месяце", "");
  }

  let b = prompt("Во сколько обойдется?", "");

  while (b != +b || typeof b == null || b == "") {
    // while (не число ИЛИ нажали "отмена" ИЛИ оставили строку пустой)
    alert("try again");
    b = prompt("Во сколько обойдется?", "");
  }

  appData.expenses[a] = b;
}

// for (let i = 0; i < 2; i++) {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     b = prompt("Во сколько обойдется?", "");

//   if (
//     typeof a === "string" &&
//     typeof a != null &&
//     typeof b != null &&
//     a != "" &&
//     b != "" &&
//     a.length < 50
//   ) {
//     console.log("done");
//     appData.expenses[a] = b;
//   } else {
//     console.log("bad result");
//     i--;
//   }
// }

// Используем цикл WHILE
// let i = 0;
// while (i < 2) {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     b = prompt("Во сколько обойдется?", "");

//   if (
//     typeof a === "string" &&
//     typeof a != null &&
//     typeof b != null &&
//     a != "" &&
//     b != "" &&
//     a.length < 50
//   ) {
//     console.log("done");
//     appData.expenses[a] = b;
//   } else {
// console.log ("bad result");
//       i--;
//   }
//   i++;
// }

// Используем цикл DO...WHILE
// let i = 0;
// do {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     b = prompt("Во сколько обойдется?", "");

//   if (
//     typeof a === "string" &&
//     typeof a != null &&
//     typeof b != null &&
//     a != "" &&
//     b != "" &&
//     a.length < 50
//   ) {
//     console.log("done");
//     appData.expenses[a] = b;
//   } else {
// console.log ("bad result");
//       i--;
//   }
//   i++;
// } while (i < 2);

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Произошла ошибка");
}
