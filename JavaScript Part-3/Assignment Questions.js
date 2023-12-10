//Sol-1

// let arr = [7, 9, 0, -2];
//  let n = 3;
// let ans = arr.slice(0,n);
// console.log(ans);

//Sol-2

// let arr = [7, 9, 0, -2];
// let n = 3;
// let ans = arr.slice(arr.length-3);
// console.log(ans);

//Sol-3

//this my solution.
// let space = ""
// if (space == [ ]){
//     console.log("The blank" , space);
// }else{
//     console.log("Not blank");
// }

//solution is 
// let str = prompt("please enter a string");
// if(str.length == 0){
//     console.log("string is empty");
// } else {
//     console.log("string is not empty");
// }


//Sol-4

// let str = "ADITYA";
// let idx = 3;
// if(str[idx] == str[idx].toLowerCase()) {
//     console.log("character is lowercase");
// } else {
//     console.log("character is not lowercase");
// }

// Sol-5

// let str = prompt("please enter a string");
// console.log(`original string = ${str}`);
// console.log(`string without spaces = ${str.trim()}`);


//Sol-6

let arr = ["hello", 'a', 23, 64, 99, -6];
let item = 55;
if(arr.indexOf(item) != -1) {
    console.log("element exists in array");
}else {
    console.log("element doesn't exist in array");
}
