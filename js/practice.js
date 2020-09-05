// const printMessage = function (message) {
//   console.log(message);
// };

// const higherOrderFunction = function (callback) {
//   const string = 'HOCs are awesome';
//   callback(string);
// };

// higherOrderFunction(printMessage);

// const filter = function (array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//     const passed = test(element);
//     //console.log(test(element));
//     console.log(passed);

//     if (passed) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// };

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.log(freshFruits); // массив с объектами apples и bananas

// const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(fruitsWithQuantity); // массив с объектами apples и grapes

// function multiply(a, b) {
//   return a * b;
// }

// function sum(a, b) {
//   return a + b;
// }

// let total = sum(4, 7);
// console.log(total);

// let result = multiply(3, sum(1, 5)) / 10;
// /*->multiply(3,20){
// return 3*20=60
// }
// */

// console.log(result);

// console.log(multiply(3, 4));

// console.log(multiply(5, 5, 2));

// десь у мене на компютері в кластері 1 є функція, посилання, щоб добратися
// const fnA = function (message, callback) {
//   console.log(message);
//   console.log(callback);
//   callback(4, 8, 4);
// };

// const fnB = function (x, y) {
//   console.log('Результат суммирования: ' + (a + b));
// };

// // fnA('gdhjghd', fnB);

// function fnC(a, b, c) {
//   console.log((a * b) / c);
// }

// fnA(1, fnB);
// fnB();
// fnA();

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// function multiply(x, y) {
//   return x * y;
// }

// function divide(x, y) {
//   return x / y;
// }

// function sqrt(x) {
//   return Math.sqrt(x);
// }

// doMath(5, 40, multiply);
// doMath(5, 40, divide);
// doMath(25, 0, sqrt);

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag -> this', this);
//   },
// };

// user.showTag();
// console.log(user);

// const foo = function () {
//   console.log('foo -> this', this);
// };

// foo();

// const showTag = function () {
//   console.log('showTag -> this', this);
//   console.log('showTag -> this.name', this.name);
// };

// user.showUserTag = showTag;
// //console.log('user', user);

// user.showUserTag();

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
//   },
// };

// //user.showTag();

// const outerShowTag = user.showTag;

// //outerShowTag();
// console.log(user.showTag());

//const boundFn = fn.bind(obj, arg1, arg2, ...)

// const greet = function (guest) {
//     return `${guest}, welcome to ${this.name}!`;
// };

// const hotel = { name: 'Resort Hotel' };

// const hotelGreeter = greet.bind(hotel, 'Mango');

// hotelGreeter(); // "Mango, wellcome to Resort Hotel!"

// const hotel = {
//   name: 'Resort Hotel',
//   greet(guest) {
//     return `${guest}, welcome to ${this.name}!`;
//   },
// };

// console.log(hotel.greet('Mango'));

// const hotel = {
//   name: 'Resort Hotel',
//   showThis() {
//     console.log(this);
//   },
// };

// const fn = function (callback) {
//   callback();
// };

// //hotel.showThis();

// // Передаем копию метода showThis с контекстом привязанным к hotel
// fn(hotel.showThis.bind(hotel)); // {name: "Resort Hotel", showThis: ƒ}

// const changeColor = function (color) {
//   console.log('changeColor -> this', this);
//   this.color = color;
// };

// const hat = {
//   color: 'black',
//   showColor() {}, // changeColor
// };

// hat.showColor = changeColor;
// //
// hat.showColor('red');
// console.log(hat.color);

// changeColor.call(hat, 'orange', 'bljvmvm');

// console.log(hat);

// const counter = {
//   value: 0,
//   increment(value) {
//     console.log('increment -> this', this);
//     this.value +=  ;
//   },
//   decrement(value) {
//     console.log('decrement -> this', this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// updateCounter(10, counter.increment.bind(counter));
// console.log(counter.value);
// updateCounter(5, counter.decrement.bind(counter));
// console.log(counter.value);
