//For 1st dice
let random_number = Math.floor((Math.random() * 6) + 1);//1-6
let image = "dice" + random_number + ".png";//image select
let image_source = "images/" + image;     //images/dice1.png

let imageElement = document.querySelector(".img1");
imageElement.setAttribute("src", image_source);

//For 2nd dice
let random_number2 = Math.floor((Math.random() * 6) + 1);//1-6
let image2 = "dice" + random_number2 + ".png";//image select
let image_source2 = "images/" + image2;     //images/dice1.png


let imageElement2 = document.querySelector(".img2");
imageElement2.setAttribute("src", image_source2);

//Winner 
if (random_number > random_number2) {
    document.querySelector("h1").innerHTML = "Player1 wins the game 🏆";
} else if (random_number < random_number2) {
    document.querySelector("h1").innerHTML = "Player2 wins the game 🏆";
} else {
    document.querySelector("h1").innerHTML = "match is draw 🤝";
}