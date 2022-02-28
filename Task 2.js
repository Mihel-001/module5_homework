// Модуль 5 задание 2

let x = '112'
let result = typeof(x)
switch (result) {
  case "boolean": 
     console.log('X — логический тип');
     break; 
  case "string":
     console.log('X — строка');
     break; 
  case "number":
     console.log('X — число');
     break; 
  default:
     console.log('Тип x не определён');
}