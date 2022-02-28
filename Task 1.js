// Модуль 5 задание 1

let number = +prompt('Введите число:')
if (isNaN(number)) {
console.log('Упс, кажется, вы ошиблись')
} else if (number%2 == 0) {
  console.log('Введённое Вами число чётное');
} else {
  console.log('Введённое Вами число не чётное');
}