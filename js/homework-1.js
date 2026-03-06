// /* /* /* /* /* 🟢 Задача 1. Перевірка довжини

// Оголоси функцію checkLength(text, minLength), яка:
// приймає рядок text і число minLength
// якщо довжина рядка менша за minLength — повертає "Too short"
// /* якщо довжина дорівнює або більша — повертає "Valid" */
// /* 
//  function checkLength(text, minLength){
//     if(text.length < minLength){
//         return "Too short";
//     } else{
//         return "Valid";
//     }
// }
// console.log(checkLength('Hello World!', 7));   */




// /* 🟢 Задача 2. Заборонені слова

// Оголоси функцію hasForbiddenWords(message), яка:
// приймає рядок message
// перевіряє, чи містить він слова "error" або "fail"
// регістр не має значення (ERROR, Fail, fAiL — теж підходять)
// повертає true або false */

// /* function hasForbiddenWords(message){
//   const normalized = message.toLowerCase();
//   return normalized.includes("error") || normalized.includes("fail");
// }

// console.log(hasForbiddenWords("Latest technology news")); // false
// console.log(hasForbiddenWords("JavaScript weekly newsletter")); // false
// console.log(hasForbiddenWords("Get best sale offers now!")); // true
// console.log(hasForbiddenWords("Amazing SalE, only tonight!")); // true
// console.log(hasForbiddenWords("Trust me, this is not a spam message")); // true
// console.log(hasForbiddenWords("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(hasForbiddenWords("[ERROR] How to earn fast money?")); // true   */



// /* 🟢 Задача 3. Обрізання рядка
// Оголоси функцію shortenText(text, maxLength), яка:
// приймає рядок text і число maxLength
// якщо довжина рядка не перевищує maxLength — повертає text
// якщо перевищує — обрізає рядок до maxLength символів і додає "..." */
// /* 
//  function shortenText(text, maxLength){
//     if(text.length <= maxLength){
//         return text;
//     } else{
//         return text.slice(0, maxLength) + "...";
//     }
// }
// console.log(shortenText('Hello World', 7)); 
//  */



// /* Задача 4. Плани підписки
// Оголоси функцію getSubscriptionPrice(type), яка:
// приймає рядок type
// використовує switch
// "basic" → "Basic plan costs 10$"
// "pro" → "Pro plan costs 25$"
// "premium" → "Premium plan costs 40$"
// будь-яке інше значення → "Unknown subscription type" */

// /*  function getSubscriptionPrice(type){
//     let price;
//     switch(type){
//       case 'basic' : price = 10;
//       return `${type} plan costs ${price}$`;
//       case 'pro' : price = 25;
//       return `${type} plan costs ${price}$`;
//       case 'premium' : price = 40;
//       return `${type} plan costs ${price}$`;
//       default :
//       return `Unknown subscription type`;
// }  
//     }
//     console.log(getSubscriptionPrice('basic'));
//     console.log(getSubscriptionPrice('pro'));
//     console.log(getSubscriptionPrice('premium'));  */


// /* Оголоси функцію isEven(number), яка:
// приймає число number
// повертає true, якщо число парне
// повертає false, якщо непарне */
// /* 
//  function isEven(number){
//     if(number % 2 === 0){
//         return true;
//     } else{
//         return false;
//     }
// }
// console.log(isEven(9));
// console.log(isEven(8));  */



// /* Комбінована задача 1. Повідомлення + обмеження
// Оголоси функцію formatNotification(message, maxLength), яка:
// приймає рядок message і число maxLength
// якщо рядок порожній → повертає "No message"
// якщо довжина рядка менша або дорівнює maxLength → повертає message
// якщо довжина більша → обрізає до maxLength символів і додає "..." */

// /*  function formatNotification(message, maxLength){
//     if(message === ""){
//         return "No message";
//     } else if(message.length <= maxLength){
//         return message;
//     } else{
//         return message.slice(0, maxLength) + "...";
//     }
// }
// console.log(formatNotification('message formatNotification(message, maxLength)', 12));
// console.log(formatNotification('message ', 12));
// console.log(formatNotification('', 12)); 

//  */


// /* 🟡 Комбінована задача 2. Перевірка доступу
// Оголоси функцію checkAccess(role, isLoggedIn), яка:
// role — рядок ("admin", "user", "guest")
// isLoggedIn — boolean
// якщо role === "admin" і isLoggedIn === true → "Full access"
// якщо role === "user" і isLoggedIn === true → "Limited access"
// у всіх інших випадках → "Access denied" */

// /* function checkAccess(role, isLoggedIn){
//     if(role === 'admin' && isLoggedIn === true){
//         return "Full access";
//     } else if(role === "user" && isLoggedIn === true){
//         return "Limited access";
//     } else{
//         return "Access denied";
//     }
// /* } */
// /* console.log(checkAccess('admin', true));
// console.log(checkAccess('user', true));
// console.log(checkAccess('admin', false));
// console.log(checkAccess('admin', true)); */


// /* 
// function getExtremeElements(array) {
//   return [array[0], array[array.length -1]]
// }
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"])); */

// /* function calculateEngravingPrice(message, pricePerWord) {
//   return message.split(' ').length * pricePerWord;
// } */

// /* function createArrayOfNumbers(min, max) {
//   let num = [];
//   for (let i = min; i <= max; i++) {
//    num.push(i);
//  }
// return num;
 
// }
// console.log(createArrayOfNumbers(1, 3)); */







// // ! //////////////////////////////////////////////////////////////////////////////////////////////////




// /* /* /* Завдання 1: */

// //  Створіть масив styles з елементами 'jazz' і 'blues'
// //  Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// //  Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// //  Напишіть функцію logItems(array), яка приймає масив як аргумент
// //  і виводить у консоль кожен його елемент у форматі:
// //  "<номер елемента> - <значення елемента>".
// //  Використайте цикл for для перебору елементів масиву.
// //  Нумерація елементів повинна починатися з 1 (а не з 0).



// // const styles = ['jazz', 'blues'];
// // styles.push('rock-n-roll');
// // styles[1] = 'classic';
// // console.log(styles);
// // function logItems(array){
// //     for (let i = 1; i <= array.length; i++){
// // console.log(i + " - " + array[i - 1]);
// //     }

// // }
// // logItems(styles);


// // /* Завдання 2: */

// //  Напишіть функцію checkLogin(array), яка:
// //  Приймає масив логінів як аргумент.
// //  Запитує ім'я користувача через prompt.
// //  Перевіряє, чи є введене ім'я у переданому масиві.
// //  Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// //  Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// //  const logins = ["Peter", "John", "Igor", "Sasha"];

// // function checkLogin(array){
// //    const logins = ["Peter", "John", "Igor", "Sasha"];
// //    const userName = prompt('Введіть логін');
// //     if(array.includes(userName)){
// //        alert(`Welcome, ${userName}!`)
// //     } else{
// //         alert("User not found");
// //     }
// // }
// // checkLogin(["Peter", "John", "Igor", "Sasha"]); 

// // /* Завдання 3: */

// //  Напишіть функцію caclculateAverage(),
// //  яка приймає довільну кількість
// //  аргументів і повертає їхнє середнє значення.
// //  Додайте перевірку, що аргументи - це числа.

// // function caclculateAverage() {
// //   let total = 0;
// //   let count = 0;
// //   for (const value of arguments) {
// //     if (typeof value === "number") {
// //       total += value;
// //       count += 1;
// //     }
// //   }
// //   if (count === 0) {
// //     return 0;
// //   }
// //   return total / count;
// // }
// // console.log(caclculateAverage(1, 4, 5, 9)); 
// // console.log(caclculateAverage(10, "a", 20)); 



// // /* Завдання 4: */

// //  Напишіть функцію, яка сумуватиме сусідні числа 
// //  і пушитиме їх в новий масив.

// //  const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// //  уточнення: складати необхідно перше число з другим, потім друге - з третім, 
// //  третє - з четвертим і так до кінця.
// //  В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// // function caclculateSum (array){
// // const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// // }
 

// // /* Завдання 5: */

// //  Напишіть функцію findSmallestNumber(numbers),
// //  яка шукає найменше число в масиві.
// //  Додайте перевірку, що функція отримує саме масив, і 
// //  якщо функція отримує масив - поверніть з функції найменше число,
// //  в іншому випадку - поверніть 'Sory, it is not an array!'.



// // function findSmallestNumber(numbers) {
// //     if (!Array.isArray(numbers)) {
// //     return "Sory, it is not an array!";
// //   }
// //   let min = numbers[0];
// //   for (const number of numbers) {
// //     if (number < min) {
// //       min = number;
// //     }
// //   }
// //   return min;
// // }
// // console.log(findSmallestNumber([2, 5, 35, 56, 12, 24, 7, 80, 3])); 


// // /* Завдання 6: */

// //  Напишіть функцію findLongestWord(string), яка 
// //  приймає довільний рядок, що складається лише зі слів, розділених
// //  пробілами (параметр string), і повертатиме найдовше слово у реченні.

// //  Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// //  console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'


// // function findLongestWord(string) {
// //   const words = string.split(" ");
// //   let longestWord = words[0];
// //   for (const word of words) {
// //     if (word.length > longestWord.length) {
// //       longestWord = word;
// //     }
// //   }
// //   return longestWord;
// // }
// // console.log(findLongestWord("London is the capital of Great Britain")); // 'capital' 

// // /* Завдання 7: */

// //  Напишіть скрипт, який для об'єкту user, послідовно:
// //  1 - додасть поле mood зі значенням 'happy',
// //  2 - замінить hobby на 'skydiving',
// //  3 - замінить значення premium на false,
// //  4 - виведе зміст об'єкта user у форматі
// //  '<ключ>:<значення>' використовуя Object.keys() та for...of

// // const user = {
// //   name: "John",
// //   age: 20,
// //   hobby: "tenis",
// //   premium: true,
// // };
// // user.mood = "happy";
// // user.hobby = "skydiving";
// // user.premium = false;
// // const keys = Object.keys(user);
// // for (const key of keys) {
// //   console.log(`${key}:${user[key]}`);
// // } 



// //  /*  Завдання 8: */

// //  Є об'єкт, в якому зберігаються зарплати команди
// //  Напишіть код для додавання усіх зарплат та
// //  збережіть його результат в змінній sum.
// //  Якщо об'єкт salaries пустий, то результат має бути 0

// // const salaries = {
// //   Mango: 100,
// //   Poly: 160,
// //   Ajax: 1470,
// // };
// // let sum = 0;
// // for (const key in salaries) {
// //   sum += salaries[key];
// // }
// // console.log(sum);



// // /* Завдання 9: */

// //  Створіть об'єкт calculator з наступними методами:
// //  read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// //  sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// //  mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// //  винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// //  Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// //  методи sum і mult мають повертати рядок 'No such propeties'


// // const calculator = {
// //   read(a, b) {
// //     this.a = a;
// //     this.b = b;
// //   },
// //   exist() {
// //     return this.hasOwnProperty("a") && this.hasOwnProperty("b");
// //   },
// //   sum() {
// //     if (!this.exist()) {
// //       return "No such propeties";
// //     }
// //     return this.a + this.b;
// //   },
// //   mult() {
// //     if (!this.exist()) {
// //       return "No such propeties";
// //     }
// //     return this.a * this.b;
// //   },
// // };
// // calculator.read(5, 3);
// // console.log(calculator.sum());   
// // console.log(calculator.mult());  



// // /* Завдання 10: */

// //  Напишіть функцію calcTotalPrice(fruits, fruitName),
// //  яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// //  Функція рахує і повертає загальну вартість фрукта
// //  з таким ім'ям, ціною та кількістю з об'єкта.

// //  Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою 
// //  назвою фрукта, це також треба урахувати.

// // const fruits = [
// //      { name: "Яблуко", price: 45, quantity: 7 },
// //      { name: "Апельсин", price: 60, quantity: 4 },
// //      { name: "Банан", price: 125, quantity: 8 },
// //      { name: "Груша", price: 350, quantity: 2 },
// //      { name: "Виноград", price: 440, quantity: 3 },
// //      { name: "Банан", price: 125, quantity: 3 },
// //    ];
// // function calcTotalPrice(fruits, fruitName) {
// //   let sum = 0;
// //   for (const fruit of fruits) {
// //     if (fruit.name === fruitName) {
// //       sum += fruit.price * fruit.quantity;
// //     }
// //   }
// //   return sum;
// //   }
// // console.log(calcTotalPrice(fruits, "Виноград")); 
// // console.log(calcTotalPrice(fruits, "Груша"));  




// // function addOverNum(value, ...args) {
// //   let sum = 0;

// //   for (const num of args) {
// //     if (num > value) {
// //       sum += num;
// //     }
// //   }

// //   return sum;
// // }
// // console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));


// // Задача (на закріплення this і методів об’єкта)

// // Є об’єкт car, який описує автомобіль:

// // const car = {
// //   brand: "Toyota",
// //   mileage: 12000,
// // changeBrand(newBrand){
// //   this.brand = newBrand;
// // },
// // addMileage(km){
// //   this.mileage += km; 
// // },
// // getInfo(){
// //   return `${this.brand} has ${this.mileage} km`;
// // },


// // };
// // console.log(car.getInfo());


// // 👉 Потрібно доповнити об’єкт методами:

// // changeBrand(newBrand) — змінює марку авто на нову

// // addMileage(km) — додає пробіг

// // getInfo() — повертає рядок у форматі:

// // Toyota has 12000 km


// // 📌 Умови:

// // використовуй this

// // методи нічого не повинні console.log, а тільки return (де треба)

// // формат рядка має бути точно таким




// // Задача 1 (як з car / profile)
// // Створи об’єкт bankAccount, який має:
// // Властивості:
// // owner — ім’я власника
// // balance — кількість грошей на рахунку
// // Методи:
// // changeOwner(newOwner) — змінює ім’я власника
// // deposit(amount) — додає гроші до балансу
// // withdraw(amount) — віднімає гроші з балансу
// // getInfo() — повертає рядок
// // <owner> has <balance> dollars

// // const bankAccount = {
// //   owner: "Anna",
// //   balance: 1000,
// //  changeOwner(newOwner){
// //     this.owner = newOwner;
// //  },
// //  deposit(amount){
// //     this.balance += amount;
// //  },
// //  withdraw(amount){
// //  this.balance -= amount;
// //  },
// //  getInfo(){
// //     return `${this.owner} has ${this.balance} dollars`;
// //  },
// // };




// // console.log(bankAccount.getInfo()); // "Anna has 1000 dollars"
// // bankAccount.deposit(500);
// // console.log(bankAccount.getInfo()); // "Anna has 1500 dollars"
// // bankAccount.withdraw(200);
// // console.log(bankAccount.getInfo()); // "Anna has 1300 dollars"
// // bankAccount.changeOwner("Kate");
// // console.log(bankAccount.getInfo()); // "Kate has 1300 dollars"



// // Створи об’єкт shoppingCart:

// // const shoppingCart = {
// //   items: ["apple", "banana"],
// //   addItem(item) {
// //     this.items.push(item);
// //     // додає новий товар у масив items
// //   },
// //   removeItem(item){ 
// //     const i = this.items.indexOf(item);
// // if(i !== -1){
// // this.items.splice(i, 1);}

    
// //     // видаляє товар з масиву items
// //   },
// //   getItems() {
// //     return `Items: ${this.items}`;
// //     // повертає рядок: "Items: apple, banana"
// //   },
// // };



// // console.log(shoppingCart.getItems()); // Items: apple, banana
// // shoppingCart.addItem("orange");
// // console.log(shoppingCart.getItems()); // Items: apple, banana, orange
// // shoppingCart.removeItem("banana");
// // console.log(shoppingCart.getItems()); // Items: apple, orange


// // Завдання

// // Є обʼєкт cart, у якому зберігається кошик товарів.
// // Кожен товар — це обʼєкт виду:
// // { name: "apple", price: 10 }

// // Потрібно дописати методи:
// // 1️⃣ addItem(name, price) — додає новий товар у масив items
// // 2️⃣ removeItem(name) — видаляє товар з таким імʼям
// // 3️⃣ getTotalPrice() — повертає загальну суму всіх товарів
// // 4️⃣ getItems() — повертає рядок:
// // "Items: apple (10), banana (20)"

// // 🧱 Заготовка для тебе:
// // const cart = {
// //   items: [
// //     { name: "apple", price: 10 },
// //     { name: "banana", price: 20 },
// //   ],

// //   addItem(newName, newPrice) {
// //     this.items.push({
// //        name: newName, 
// //         price: newPrice,
// //     });
    
// //   },


// //   removeItem(name) {
// //   const index = this.items.findIndex(item => item.name === name);

// //   if (index !== -1) {
// //     this.items.splice(index, 1);
// //   }
// // },

// // getTotalPrice() {
// //   let sum = 0;
// //   for (const item of this.items) {
// //     sum += item.price;
// //   }
// //   return sum;
// // },

// // getItems() {
// //   let result = "Items: ";
// //   for (const item of this.items) {
// //     result += `${item.name} (${item.price}), `;
// //   }
// //   return result.slice(0, -2);
// // }

// // };
// // console.log(cart.getItems()); 
// // // Items: apple (10), banana (20)

// // cart.addItem("orange", 15);
// // console.log(cart.getItems()); 
// // // Items: apple (10), banana (20), orange (15)

// // cart.removeItem("banana");
// // console.log(cart.getItems()); 
// // // Items: apple (10), orange (15)

// // console.log(cart.getTotalPrice()); 
// // // 25

// // 💡 Підказки (якщо застрягнеш):

// // this.items.push(...)

// // this.items.findIndex(...) або for...of

// // sum += item.price

// // 👉 Спробуй написати сама, як ти робила з попередніми задачами.
// // Скинь свій код — я скажу:
// // ✔ що правильно
// // ❌ що підправити
// // 🧠 чому саме так

// // Готова? Пиши своє рішення 👇

// // const arr = [2, 4, 6];
// // const result = arr.filter((el) => el * 2);
// // console.log(result);



// // ..............
// // Задача 1: Підрахунок загального балансу активних користувачів

// // Є масив об’єктів users, де кожен користувач має такі властивості:

// // const users = [
// //   { name: "Alice", isActive: true, balance: 2000 },
// //   { name: "Bob", isActive: false, balance: 1500 },
// //   { name: "Charlie", isActive: true, balance: 3000 },
// //   { name: "Diana", isActive: true, balance: 4000 },
// //   { name: "Eve", isActive: false, balance: 500 }
// // ];

// // const getTotalActiveBalance = (users) =>{
// //    return users.filter(user => user.isActive === true).reduce((total, user) => total + user.balance, 0);
// // };

// // console.log(getTotalActiveBalance(users)); // очікуваний результат: 2000 + 3000 + 4000 = 9000

// // // Додаткові перевірки
// // console.log(getTotalActiveBalance([])); // порожній масив, очікуємо 0

// // console.log(getTotalActiveBalance([
// //   { name: "Tom", isActive: false, balance: 1000 },
// //   { name: "Jerry", isActive: false, balance: 2000 }
// // ])); 
// // усі неактивні, очікуємо 0


// // Завдання:
// // Напиши функцію getTotalActiveBalance(users), яка:

// // Вибирає тільки активних користувачів (isActive === true)

// // Підраховує загальний баланс активних користувачів

// // Використовуй ланцюжок методів (filter → reduce).



// // ......
// // Задача 2: Список імен користувачів за віком
// // Є масив об’єктів users, де кожен користувач має властивості:

// // const users = [
// //   { name: "Alice", age: 25, isActive: true },
// //   { name: "Bob", age: 30, isActive: false },
// //   { name: "Charlie", age: 28, isActive: true },
// //   { name: "Diana", age: 22, isActive: true },
// //   { name: "Eve", age: 35, isActive: false }
// // ];


// // const getActiveUsersNamesSortedByAge = (users) => {
// //     return users
// //     .filter(user => user.isActive === true)
// //     .toSorted((a, b) => a.age - b.age)
// //     .map(user => user.name)
// // };
// // console.log(getActiveUsersNamesSortedByAge(users)); 
// // // Очікуваний результат: ["Diana", "Alice", "Charlie"]

// // Завдання:
// // Напиши функцію getActiveUsersNamesSortedByAge(users), яка:
// // Вибирає тільки активних користувачів (isActive === true)
// // Сортує їх за віком по зростанню
// // Повертає масив тільки з імен користувачів
// // Підказка:
// // Використовуй filter → sort → map
// // Для сортування за віком у функції sort можна робити (a, b) => a.age - b.age)
// // Щоб перевірити, можна використати такий console.log:


// //............................
// // Задача 3: Топ-2 найстарших активних користувачів

// // Є масив користувачів:

// // const users = [
// //   { name: "Alice", age: 25, isActive: true, balance: 2000 },
// //   { name: "Bob", age: 30, isActive: false, balance: 1500 },
// //   { name: "Charlie", age: 28, isActive: true, balance: 3000 },
// //   { name: "Diana", age: 22, isActive: true, balance: 4000 },
// //   { name: "Eve", age: 35, isActive: false, balance: 500 }
// // ];

// // const getTop2OldestActiveUsers = (users) => {
// //     return users
// //     .filter(user => user.isActive === true)
// //     .toSorted((a, b) => b.age - a.age)
// //     .map(user => user.name)
// //     .slice(0, 2)
// // }


// // console.log(getTop2OldestActiveUsers(users)); 
// // Очікуваний результат: ["Charlie", "Alice"]
// // Завдання:
// // Напиши функцію getTop2OldestActiveUsers(users), яка:
// // Вибирає тільки активних користувачів (isActive === true)
// // Сортує їх за віком по спаданні
// // Повертає масив з імен топ-2 найстарших активних користувачів
// // Підказка:
// // Починай з filter
// // Потім сортуй через toSorted((a, b) => b.age - a.age)
// // Потім через map(user => user.name)
// // І вибери тільки перші два елементи за допомогою slice(0, 2)


// // ....................................

// // Задача 4: Загальний баланс користувачів з певними друзями

// // Є масив користувачів:

// // const users = [
// //   { name: "Alice", friends: ["Bob", "Charlie"], balance: 2000 },
// //   { name: "Bob", friends: ["Alice"], balance: 1500 },
// //   { name: "Charlie", friends: ["Alice", "Diana"], balance: 3000 },
// //   { name: "Diana", friends: ["Charlie"], balance: 4000 },
// //   { name: "Eve", friends: [], balance: 500 }
// // ];

// // const getTotalBalanceByFriend = (users, friendName) =>{
// //     return users
// //     .filter(user => user.friends.includes(friendName))
// //     .reduce((total, user) => total + user.balance, 0)
// // }

// // console.log(getTotalBalanceByFriend(users, "Alice")); // 2000 + 3000 = 5000
// // console.log(getTotalBalanceByFriend(users, "Charlie")); // 2000 + 4000 = 6000
// // console.log(getTotalBalanceByFriend(users, "Eve")); // 0


// // Завдання:
// // Напиши функцію getTotalBalanceByFriend(users, friendName), яка:
// // Вибирає всіх користувачів, у яких в масиві friends є friendName
// // Повертає загальний баланс (balance) цих користувачів
// // Підказка:
// // Використовуй filter → reduce
// // Для перевірки друга в масиві використай includes


// // ..........................................
// // Задача 5: Найпопулярніший друг

// // Є масив користувачів:

// const users = [
//   { name: "Alice", friends: ["Bob", "Charlie"] },
//   { name: "Bob", friends: ["Alice", "Charlie"] },
//   { name: "Charlie", friends: ["Alice", "Diana"] },
//   { name: "Diana", friends: ["Charlie", "Alice"] },
//   { name: "Eve", friends: [] }
// ];

// const getMostPopularFriend = (users) => {
//   const allFriends = users.flatMap(user => user.friends);

//   const counts = allFriends.reduce((acc, friend) => {
//     acc[friend] = (acc[friend] || 0) + 1;
//     return acc;
//   }, {});

//   const maxCount = Math.max(...Object.values(counts));

//   // сортуємо ключі алфавітом і беремо першого з maxCount
//   const mostPopular = Object.keys(counts)
//     .sort() // алфавітно
//     .find(friend => counts[friend] === maxCount);

//   return mostPopular;
// };




// console.log(getMostPopularFriend(users)); // "Alice"

// // Завдання:
// // Напиши функцію getMostPopularFriend(users), яка:
// // Збирає усіх друзів усіх користувачів
// // Визначає друга, який зустрічається найчастіше
// // Повертає його ім’я
// // Підказка:
// // Використовуй flatMap для збору всіх друзів у один масив
// // Потім можна використовувати reduce, щоб порахувати кількість появ кожного друга
// // І знайти того, у кого максимальна кількість появ










