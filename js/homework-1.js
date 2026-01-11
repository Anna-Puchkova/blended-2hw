/* 🟢 Задача 1. Перевірка довжини

Оголоси функцію checkLength(text, minLength), яка:
приймає рядок text і число minLength
якщо довжина рядка менша за minLength — повертає "Too short"
/* якщо довжина дорівнює або більша — повертає "Valid" */

/* function checkLength(text, minLength){
    if(text.length < minLength){
        return "Too short";
    } else{
        return "Valid";
    }
}
console.log(checkLength('Hello World!', 7));  */




/* 🟢 Задача 2. Заборонені слова

Оголоси функцію hasForbiddenWords(message), яка:
приймає рядок message
перевіряє, чи містить він слова "error" або "fail"
регістр не має значення (ERROR, Fail, fAiL — теж підходять)
повертає true або false */

/* function hasForbiddenWords(message){
  const normalized = message.toLowerCase();
  return normalized.includes("error") || normalized.includes("fail");
}

console.log(hasForbiddenWords("Latest technology news")); // false
console.log(hasForbiddenWords("JavaScript weekly newsletter")); // false
console.log(hasForbiddenWords("Get best sale offers now!")); // true
console.log(hasForbiddenWords("Amazing SalE, only tonight!")); // true
console.log(hasForbiddenWords("Trust me, this is not a spam message")); // true
console.log(hasForbiddenWords("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(hasForbiddenWords("[ERROR] How to earn fast money?")); // true  */



/* 🟢 Задача 3. Обрізання рядка
Оголоси функцію shortenText(text, maxLength), яка:
приймає рядок text і число maxLength
якщо довжина рядка не перевищує maxLength — повертає text
якщо перевищує — обрізає рядок до maxLength символів і додає "..." */

/* function shortenText(text, maxLength){
    if(text.length <= maxLength){
        return text;
    } else{
        return text.slice(0, maxLength) + "...";
    }
}
console.log(shortenText('Hello World', 7)); */




/* Задача 4. Плани підписки
Оголоси функцію getSubscriptionPrice(type), яка:
приймає рядок type
використовує switch
"basic" → "Basic plan costs 10$"
"pro" → "Pro plan costs 25$"
"premium" → "Premium plan costs 40$"
будь-яке інше значення → "Unknown subscription type" */

/* function getSubscriptionPrice(type){
    let price;
    switch(type){
      case 'basic' : price = 10;
      return `${type} plan costs ${price}$`;
      case 'pro' : price = 25;
      return `${type} plan costs ${price}$`;
      case 'premium' : price = 40;
      return `${type} plan costs ${price}$`;
      default :
      return `Unknown subscription type`;
}  
    }
    console.log(getSubscriptionPrice('basic'));
    console.log(getSubscriptionPrice('pro'));
    console.log(getSubscriptionPrice('premium')); */


/* Оголоси функцію isEven(number), яка:
приймає число number
повертає true, якщо число парне
повертає false, якщо непарне */

/* function isEven(number){
    if(number % 2 === 0){
        return true;
    } else{
        return false;
    }
}
console.log(isEven(9));
console.log(isEven(8)); */



/* Комбінована задача 1. Повідомлення + обмеження
Оголоси функцію formatNotification(message, maxLength), яка:
приймає рядок message і число maxLength
якщо рядок порожній → повертає "No message"
якщо довжина рядка менша або дорівнює maxLength → повертає message
якщо довжина більша → обрізає до maxLength символів і додає "..." */

/* function formatNotification(message, maxLength){
    if(message === ""){
        return "No message";
    } else if(message.length <= maxLength){
        return message;
    } else{
        return message.slice(0, maxLength) + "...";
    }
}
console.log(formatNotification('message formatNotification(message, maxLength)', 12));
console.log(formatNotification('message ', 12));
console.log(formatNotification('', 12)); */




/* 🟡 Комбінована задача 2. Перевірка доступу
Оголоси функцію checkAccess(role, isLoggedIn), яка:
role — рядок ("admin", "user", "guest")
isLoggedIn — boolean
якщо role === "admin" і isLoggedIn === true → "Full access"
якщо role === "user" і isLoggedIn === true → "Limited access"
у всіх інших випадках → "Access denied" */

function checkAccess(role, isLoggedIn){
    if(role === 'admin' && isLoggedIn === true){
        return "Full access";
    } else if(role === "user" && isLoggedIn === true){
        return "Limited access";
    } else{
        return "Access denied";
    }
}
console.log(checkAccess('admin', true));
console.log(checkAccess('user', true));
console.log(checkAccess('admin', false));
console.log(checkAccess('usese', true));