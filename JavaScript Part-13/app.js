// // AXIOS

// let btn = document.querySelector("button");
// let btn2 = document.querySelector(".btn2");

// btn.addEventListener("click",async () =>{
//     let fact = await getFacts();
//     // console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// });



// btn2.addEventListener("click",async () =>{
//     let link = await getImage();
//     // console.log(link);  
//     let img = document.querySelector("#result2");
//     img.setAttribute("src", link);
//  });
 

// let url = "https://catfact.ninja/fact";
// let url2 = "https://dog.ceo/api/breeds/image/random";

// async function getFacts() {
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch (e) {
//         console.log("error - ", e);
//         return "No fact found"
//     }
// }

// async function getImage() {
//     try{
//         let res = await axios.get(url2);
//         return res.data.message;
//         // return res.data.fact;
//     } catch (e) {
//         console.log("error -", e);
//         return "No Image found"
//     }
// }





// // AXIOS Sending Headers

// const url = "https://icanhazdadjoke.com/";

// async function getJoker() {
//     const config = { headers: {Accept: "application/json"}};
//     try {
//         let res = await axios.get(url, config);
//         console.log(res.data);
//     } catch(err) {
//         console.log(err);
//     }
// }





// // AXIOS Updating Query Strings
// let url = "http://universities.hipolabs.com/search?name="
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let country = document.querySelector("input").value;
//     console.log(country);

//     let colArr = await getColleges(country);
//     show(colArr);
// });

// function show(colArr) {
//     let list = document.querySelector("#list");
//     list.innerText = "";
//     for(col of colArr) {
//         console.log(col.name);
//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.appendChild(li);
//     }
// }

// // let country = "nepal";

// async function getColleges(country) {
//     try {
//      let res = await axios.get(url + country);   
//      return res.data;   
//     } catch(e) {
//         console.log("error : ",e);
//         return [];
//     }
    
// }
