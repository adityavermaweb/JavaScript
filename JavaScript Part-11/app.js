// //  Call Stack

// function hello() {
//     console.log("inside hello func");
//     console.log("hello");
// }

// function demo() {
//     console.log("calling hello func");
//     hello();
// }


// console.log("calling demo func");
// demo();
// console.log("bye, bye");




// // Visualizaing the Call Stack

// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }

// three();





// JS in Single Threaded

// // this is synchrnous  nature
// let a = 25;
// console.log(a);
// let b = 10;
// console.log(b);
// console.log(a+b);


// // for example
// // Asynchrnous nature

// setTimeout(()=>{
//     console.log("apna college");
// }, 2000);
// setTimeout(()=>{
//     console.log("hello world");
// }, 3000);

// console.log("hello...");





// // Callback Hall

// h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColorChange) nextColorChange();
//     }, delay);    
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("yellow", 1000, () => {
//                 changeColor("blue", 1000, () => {
//                     changeColor("gray", 1000);
//                 })
//             });
//         });
//     });
// });





// // Promises Object

// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("success : data was saved");
//         } else {
//             reject("failure : weak connection");
//         }
//     });
// }




// // Promises Methods
// // then()
// // catch()

// savetoDb("apna college")
//     .then(() => {
//         console.log("promise was resolved");
//     })
//     .catch(() => {
//         console.log("promise was rejected");
//     });




// // Promise Chaining

// savetoDb("apna college")
// .then(() => {
//     console.log("data 1 saved");
//     return savetoDb("helloworld");
// })
// .then(() => {
//     console.log("data 2 saved");
//     return savetoDb("shradha");
// })
// .then(() => {
//     console.log("data 3 saved");
// })
// .catch(() => {
//     console.log("promise was rejected");
// });



// // Promises
// savetoDb("apna college")
// .then((result) => {
//     console.log("data 1 saved");
//     console.log(result);
//     return savetoDb("helloworld");
// })
// .then((result) => {
//     console.log("data 2 saved");
//     console.log(result);
//     return savetoDb("shradha");
// })
// .then((result) => {
//     console.log("data 3 saved");
//     console.log(result);
// })
// .catch((error) => {
//     console.log("promise was rejected");
//     console.log(error);
// });




// // second example

h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed!");
        }, delay);
    });
}

changeColor("red", 1000)
.then(() => {
    console.log("red color was completed");
    return changeColor("orange", 1000);
})
.then(() => {
    console.log("orange color was completed");
    return changeColor("green", 1000);
})
.then(() => {
    console.log("green color was completed");
    return changeColor("blue", 1000);
})
.then(() => {
    console.log("blue color was completed");
})