//Print "hello"

function hello() {
    console.log("hello");   
}

//Print "coding blocks"

function printName() {
    console.log("coding blocks");
}

//Print 1 to 5

function print1to5() {
    for(let i=5; i>=1; i--){
        console.log(i);
    }
}

//Print you are adult or not adult.

function isAdult() {
    let age = 18;
    if(age >= 18) {
        console.log("adult");
    } else {
        console.log("not adult");
    }
}

hello();
printName();
print1to5();
isAdult();