// // Импорт как объект
// import * as testObject from "./src/scripts/test";

// // Обычный импорт
// import { testFunction } from "./src/scripts/test";

// // Импорт при экспорте по умолчанию
// // import testFunction from "./src/scripts/test";

// const office = {
//     tech: {
//         employersCount: 10,
//         jobsCount: 5
//     },
//     design: {
//         employersCount: 10,
//         jobsCount: 5
//     }
// }

// let sumOfWorks = 0;
// Object.entries(office).forEach(([keys, values]) => {
//     sumOfWorks += values.jobsCount
// })

// type TDepartment1 = {
//     "tech": string | number,
//     "turbo": string | number,
//     "chemical": string | number
// }

// ----------------------------------------------------------------

// type TParams = {
//   width: number;
//   height: number;
//   weight: number;
// };

// type TDetails = {
//   title: string;
//   params: TParams;
// };

// type TDeportament = {
//   name: string;
//   details: TDetails[];
//   mainEngineer: string;
//   deadline: string;
// };

// type TDeportaments = {
//   tech: TDeportament[];
//   turbo: TDeportament[];
//   chemical: TDeportament[];
// };

// const data: TDeportaments = {
//   tech: [
//     {
//       name: "Проект Автоматизации",
//       details: [
//         {
//           title: "Шасси",
//           params: { width: 45, height: 20, weight: 70 },
//         },
//         {
//           title: "Двигатель",
//           params: { width: 35, height: 35, weight: 120 },
//         },
//         {
//           title: "Экран",
//           params: { width: 25, height: 15, weight: 20 },
//         },
//         {
//           title: "Кабель",
//           params: { width: 5, height: 1000, weight: 30 },
//         },
//         {
//           title: "Корпус",
//           params: { width: 60, height: 40, weight: 200 },
//         },
//       ],
//       mainEngineer: "Иван Иванов",
//       deadline: "2023-12-15",
//     },
//     {
//       name: "Система Охлаждения",
//       details: [
//         {
//           title: "Трубы",
//           params: { width: 10, height: 200, weight: 50 },
//         },
//         {
//           title: "Компрессор",
//           params: { width: 40, height: 40, weight: 110 },
//         },
//         {
//           title: "Радиатор",
//           params: { width: 50, height: 30, weight: 75 },
//         },
//         {
//           title: "Вентилятор",
//           params: { width: 20, height: 20, weight: 25 },
//         },
//         {
//           title: "Фильтр",
//           params: { width: 15, height: 15, weight: 10 },
//         },
//       ],
//       mainEngineer: "Петр Петров",
//       deadline: "2023-10-20",
//     },
//   ],
//   turbo: [
//     {
//       name: "Турбина A-100",
//       details: [
//         {
//           title: "Лопатки",
//           params: { width: 5, height: 30, weight: 20 },
//         },
//         {
//           title: "Вал",
//           params: { width: 10, height: 200, weight: 100 },
//         },
//         {
//           title: "Кожух",
//           params: { width: 100, height: 100, weight: 400 },
//         },
//         {
//           title: "Подшипник",
//           params: { width: 15, height: 15, weight: 10 },
//         },
//         {
//           title: "Система смазки",
//           params: { width: 30, height: 30, weight: 70 },
//         },
//       ],
//       mainEngineer: "Сергей Сергеев",
//       deadline: "2024-02-28",
//     },
//     {
//       name: "Турбогенератор B-200",
//       details: [
//         {
//           title: "Ротор",
//           params: { width: 40, height: 100, weight: 300 },
//         },
//         {
//           title: "Статор",
//           params: { width: 50, height: 110, weight: 320 },
//         },
//         {
//           title: "Соединительная часть",
//           params: { width: 20, height: 30, weight: 50 },
//         },
//         {
//           title: "Панель управления",
//           params: { width: 60, height: 40, weight: 90 },
//         },
//         {
//           title: "Кабельное соединение",
//           params: { width: 10, height: 500, weight: 100 },
//         },
//       ],
//       mainEngineer: "Андрей Андреев",
//       deadline: "2023-11-15",
//     },
//   ],
//   chemical: [
//     {
//       name: "Синтез органических соединений",
//       details: [
//         {
//           title: "Реактор",
//           params: { width: 100, height: 200, weight: 600 },
//         },
//         {
//           title: "Фильтр",
//           params: { width: 30, height: 30, weight: 40 },
//         },
//         {
//           title: "Колонна дистилляции",
//           params: { width: 80, height: 300, weight: 800 },
//         },
//         {
//           title: "Хранилище",
//           params: { width: 150, height: 150, weight: 1000 },
//         },
//         {
//           title: "Система насосов",
//           params: { width: 40, height: 40, weight: 120 },
//         },
//       ],
//       mainEngineer: "Екатерина Смирнова",
//       deadline: "2023-09-30",
//     },
//     {
//       name: "Производство удобрений",
//       details: [
//         {
//           title: "Бункер",
//           params: { width: 200, height: 200, weight: 1500 },
//         },
//         {
//           title: "Мешалка",
//           params: { width: 50, height: 50, weight: 200 },
//         },
//         {
//           title: "Лента конвейера",
//           params: { width: 100, height: 1000, weight: 400 },
//         },
//         {
//           title: "Система сушки",
//           params: { width: 100, height: 100, weight: 500 },
//         },
//         {
//           title: "Пакетировочная машина",
//           params: { width: 60, height: 60, weight: 300 },
//         },
//       ],
//       mainEngineer: "Ольга Олеговна",
//       deadline: "2023-07-15",
//     },
//   ],
// };

// const calculateDetailCost = (params: TParams): number => {
//   return ((params.width * params.height) / params.weight) * 150;
// }

// console.log(calculateDetailCost);


// --------------------------------- 25.12.23 Time Async Promise --------------------------------------------

// const getName = () => {
//     console.log("name")
// }
// console.log("test2")
// setInterval(() => {
//   getName();
// },2000)
// getName()
// console.log("test")


// -----------

// const getData = async () => {
//   return fetch("https://jsonplaceholder.typicode.com/posts/1") 
// }

// type TUser = {
//   nameId: number,
//   id: number,
//   body: string,
//   title: string
// }

// const getResult = async (status) => {
//   let user: TUser = await (await getData()).json()
//   return new Promise((resolve, reject) =>{
//     setTimeout(() => {
//       if(status) {
//         resolve(user);
//       } else {
//         reject(new Error("Произошла ошибка"));
//       }
//     },1000)
//   })
// }

// const checkResult = async () => {
//   let user = await getResult(true) as TUser
//     console.log(user)
// }
// checkResult().catch((error) => {
//   console.log(error)
// }) 

// --------------------------------------------------------------------------------------------------

// type TUser = {
//   postId: number;
//   id: number;
//   name: string;
//   email: string;
//   body: string;
// };

// const getData = async () => {
//   return fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
// }

// const getResult = async () => {
//   let data:TUser[] = await(await getData()).json()
//     return data
// }

// const findUser = async () => {
//   let users:TUser[] = await getResult()
//   let userBody:TUser | null = null
//   users.forEach(user => {
//     if(!userBody || userBody.body.length < user.body.length) {
//       userBody = user
//     }
//   })
//   return userBody
// }

// findUser()
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((error) => {
//     console.log(error)

// ----------------------------------------------------------------

// import { Order } from './src/scripts/data/Order';

// const user = "Дима Желнин";
// const address = "г.Павлодар, ул.Чокина, дом 103, кв40";
// const sum = 30000;

// const order = new Order({ user, address, sum});

// order.newAddress = "г.Павлодар, ул.Торайгырова, дом 103"

// console.log(order.getInfoOrder());


// ----------------------------------------------------------------



import { Products } from "./src/models/Product";

const productsStore = new Products();

console.log(productsStore.allStorages)