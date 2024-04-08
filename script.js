// function yourNameIs(name) {
//     function alertName() {
//         console.log(`Здравствуйте, ${name}`)
//     }
//     alertName()
// }
// yourNameIs("Зенит")

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.hello = function() {
//     console.log(`Hello, ${this.name}, которому ${this.age} лет`);
// };
// let man = new Person('Зенит', 99);
// man.hello();

// function rekursiyaSum(n) {
//     if (n < 0) {
//         return "Введено отрицательное число!"
//     } else if (n === 1 || n === 0) {
//         return 1;
//     } else {
//         return n + rekursiyaSum(n - 1);
//     }
// }
// console.log(rekursiyaSum(5))

// async function doGetZapros(url, callback) {
//     try {
//         let response = await fetch(url);
//         let data = await response.json();
//         callback(data);
//     } catch (error) {
//         console.error('Ошибка! ', error);
//     }
// }
// doGetZapros('https://jsonplaceholder.typicode.com/posts/1', data => console.log(data))

// let man = {
//     name: "Loberec",
//     surname: "Tremy",
//     age: 90,
// }
// function informationMan(object) {
//     let {name, surname, age} = object;
//     return `Здравствуйте, ${name} с фамилией ${surname}, возрастом ${age}`   
// }
// console.log(informationMan(man))

// function merge(arr1, arr2) {
//     return [...new Set([...arr1, ...arr2])];
// }
// let arr1 = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10, 10, 10]
// let arr2 = [1, 1, 2, 3, 3, 4, 5, 6, 6, 7, 8]
// console.log(merge(arr1, arr2))

// function addInArray(arr, n) {
//     arr ??= [];
//     n ??= 0;
//     arr.includes(n) || arr.push(n);
// }
// let arr = [1, 2, 3];
// addInArray(arr, 4);
// console.log(arr);

// function processUsers(users) {
//     let filteredUsers = users.filter(user => user.age < 30);
//     let namesArray = filteredUsers.map(user => user.name);
//     let namesString = namesArray.reduce((prev, curr) => prev + ', ' + curr);
//     return namesString;
// }
// let users = [
//     {
//         name: "Revan",
//         age: 40,
//         email: "example@example.com"
//     },
//     {
//         name: "Johnatan",
//         age: 99,
//         email: "example@example.com"
//     },
//     {
//         name: "Gronlaq",
//         age: 14,
//         email: "example@example.com"
//     }
// ]
// console.log(processUsers(users))

// async function fetchData(url) {
//     let response = await fetch(url);
//     let data = await response.json();
//     console.log(data);
// }
// fetchData('https://jsonplaceholder.typicode.com/posts/1');

// function* randomnoeCeloeChislo(start, end) {
//     while (true) {
//         yield Math.floor(Math.random() * (end - start + 1)) + start;
//     }
// }
// const randomNumbers = randomnoeCeloeChislo(1, 10);
// for (let i = 0; i < 10; i++) {
//     console.log(randomNumbers.next().value);
// }