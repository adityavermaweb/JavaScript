//What will be the output?

let greet = "hello"; //globel scope

function changeGreet() {
    let greet = "namaste"; //function scope
    console.log(greet);

    function innerGreet() {
        console.log(greet); //lexical scope
    }
}
console.log(greet);
changeGreet();