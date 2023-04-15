//  Задания юнита расположены на сайте.


// Task 1

// const goods_1 = new Goods('apple', 23.5);
// console.log(goods_1);


// Task 2

// const goods_1 = new Goods('apple', 23.5, 'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-48.png', 400);
// console.log(goods_1);

// Task3

const goods_1 = new Goods('apple', 23.5, 'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-48.png', 400);
console.log(goods_1);
// И теперь выведем на страницу
document.querySelector('.out-3').append(goods_1.draw());

// Task 4

const goods_my = new Goods('tomatoes', 15.5, 'https://cdn0.iconfinder.com/data/icons/vectr-examples/640/food-ketchup-v1-512.png', 300);
console.log(goods_my);
document.querySelector('.out-4').append(goods_my.draw());


// Task 7

const goods_7 = new Goods2('apple', 23.5, 'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-48.png', 400, true);
console.log(goods_7);
document.querySelector('.out-7').append(goods_7.draw());


// Task 10

// const v1 = new Valid('test@ua.ua', 'qwertyu');
// console.log(v1.validate());
// console.log(v1.isValid);

// const v2 = new Valid('test@ua.ua', 'qwe');
// console.log(v2.validate());
// console.log(v2.isValid);


// Task 12

// const v12 = new Valid2('test@ua.ua', 'qwertyu');
// console.log(v12.validate());
// console.log(v12.isValid);
// console.log(v12.error_message);

// const v13 = new Valid2('test@ua.ua', 'qwe');
// console.log(v13.validate());
// console.log(v13.isValid);
// console.log(v13.error_message);

// const v14 = new Valid2('', 'qwertyu');
// console.log(v14.validate());
// console.log(v14.isValid);
// console.log(v14.error_message);