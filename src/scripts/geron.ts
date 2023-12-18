// let age: number = 123;
// let bmw: number = 20;
// let audi: number = 15;

// let summ: number = bmw + audi;
// bmw = 25;
// audi = 20;
// let razn: number = bmw - audi;
// bmw = 17;
// audi = 15;
// let deln: number = bmw / audi;
// bmw = 20;
// audi = 25;
// let proizv: number = bmw * audi;

// // console.log("Summ: " + summ, "Razn: " + razn, "Deln: " + deln, "Proizv: " + proizv);

// // Создание своей тип данных

// type TStatusServer = 200 | 300 | 400;

// let currentStatus: TStatusServer = 200;

// // Условия

// let password: string = "asdasdasdasdads123";

// if (password.length > 8 && !password.includes("qwerty")) {
//   console.log("Надежный пароль");
// } else {
//   console.log("Пароль слишком легкий");
// }

// // ------------------------------------------------------ Работа со строками 06.11.2023
// // Задача с палиндромом

// let randString: string = "заказ";

// if (randString == randString.split("").reverse().join(""))
//   console.log("Палиндром");
// else console.log("Не-а");

// let randString1: string = "набор слов";
// console.log(randString1.substring(0, 5));
// console.log(randString1.slice(-4)); // substring(), slice() - обрезать участки строки
// console.log(randString1.replace("набор", "компания")); // replace() - заменить символы
// console.log(randString1.includes("слов")); // includes() - проверить содержится ли строка

// // Максимум из двух чисел

// let nFirst: number = 23;
// let nSecond: number = 47;

// if (nFirst > nSecond) console.log(nFirst);
// else console.log(nSecond);

// // Високосный год

// let year: number = 2000;

// year % 4 == 0 && year % 100 != 0
//   ? console.log("Год високосный")
//   : console.log("Год не високосный");

// // Тестирующая система

// let studentAnswer: number = 101;

// studentAnswer == parseInt(studentAnswer.toString().split("").reverse().join(""))
//   ? console.log("YES")
//   : console.log("NO");

// // Максимум из трех чисел

// let aFirst: number = 23;
// let aSecond: number = 47;
// let aThird: number = 27;

// if (aFirst > aSecond && aFirst > aThird) {
//   console.log(aFirst);
// } else if (aSecond > aFirst && aSecond > aThird) {
//   console.log(aSecond);
// } else if (aThird > aFirst && aThird > aSecond) {
//   console.log(aThird);
// }

// // Ход короля

// let firstPosition: number = 4;
// let secondPosition: number = 4;
// let thirdPosition: number = 5;
// let fourthPosition: number = 5;

// if (
//   Math.abs(firstPosition - thirdPosition) <= 1 &&
//   Math.abs(secondPosition - fourthPosition) <= 1
// ) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// // ------------------------------------------------------ 13.11.2023

// // var - область видимости до функции

// function getName() {
//   var test = "test";
//   console.log("Dima");
// }

// function getRandomNumber() {
//   return Math.floor(Math.random() * 100);
// }

// type TSumNumbers = (num1: number, num2: number, num3: number) => number;

// function sumNumbers(num1: number = 0, num2: number = 0, num3: number = 0) {
//   return num1 + num2 + num3;
// }

// getName();
// console.log(sumNumbers(5, 6) + 5);
// console.log(sumNumbers(10, 6));
// console.log(sumNumbers(10, 10, 10));

// // Стрелочная функция
// const sumNumbers1: TSumNumbers = (
//   num1: number = 0,
//   num2: number = 0,
//   num3: number = 0
// ) => {
//   return num1 + num2 + num3;
// };

/* // Проверка куда ты поступаешь
type TPlace = 'college' | 'school'

const place:TPlace = 'college'
const score:number = 200

const getCourse = (place:TPlace, score:number) => {
  if(score > 180) {
    if(place == 'college') {
      return 'Вы поступили на второй курс'
    } else {
      return 'Вы поступили на первый курс'
    }
  } else {
      return 'Вы не поступили, не хватило баллов'
  }
}

console.log(getCourse('college', 200));
console.log(getCourse('school', 200));
console.log(getCourse('college', 150));
*/

// Программа по выдачи премии эффективному сотруднику в зависимости от его оклада
// let Salary: number = 500000;
// let premiya = 0;

// const setPremiya = (Salary: number) => {
//   if (Salary > 400000) {
//     return (premiya = (Salary / 100) * 15);
//   } else if (Salary > 300000) {
//     return (premiya = (Salary / 100) * 10);
//   } else {
//     return (premiya = (Salary / 100) * 20);
//   }
// };

// console.log("Премия: " + setPremiya(Salary) + "Зарплата: " + Salary);

// let engineer: number = 10;
// let completed: number = 50;

// const Efficiency: number = completed / engineer;

// if (Efficiency >= 4) {
//   console.log("Отличная эффективность");
// } else if (Efficiency >= 3) {
//   console.log("Сотрудник должен улучшить результаты");
// } else if (Efficiency >= 2) {
//   console.log("Плохая эффективность, необходимо пройти переквалификацию");
// } else {
//   console.log("Недопустимая оценка");
// }

// ------------------------------------------------------- Работа с Enum Swich case 20.11.2023

// enum EColors {
//   red = "красный",
//   black = "черный",
//   gray = "серый",
// }

// const color = EColors.red;
// console.log(color);
// const getColortext = (color: EColors) => {
//   switch (color) {
//     case EColors.black:
//       console.log("черный");
//       break;
//     case EColors.red:
//       console.log("красный");
//       break;
//     case EColors.gray:
//       console.log("серый");
//       break;
//     default:
//       console.log("такого цвета нет");
//       break;
//   }
// };

// getColortext(EColors.black);

// ------------------------------------------------------------------------------------------------------

// const summary = (num1: number, num2: number) => {
//   return num1 + num2;
// };

// const multiply = (num1: number, num2: number) => {
//   return num1 * num2;
// };

// const divide = (num1: number, num2: number) => {
//   return num2 != 0 ? num1 / num2 : 0;
// };
// type TClallback = (num1: number, num2: number) => number;

// const generateRandomNumber = (callback: TClallback) => {
//   let num1: number = Math.floor(Math.random() * 100);
//   let num2: number = Math.floor(Math.random() * 100);
//   let answer = callback(num1, num2);
//   return answer;
// };

// console.log(generateRandomNumber(summary));
// console.log(generateRandomNumber(divide));
// console.log(generateRandomNumber(multiply));

// // ------------------------------------------------------------------------------------------------------

// const getName1 = (callback:(name:string) => void) => {
//   let userName: string = 'Dima';
//   callback(userName);
// }

// const sayHi = (name: string) => {
//   console.log('Hello '+ name);
// }

// const sayBye = (name: string) => {
//   console.log('Good bye '+ name);
// }

// getName1(sayBye);
// getName1(sayHi);
// const test = (num1 = generateRandomNumber(summary)) => {
//   console.log(num1)
// }
// test();

// // ------------------------------------------------------------------------------------------------------

// type StringCallback = (input: string) => void;

// function processString(input: string, callback: StringCallback): void {
//   callback(input);
// }

// function checkPalindrome(input: string): void {
//   const isPalindrome = input === input.split('').reverse().join('');
//   console.log(`"${input}" Палиндром: ${isPalindrome}`);
// }

// function containsQwerty(input: string): void {
//   const hasQwerty = input.includes('qwerty');
//   console.log(`"${input}" Содержит "qwerty": ${hasQwerty}`);
// }

// function has8Characters(input: string): void {
//   const has8Chars = input.length === 8;
//   console.log(`"${input}" Имеет 8 символов: ${has8Chars}`);
// }


// const exampleString = '12345678';

// processString(exampleString, checkPalindrome);
// processString(exampleString, containsQwerty);
// processString(exampleString, has8Characters);



// Центр связи предлагает 4 оператора: Beeline, Tele2, Kcell, Active. При
// выборе оператора необходимо выводить стоимость подключения. Если
// пользователь выбирает Kcell, то подключение бесплатное.



// class MobileOperator {
//   constructor(public name: string, public connectionCost: number) {}
// }

// const beeline = new MobileOperator("Beeline", 1000);
// const tele2 = new MobileOperator("Tele2", 800);
// const kcell = new MobileOperator("Kcell", 0);
// const active = new MobileOperator("Active", 1200);

// const operators: { [key: string]: MobileOperator } = {
//   Beeline: beeline,
//   Tele2: tele2,
//   Kcell: kcell,
//   Active: active,
// };

// function getConnectionCost(operatorName: string): number | string {
//   const operator = operators[operatorName];
//   if (operator) {
//       return operator.connectionCost === 0 ? "Бесплатно" : `${operator.connectionCost} тенге`;
//   } else {
//       return "Неверное название оператора";
//   }
// }

// Пример использования
// const selectedOperator = "Kcell";
// const cost = getConnectionCost(selectedOperator);
// console.log(`Стоимость подключения к ${selectedOperator}: ${cost}`)

// // ------------------------------------------------------- Работа с Объекты Массивы Циклы for While 27.11.2023

// type TPerson2 = TPerso & {
//   // наследование
//   surname: string;
// };

// interface IPerson {
//   age: number;
//   name: string;
//   id?: number | string; // ? - необязательно
// }
// interface IPerson2 extends IPerson {
//   // наследование
//   surname: string;
// }

// let firstPerson: TPerson2 = {
//   age: 17,
//   name: "Dima",
//   surname: "Zhelnin",
// };

// let array: string[] = ["sd", "ds"];
// let personal: TPerson2[] = [
//   {
//     age: 17,
//     name: "Dima",
//     surname: "Zhelnin",
//   },
//   {
//     age: 17,
//     name: "Dima",
//     surname: "Zhelnin",
//   },
// ];

// Задача 1

// type TPerso = {
//   age: number;
//   name: string;
//   id?: number | string;
// };

// const years: number[] = [2019, 2020, 2021, 2022, 2023, 2024];
// const yearName: string[] = ["Зима", "Лето", "Весна", "Осень"];
// const persons: TPerso[] = [
//   {
//     age: 17,
//     name: "Dima",
//   },

//   {
//     age: 17,
//     name: "Matvey",
//   },
// ];

// console.log(years[4]);
// console.log(yearName[2]);
// console.log(years[3]);
// console.log(years[0]);

// ------------------------------------------------

// let num = 0

// while(num <= 20) {
//   console.log('номер повторения: ' + num)
//   num ++;
// }

// const array2: number[] = [14, 32, 34, 34, 15, 36, 37, 17];

// for(let i = 0; i < array2.length; i++) {
//   if(array2[i] > 21) {
//     console.log('Ваш возраст: ' + array2[i] + ' Вы проходите')
//   } else {
//     console.log('Ваш возраст: ' + array2[i] + ' Вход запрещен!!!')
//   }
// }

// let array3: number[] = [14, 32, 34, 34, 15, 36, 37, 17];

// let array4: number[] = [...array3] 
//   array4[0] = 777
//   console.log(array3)
//   console.log(array4)

//   let object = {name:'dima', age: 17}
//   let object1 = {name:'dima', age: 17}
//   let object2 = {name:'dima', age: 17}
//   object2.name = 'test'
//   console.log()

// type TMonth = {
//   title: string,
//   days: number
// }

// let mothes:TMonth[] = [
//     {
//       title:'Январь',
//       days: 31
//     },
//     {
//       title:'Февраль',
//       days: 28
//     },
//     {
//       title:'Март',
//       days: 31
//     },
//     {
//       title:'Апрель',
//       days: 31
//     },
//     {
//       title:'Май',
//       days: 31
//     }
// ]

// Добавление нового элемента

// mothes.push({
//   title: "Июнь",
//   days: 31
// })

// console.log(mothes)

// Находим месяца с днями меньше 30
// let mothesMore30Days:TMonth[] = []

// for(let i = 0; i < mothes.length; i++) {
//   if(mothes[i].days < 30) {
//     mothesMore30Days.push(mothes[i])
//   }
// }

// console.log(mothesMore30Days)

// Рассчитать сумму всех дней в массиве

// let sumOfDays: number = 0

// for(let i = 0; i < mothes.length; i++) {
//   sumOfDays += mothes[i].days
// }

// console.log('Сумма всех дней в месяце: ' + sumOfDays)

// Найти месяц в котором мешьше всего дней

// let minMonth: TMonth = mothes[0]
// let maxMonth: TMonth = mothes[0]

// for(let i = 0; i < mothes.length; i++) {
//   if(mothes[i].days < minMonth.days) {
//     minMonth = mothes[i]
//   }
//   if(mothes[i].days < maxMonth.days) {
//     maxMonth = mothes[i]
//   }
// }

// ------------------------------------------------------- Работа Методы Массива 04.12.2023

// let numbers: number[] = [1, 2, 3, 4, 5, 6];

// numbers.unshift(7);
// numbers.splice(2, 0, 7777);
// // Создание новых массивов на основе других массивов
// let numbers2 = numbers.concat(numbers);
// let numbers3 = [...numbers, ...numbers2];

// console.log(numbers3);
// // переборка массивов 
// numbers.forEach((item) => {
//   console.log(item);
// });
// // сортировка элементов
// numbers.sort((a, b) => {
//   return a - b;
// });
// console.log(numbers);

// let strings = ["3000", "2", "30", "200", "5"];
// // map - выполнить действия над всеми элемкнтами массива
// let strToNumber = strings.map((element) => {
//   return parseInt(element);
// });
// console.log(strToNumber);

// let numbersMoreFive = numbers3.filter((item) => item > 5)

// console.log(numbersMoreFive)


// type TCategory = 'smartphone' | 'laptop'

// type TStuff = {
//   category: TCategory,
//   price: number,
//   count: number
// }

// let stuffs: TStuff[] = [
//   {
//     category: 'smartphone',
//     price: 400000,
//     count: 10
//   },
//   {
//     category: 'laptop',
//     price: 100000,
//     count: 20
//   },
//   {
//     category: 'smartphone',
//     price: 200000,
//     count: 15
//   },
//   {
//     category: 'laptop',
//     price: 300000,
//     count: 30
//   }
// ] 

// let smartphone:TStuff[] = stuffs.filter((item) => {
//   return (item.category === 'smartphone')
// })

// console.log(smartphone)

// let laptops:TStuff[] = stuffs.filter((item) => {
//   return (item.category === 'laptop')
// })

// console.log(smartphone)


// // сортировать по цене по убыванию для этих массивов
// smartphone.sort((a, b) => {return a.price - b.price})
// console.log(smartphone)

// laptops.sort((a, b) => {return a.price - b.price})
// console.log(laptops)


// Увеличиваем цену товаров первой категории на 10%
// stuffs.forEach((item) => {
//   if (item.category === 'smartphone') {
//     item.price *= 1.1;
//   }
// });

// stuffs.forEach((item) => {
//   if (item.category === 'laptop') {
//     item.price *= 1.1;
//   }
// });

// console.log(stuffs);

// ---------------------------------------------------------------------------------------

// Уменьшить цену товаров второй категории на 20%
// stuffs.filter(item => item.category === 'laptop')
//       .forEach(item => item.price *= 0.8);

// stuffs.filter(item => item.category === 'smartphone')
//       .forEach(item => item.price *= 0.8);

// console.log(stuffs);

// ---------------------------------------------------------------------------------------

// type TEmployee = {
//     "name": string,
//     "age": number,
//     "isActive": boolean
// }

// let employee: TEmployee[] = [
//     {
//       "name": "Rina",
//       "age": 58,
//       "isActive": true
//     },
//     {
//       "name": "Kathryn",
//       "age": 25,
//       "isActive": false
//     },
//     {
//       "name": "Wilfred",
//       "age": 17,
//       "isActive": true
//     },
//     {
//       "name": "Genna",
//       "age": 26,
//       "isActive": true
//     },
//     {
//       "name": "Celle",
//       "age": 25,
//       "isActive": true
//     },
//     {
//       "name": "Torre",
//       "age": 24,
//       "isActive": false
//     },
//     {
//       "name": "Amerigo",
//       "age": 46,
//       "isActive": false
//     },
//     {
//       "name": "Shayne",
//       "age": 41,
//       "isActive": true
//     },
//     {
//       "name": "Darline",
//       "age": 32,
//       "isActive": false
//     },
//     {
//       "name": "Rourke",
//       "age": 64,
//       "isActive": false
//     }
// ]

// function calculateSalaryIncrease(age: number): number {
//   if (age < 20) {
//     return 50000;
//   } else if (age < 30) {
//     return 100000;
//   } else if (age < 40) {
//     return 150000;
//   } else {
//     return 200000;
//   }
// }

// function processEmployees(employees: TEmployee[]): TEmployee[] {
//   const activeEmployees = employees.filter((employee) => employee.isActive);

//   const employeesWithSalaryIncrease = activeEmployees.map((employee) => {
//     const salaryIncrease = calculateSalaryIncrease(employee.age);
//     return {
//       ...employee,
//       salary: salaryIncrease,
//     };
//   });

//   const sortedEmployees = employeesWithSalaryIncrease.sort((a, b) => a.age - b.age);

//   return sortedEmployees;
// }

// const result = processEmployees(employee);
// console.log(result);

// --------------------------------------------------------------------- OutFile. Import. Export. WebPack

import { seasons } from "./data";

