//////keyboard Events

// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function(event) {
//     console.log("key = ",event.key);
//     console.log("code = ",event.code);
//     console.log("key was pressed");
// });

// inp.addEventListener("keyup", function() {
//     console.log("key was released");
// })




////////Form Event

// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.log("form submitted")
// })




////////Extracting Form Data
// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.dir(form);

//     let user = this.elements[0]; //form.elements[0]
//     let pass = this.elements[1];

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// });




/////////More Events
///////change event
// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
// });

// let user = document.querySelector("#user");

// user.addEventListener("change", function() {
//     console.log("change event");
//     console.log("final value =", this.value);
// });

// user.addEventListener("input", function () {
//     console.log("input event");
//     console.log("final value = ", this.value);
// })


//////For example
let inp = document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input", function () {
    console.log(inp.value);
    p.innerText = inp.value;
})