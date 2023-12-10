// // Destructuring

// let names = ["tony","bruce","peter","steve"];

// let [winner, runnerup, ...others] = names;
// console.log(winner);


//Destructuring in Objects
const student = {
    name: "karan",
    age: 14,
    class: 9,
    students: ["hindi","english","math","science","social"],
    username: "karan@123",
    password: "abcd"
};

const {username:user, password:pass} = student;
console.log(user,pass);