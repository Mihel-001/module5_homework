// Модуль 5 задание 8

let myMap = new Map();
myMap.set(1, 'mask1');
myMap.set('2', 'test');
myMap.set(true, 25);

for(let key of myMap.keys()) {
  console.log('Ключ - ' + key + ', значение - ' + myMap.get(key));
}