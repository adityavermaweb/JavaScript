// //a<p> with red text that says "Hey i'm red!"

// let para1 = document.createElement('p');
// para1.innerText = "Hey I'm red!";
// document.querySelector('body').append(para1);

// para1.classList.add('red');


// //an <h3>with blue text that says "I'm a blue h3!"


// let h3 = document.createElement('h3');
// h3.innerText = "Hey I'm h3!";
// document.querySelector('body').append(h3);

// h3.classList.add('blue');


// //

// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let para2 = document.createElement("p");

// h1.innerText = "I'm in a div"; 
// para2.innerText = "ME TOO!";

// div.append(h1);
// div.append(para2);
// div.classList.add("box");

// document.querySelector('body').append(div);



// Assignment Question


//Sol-1

let input = document.createElement("input");
let button = document.createElement("button");

button.innerText = "Click me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);


//Sol-2

button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");


//Sol-3

let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");


//Sol-4

let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practice</u>";
document.querySelector("body").append(h1);
h1.classList.add("body");


//Sol-5
let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice</u>";
document.querySelector("body").append(p);
