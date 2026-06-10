// Create Stars

for(let i=0;i<150;i++){

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random()*100 + "%";
    star.style.top = Math.random()*100 + "%";

    document.querySelector(".stars").appendChild(star);
}


// Typewriter Effect

const text = `SORRYYYYYYYYYYYYYYYYYY`;

let i = 0;

function typeWriter(){

    if(i < text.length){

        document.getElementById("typewriter").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,70);
    }
}

typeWriter();


// Reasons Generator

const reasons = [

    "Your smile brightens every room.",
    "You make ordinary days special.",
    "You are genuinely kind.",
    "You always listen carefully.",
    "You inspire people around you.",
    "You make conversations fun.",
    "You are unforgettable.",
    "You deserve happiness.",
    "Your friendship means a lot to me.",
    "You make life better."
];

function newReason(){

    const random = Math.floor(Math.random()*reasons.length);

    document.getElementById("reason").innerHTML =
    "mariii " + reasons[random];
}


// Angry Button Escape (Desktop + Mobile)

const noBtn = document.getElementById("noBtn");
const buttonArea = document.querySelector(".button-area");

function moveButton() {

    const padding = 20;

    const maxX =
        buttonArea.clientWidth -
        noBtn.offsetWidth -
        padding;

    const maxY =
        buttonArea.clientHeight -
        noBtn.offsetHeight -
        padding;

    const x =
        Math.random() * (maxX - padding) + padding;

    const y =
        Math.random() * (maxY - padding) + padding;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

// Initial position
moveButton();

// Smooth movement every 1 second
setInterval(moveButton, 1000);

// Extra protection
["click","touchstart","touchend"].forEach(event => {

    noBtn.addEventListener(event, (e) => {
        e.preventDefault();
        e.stopPropagation();
        moveButton();
    });
});
// Extra desktop effect
document.addEventListener("mousemove", (e) => {

    const rect = noBtn.getBoundingClientRect();

    const distance = Math.hypot(
        e.clientX - (rect.left + rect.width / 2),
        e.clientY - (rect.top + rect.height / 2)
    );

    if(distance < 120){
        moveButton();
    }
});


// Forgive Button

function forgive(){

    alert("yayyyyyyyyyyyyyyyyyy ❤️");

    for(let i=0;i<50;i++){

        setTimeout(createHeart,i*100);
    }
}


// Floating Hearts

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.bottom = "0px";

    heart.style.fontSize = (20 + Math.random()*30) + "px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },5000);
}


// Music Toggle

const music = document.getElementById("bgMusic");

function toggleMusic(){

    if(!music) return;

    if(music.paused){
        music.play();
    }else{
        music.pause();
    }
}
