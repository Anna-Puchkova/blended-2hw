/* Завдання 1: */

// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).


// const newArray = ['jazz', 'blues'];
// newArray.push('rock-n-roll');
// const index = newArray.indexOf('blues');
// // newArray[index] = 'classic';
// newArray.splice(index, 1, 'classic');
// console.log(newArray);

// function logItems(array){
//     for(let i = 0; i < array.length; i++){
//         console.log(`${i + 1} - ${array[i]}`);
//     }
// }
// logItems(newArray);



/* Завдання 2: */

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".



// const logins = ["Peter", "John", "Igor", "Sasha"];
// function checkLogin(array){
//   const userName = prompt('Введіть логін');
//   if(array.includes(userName)){
//     alert(`Welcome, ${userName}!`)
//   } else{
//     alert("User not found");
//   }
// }
// checkLogin(logins);



/* Завдання 3: */

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.


// function caclculateAverage(){
// let sum = 0;
// let count = 0;
//     for (const arg of arguments){
//     if (typeof arg === 'number'){
//     sum += arg;
//     count += 1;
//     }

// }
// return count === 0 ? 0 : sum / count;
// }
// console.log(caclculateAverage(1, 5, 67, 9, 3));



/* Завдання 4: */

// Напишіть функцію, яка сумуватиме сусідні числа 
// і пушитиме їх в новий масив.

// уточнення: складати необхідно перше число з другим, потім друге - з третім, 
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].




// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// function calcSum(array){
//     const result = [];
// for(let i = 0; i < array.length - 1; i++){
//     result.push(array[i] + array[i + 1]);
// }
//     return result;
// }
// console.log(calcSum(someArr));



/* Завдання 5: */

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і 
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.


// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallestNumber(array){
// if(!Array.isArray(array)){
//     return 'Sory, it is not an array!';
// }else{
//   return Math.min(...array);  
// }
// }

// console.log(findSmallestNumber(numbers));


/* Завдання 6: */

// Напишіть функцію findLongestWord(string), яка 
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:




// function findLongestWord(string) {
//   const words = string.split(" ");
//   let longestWord = words[0];
//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital' 



/* Завдання 7: */

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// const keysArr = Object.keys(user);
// for(const key of keysArr){
//     console.log(`${key}:${user[key]}`);
// }
// for(const key in user){
//     console.log(`${key}:${user[key]}`);
// }

/* Завдання 8: */

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
//   };
// const values = Object.values(salaries);
// let sum = 0;
// for(const value of values){
//     sum += value;
// }

// console.log(sum)



/* Завдання 9: */

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {
//     read(a, b) {
//         this.num1 = a;
//         this.num2 = b;
//     },
//   sum(){
//     if(this.exist()){
//          return this.num1 + this.num2;
//     }else{
//         return 'No such propeties';
//     }
   
//   },
//   mult(){
//     if(!this.exist()){
//     return this.num1 * this.num2;
//   }  return 'No such propeties';
// },
//   exist(){
//     if(this.num1 && this.num2){
//         return true;
//     }else{
//         return false;
//     }
//   },
// }


// calculator.read(2, 5);
// console.log(calculator);
// console.log(calculator.sum());
// console.log(calculator.mult());
// console.log(calculator.exist());


// const calculator = {
//     read(a,b){
//         this.num1 = a;
//         this.num2 = b;
//     },
//     sum(){
//         if (this.exist()){
//             return this.num1 + this.num2;
//         }else{
//             return 'No such propeties';
//         }
        
//     },
//     mult(){
//         if (!this.exist()){
//             return 'No such propeties';
//         }
//         return this.num1 * this.num2;
//     },
//     exist(){
//         if (this.num1 && this.num2){
//             return true;
//         }else{
//             return false;
//         }
//     },
// }

// calculator.read(2,5);
// console.log(calculator);
// console.log(calculator.sum());
// console.log(calculator.mult());
// console.log(calculator.exist());






/* Завдання 10: */

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою 
// назвою фрукта, це також треба урахувати.

// const fruits = [
//      { name: "Яблуко", price: 45, quantity: 7 },
//      { name: "Апельсин", price: 60, quantity: 4 },
//      { name: "Банан", price: 125, quantity: 8 },
//      { name: "Груша", price: 350, quantity: 2 },
//      { name: "Виноград", price: 440, quantity: 3 },
//      { name: "Банан", price: 125, quantity: 3 },
//    ];
// function calcTotalPrice(arr, fruitName) {
//   let sum = 0;
//   for (const fruit of arr) {
//     if (fruit.name === fruitName) {
//       sum += fruit.price * fruit.quantity;
//     }
//   }
//   return sum;
//   }
// console.log(calcTotalPrice(fruits, "Виноград")); 
// console.log(calcTotalPrice(fruits, "Груша"));  
// console.log(calcTotalPrice(fruits, "Банан"));  



// Створіть телефонну книгу - об'єкт phonebook,
// у якого є властивість contacts (список контактів)
// та методи управління книгою:
// add(data) - приймає об'єкт data, де зберігається
// name, email, category, id, createdAt
// (name i email - обов'язкові параметри, які треба передавати
// при додаванні нового контакта,
// category - може передаватись чи ні, якщо ні - має
// приймати значення "default",
// id та createdAt генеруються відповідними методами:
// generateId() і getDate());
// *не забудь додати перевірку, якщо контакт з таким ім'ям чи імейлом вже є - ми його не додаємо
// list() - виводить список контактів у вигляді таблиці;
// filtered(category) - фільтрує контактів по обраній категорії (друзі, робота і т.д.)
// delete(name) - видаляє контакт з заданим ім'ям;
// updateName(oldName, newName) - зиінює ім'я контакта;

// const phonebook = {
//     contacts: [],
//     add(data) {
//         this.contacts.push({
//             name: data.name,
//             email: data.email,
//             category: data.category || 'default',
//             id: this.generateId(),
//             createdAt: this.getDate(),})
    
        
//     },
//     list() {
//         console.table(this.contacts);
//     },
//     filtered(category) {
//         const filt = [];
//         for(const contact of this.contacts){
//             if(contact.category === category){
//                 filt.push(contact);
//             }
//         }
//         return filt;
//     },
//     delete(name) {
//         for(let i = 0; i < this.contacts.length; i++){
//             if(this.contacts[i] === name){
//                 this.contacts.splice(i, 1);
//             }
//         }
//     },
//     updateName(oldName, newName) {
//         for(const contact of this.contacts){
//              if(contact.name === oldName){
//                 contact.name = newName;
//             }
//         }
//     },

//     generateId() {
//       return "#" + Math.random().toString(36).substring(2, 9);
//     },
//     getDate() {
//       return Date.now();
//     },
//   };

  
//   phonebook.add({
//   name: "Mango",
//   email: "mango@mail.com",
//   category: "friends",
// });

// phonebook.add({
//   name: "Poly",
//   email: "poly@hotmail.com",
// });
// phonebook.add({
//   name: "Katy",
//   email: "katy@hotmail.com",
//   category: "friends",
// });
// console.log(phonebook.contacts);
// phonebook.list();
// console.table(phonebook.filtered('friends'));
// phonebook.delete('Katy');
// phonebook.list();
// phonebook.updateName('Poly','Max');
// phonebook.list();




// const phonebook = {
//     contacts: [],
//     add(data) {
//         this.contacts.push({
//             name: data.name,
//             email: data.email,
//             category: data.category || 'default',
//             id: this.generateId(),
//             createdAt: this.getDate(),
//         });
//     },
//     list() {
//         console.table(this.contacts);
//     },
//     filtered(category) {
//         const filt = [];
//         for (const contact of this.contacts){
//             if (contact.category === category){
//                 filt.push(contact);
//             }
//         }
//         return filt;
//     },
//     delete(name) {
//         for (let i = 0; i < this.contacts.length; i++){
//             if (this.contacts[i].name === name){
//                 this.contacts.splice(i,1);
//             }
//         }
//     },
//     updateName(oldName, newName) {
//         for (const contact of this.contacts){
//             if (contact.name === oldName){
//                 contact.name = newName;
//             }
//         }
//     },

//     generateId() {
//       return "#" + Math.random().toString(36).substring(2, 9);
//     },
//     getDate() {
//       return Date.now();
//     },
//   };

//   phonebook.add({
//   name: "Mango",
//   email: "mango@mail.com",
//   category: "friends",
// });

// phonebook.add({
//   name: "Poly",
//   email: "poly@hotmail.com",
// });
// phonebook.add({
//   name: "Katy",
//   email: "katy@hotmail.com",
//   category: "friends",
// });

// console.log(phonebook.contacts);
// phonebook.list();
// console.table(phonebook.filtered('friends'));
// phonebook.delete('Katy');
// phonebook.list();
// phonebook.updateName('Poly','Max');
// phonebook.list();