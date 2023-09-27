//Adding click to my every button
let a = document.querySelectorAll(".drum");

a.forEach(element => {
    element.addEventListener("click", function () {
        let buttonInnerHtml = this.innerHTML;
        drumBeat(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);

    });
});

function drumBeat(key) {
    switch (key) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;

    }
}


function buttonAnimation(currentkey) {
    let element = document.querySelector("."+currentkey);
    element.classList.add("pressed")

    setTimeout(() => {
        element.classList.remove("pressed")
    }, 300);

}