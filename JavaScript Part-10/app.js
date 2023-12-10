///////Mouse/Pointer Event


// //onclick

// let btn = document.querySelector("button");
// console.dir(btn);

// // btn.onclick = function () {
// //     console.log("button was clicked")
// // }

// function sayHello() {
//     alert("Hello");
// }

// btn.onclick = sayHello;



// //addEventListener
// let btn = document.querySelectorAll("button");

// for (btn of btn) {
//     btn.addEventListener("click",sayHello());
//     btn.addEventListener("click",sayName());
// }

// function sayHello() {
//     alert("Hello");
// }

// function sayName() {
//     alert("Apna College");
// }


// //Activity

// let btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;

//     console.log("color updated")
// });

// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }





// // Event Listeners for Elements

// let p = document.querySelector("p");

// p.addEventListener("click",function() {
//     console.log("parah was clicked");
// })

// let box = document.querySelector(".box");

// box.addEventListener("mouseenter",function(){
//     console.log("mouse inside box");
// });





// // this in EventListener

let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");

function changeColor() {
    console.log(this.innerText);
    this.style.backgroundColor = "blue";
}

let btn = document.querySelector("button");

// btn.addEventListener("click",function() {
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// });

btn.addEventListener("click",changeColor);

h1.addEventListener("click",changeColor);

h3.addEventListener("click",changeColor);

p.addEventListener("click",changeColor);