// Модуль 5 задание 6

let nums = [1, 1, 1, 1, 1, 1, 1];
let result = 0;
for ( i = 0; i < nums.length - 1; i++ ) {
      if (nums[i] == nums[i+1]){
         result++;  
  }
}

if (result == nums.length  - 1) {
   console.log('Все элементы массива одинаковые');  
}
else{
   console.log('Не все элементы массива одинаковые');  
  }
  