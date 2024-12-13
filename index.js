var kij=document.querySelectorAll(".key");
for(var i=0;i<document.querySelectorAll(".key").length;i++){
    kij[i].addEventListener("click",handleClick);
}
function handleClick(){
    var keyletter=this.innerHTML;
    MakeSound(keyletter);
   
}
document.addEventListener("keydown",function(event){
    MakeSound(event.key);
})
function MakeSound(key) {
    let audio;
    let keyElement;

    switch(key.toUpperCase()) {
        case "C": case "Q":
            audio = new Audio('./sounds/C4.mp3');
            keyElement = document.querySelector(".C");
            break;
        case "D": case "W":
            audio = new Audio('./sounds/D4.mp3');
            keyElement = document.querySelector(".D");
            break;
        case "E":
            audio = new Audio('./sounds/E4.mp3');
            keyElement = document.querySelector(".E");
            break;
        case "F": case "R":
            audio = new Audio('./sounds/F4.mp3');
            keyElement = document.querySelector(".F");
            break;
        case "G": case "T":
            audio = new Audio('./sounds/G4.mp3');
            keyElement = document.querySelector(".G");
            break;
        case "A": case "Y":
            audio = new Audio('./sounds/A4.mp3');
            keyElement = document.querySelector(".A");
            break;
        case "B": case "U":
            audio = new Audio('./sounds/B4.mp3');
            keyElement = document.querySelector(".B");
            break;
        case "CS": case "1":
            audio = new Audio('./sounds/Db4.mp3');
            keyElement = document.querySelector(".Cs");
            break;
        case "DS": case "2":
            audio = new Audio('./sounds/Eb4.mp3');
            keyElement = document.querySelector(".Ds");
            break;
        case "FS": case "3":
            audio = new Audio('./sounds/Gb4.mp3');
            keyElement = document.querySelector(".Fs");
            break;
        case "GS": case "4":
            audio = new Audio('./sounds/Ab4.mp3');
            keyElement = document.querySelector(".Gs");
            break;
        case "AS": case "5":
            audio = new Audio('./sounds/Bb4.mp3');
            keyElement = document.querySelector(".As");
            break;
        default:
            console.log("Invalid key:", key);
            return;
    }

    // Play the audio
    audio.play();

    // Add the "active" class to the key element
    if (keyElement) {
        keyElement.classList.add("active");

        // Remove the "active" class after 200ms
        setTimeout(() => {
            keyElement.classList.remove("active");
        }, 200);
    }
}
