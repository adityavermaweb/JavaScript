// // Example of JSON.parse() Method

// let jsonRes = '{"fact":"Unlike humans, cats are usually lefties. Studies indicate that their left paw is typically their dominant paw.","length":110}'

// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);



// // Example of JSON.stringify(json) Method

// let student = {
//     name: "aditya",
//     marks: 60,
// };

// let valid = JSON.stringify(student);
// console.log(valid);



// // OUR FIRST REQUEST

// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((response)=>{
//     // console.log(response);
//     return response.json();
// })
// .then((data)=>{
//     console.log("data1 = ", data.fact);
//     return fetch(url);
// })
// .then((response)=>{
//     return response.json();
// })
// .then((data2) =>{
//     console.log("data2 = ", data2.fact);
// })
// .catch((err)=>{
//     console.log("ERROR - ", err);
// });




// // Using Fetch with async-await
let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        // let res2 = await fetch(url);
        // let data2 = await res2.json();
        // console.log(data2.fact);
    } catch (e) {
        console.log("error - ", e);
    }
}