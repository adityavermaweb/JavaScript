// //Sum of number using reduce method

// let nums = [1, 2, 3, 4];
// let finalVal = nums.reduce((res, el) => {
//     console.log(res, el);    
//     return res + el
// });
// console.log(finalVal);


//Finding Maximum in array using reduce method

let arr = [1, 4, 2, 5, 6, 7, 2, 9, 2];


// //This is a normal method
// let max = -1;

// for(let i=0; i<arr.length; i++) {
//     if(max < arr[i]) {
//         max = arr[i];
//     }
// }
// console.log(max);


//Using reduce method

let max = arr.reduce((max, el) => {
    if(max < el) {
        return el;
    } else {
        return max;
    }
});

console.log(max);