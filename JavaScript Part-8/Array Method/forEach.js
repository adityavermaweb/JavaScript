// let arr = [1, 2, 3, 4, 5];

// // print with arrow function
// arr.forEach( (el) => {
//     console.log(el);
// });



// // print with normal function
// arr.forEach(function (el) {
//     console.log(el);
// });



// let print = function (el) {
//     console.log(el);
// };

// arr.forEach(print);


let arr = [
    {
        name: "aditya",
        marks: 78,
    },
    {
        name: "aman",
        marks: 90,
    },
    {
        name: "shubham",
        marks: 88,
    },
];

arr.forEach((student) => {
    console.log(student.marks);
});