var drums = document.querySelectorAll("button");

for (let i = 0; i < drums.length; i++) {
    var soundMark = drums[i].innerHTML;

    drums[i].addEventListener("click", function(event) {
        play(this.innerHTML);
        show(this.innerHTML);
    });
}

document.addEventListener("keydown", function (event) {
    play(event.key);
    show(event.key);
})

function show(key) {
    var drumImg = document.querySelector("." + key);
    drumImg.classList.add("pressed");
    setTimeout(function (){drumImg.classList.remove("pressed")}, 200);
}

function play(key) {
    switch(key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
    }
}