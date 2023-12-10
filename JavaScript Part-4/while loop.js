//While Loops

// let i=0;
// while(i<=20) {
//     console.log(i);
//     i++;
// }

//Favorite Movie

// let favMovie ="Lusifar";
// let guess = prompt("Guess my favorite movie");
// while((guess != favMovie) && (guess != "quit")){
//     guess = prompt("wrong guess. please try again");
// }
// if(guess == favMovie) {
//     console.log("congrats!!");
// }else{
//     console.log("you quit");
// }

//break keyword

let i=1;
while(i<=5){
    if(i == 3){
        break;
    }
    console.log(i);
    i++;
}