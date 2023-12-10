//Higher order function
//Takes one or multiple function as arguments.

// function multipleGreet(func, count) {   // //higher order function
//     for(let i=1; i<=count; i++) {
//         func();
//     }
// }

// let greet = function() {
//     console.log("hello");
// }

// multipleGreet(greet,2);


//Higher order function
//Returns a function
function oddOrEvenFactory(request) {
    if(request == "odd") {
        return function(n) {
            console.log(!(n%2 == 0));
        }
    } else if(request == "even") {
        return  function(n) {
            console.log(n%2 == 0);
        }        
    } else {
        console.log("wrong request");
    }
}