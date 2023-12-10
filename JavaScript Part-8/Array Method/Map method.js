// let num = [1, 2, 3, 4];

// let double = num.map((el) => {
//     return el * 2;
// });

let student = [
    {
        name: "aditya",
        marks: 88,
    },
    {
        name: "aman",
        marks: 90,
    },
    {
        name: "rajat",
        marks: 92,
    },
];

let gpa = student.map((el) => {
    return el.marks / 10;
});