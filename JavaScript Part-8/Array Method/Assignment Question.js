//Sol-1
// let nums = [1, 2, 3, 4, 5];

// const square = nums.map((num) => num * num);
// console.log(square);

// let sum = square.reduce((acc, cur) => acc + cur, 0);
// console.log(sum);

// let avg = sum / nums.length;
// console.log(avg);


//Sol-2
// let arr = [2, 4, 6, 8, -2, -4];
//  console.log(arr.map((arr) => arr + 5));


//Sol-3
// let string = ["good","place","varanasi","assai"];
// console.log(string.map((string) => string.toUpperCase()));


//Sol-4
// const doubleAndReturnArys = (arr, ...args) => [...arr, ...args.map((v) => v * 2),];

// doubleAndReturnArys([1, 2, 3], 4, 4);
// doubleAndReturnArys([2], 10, 4);

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
mergeObjects({ a: 1, b: 2}, { c: 3, d: 4});
