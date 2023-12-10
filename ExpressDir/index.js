const express = require("express");
const app = express();

console.dir(app);

let port = 8080;

app.listen(port, () =>{
    console.log("app is listening on port ", port);
});


// Routing
// app.get("/", (req, res) => {
//     res.send("hello ");
// });
// app.get("/apple", (req, res) => {
//     res.send("you contacted apple path");
// });
// app.get("/orange", (req, res) => {
//     res.send("you contacted orange path");
// });

// app.get("*", (req, res) => {
//     res.send ("this path does not exist")
// })



// app.use((req, res) => {
//     console.log("request recevied");
//     res.send("<h1>HTML response</h1>")
//     // res.send({
//     //     name: "apple",
//     //     color: "red"
//     // });
// });



//Path Parameters

// app.get("/", (req, res) => {
//     res.send("hello, i am root");
// });

// app.get("/:username", (req, res) => {
//     console.log(req.params)
//     res.send("hello, i am root");
// });


// // Query Strings

app.get("/search", (req, res) => {
    console.log(req.query);
    res.send("no results");
});