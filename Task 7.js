// Модуль 5 задание 7

let nums = [1, 4, 'test', 8, null , NaN, 15, 18];
let oddNums = 0;
let evenNums = 0;

for ( i = 0; i < nums.length; i++ ) {
  if (typeof(nums[i]) == "number" && isNaN(nums[i]) !== true) {
     if (nums[i]%2 == 0) evenNums++
     else oddNums++
   }
}
console.log('Чётных чисел: ' + evenNums);
console.log('Нечётных чисел: '+ oddNums);