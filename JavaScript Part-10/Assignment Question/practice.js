//mouseout

let p = document.querySelector("p");

p.addEventListener("mouseout", function() {
    console.log("mouse is out");
});



//keypress

let inp = document.querySelector("input");

inp.addEventListener("keypress", function(event) {
    console.log("keyboard is press");
    console.log(event.key);
});


