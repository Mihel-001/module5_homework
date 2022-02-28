// Модуль 5 задание 3

let string = "I love JavaScript";
let result = "";   

 for (i = string.length ; i > 0; i-- ) {
  j = string.slice(i-1,i);
  result += j; 
}
console.log (result);