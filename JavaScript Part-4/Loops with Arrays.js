// let fruits = ["mango","apple","banana","litchi","orange"];
// for(let i=0; i<fruits.length; i++) {
//     console.log(i, fruits[i]);
// }
//backwords
// for(let i=fruits.length-1; i>=0; i--){
//     console.log(i,fruits[i]);
// }


//Nested Loops with Nested Arrays

// let heroes = [
//     ["ironman", "spiderman", "thor"],
//     ["superman", "wonder women", "flash"]
// ];
// for (let i = 0; i < heroes.length; i++) {
//     console.log(`List #${i}`);
//     for (let j = 0; j < heroes[i].length; j++) {
//         console.log(heroes[i][j]);
//     }
// }

//Next example
let student = [ ["aman",95],["shubham",94.90],["aditya",90]];
for(let i=0; i < student.length; i++) {
    console.log(`info of student #${i}`);
    for(let j=0; j < student[i].length; j++) {
        console.log(student[i][j]);
    }
}