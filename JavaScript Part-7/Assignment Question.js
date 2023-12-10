// //Sol-1
// const arrayAverage = (arr) => {
//     let total = 0;
//     for (let number of arr) {
//         total += number;
//     }
//     return total / arr.lenght;
// };

// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arrayAverage(arr));


//Sol-2
// let num = 4;
// const isEven = (num) => num % 2 == 0;


// //Sol-3
// const object = {
//     message: 'Hello, World!',
//     logMessage() {
//         console.log(this.message);
//     }
// };

// setTimeout(object.logMessage, 1000);

// //ANS is undefined


// let length = 4;
// function callback() {
//     console.log(this.length);
// }

// const object = {
//     length: 5,
//     method(callback) {
//         callback();
//     },
// };

// object.method(callback, 1, 2);

//ANS is undefined