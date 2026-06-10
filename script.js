// =========================
// Create Stars
// =========================

for(let i = 0; i < 150; i++){

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    document.querySelector(".stars").appendChild(star);
}


// =========================
// Typewriter Effect
// =========================

const text = `SORRYYYYYYYYYYYYYYYYYY`;

let i = 0;

function typeWriter(){

    if(i < text.length){

        document.getElementById("typewriter").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 70);
    }
}

typeWriter();


// =========================
// Reasons Generator
// =========================

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

    const random = Math.floor(Math.random() * reasons.length);

    document.getElementById("reason").innerHTML =
        "mariii " + reasons[random];
}


// =========================
// Angry Button Escape
// =========================

const noBtn = document.getElementById("noBtn");
const buttonArea = document.querySelector(".button-area");

let isMoving = false;

function moveButton(){

    if(!noBtn || !buttonArea) return;

    if(isMoving) return;

    isMoving = true;

    const padding = 20;

    const areaWidth = buttonArea.clientWidth;
    const areaHeight = buttonArea.clientHeight;

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const maxX = areaWidth - btnWidth - padding;
    const maxY = areaHeight - btnHeight - padding;

    const x = Math.random() * Math.max(maxX, padding);
    const y = Math.random() * Math.max(maxY, padding);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    setTimeout(() => {
        isMoving = false;
    }, 700);
}

// Initial position
setTimeout(moveButton, 300);

// Auto move every 1.2 seconds
setInterval(moveButton, 1200);


// Desktop protection
document.addEventListener("mousemove", (e) => {

    const rect = noBtn.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distance = Math.hypot(
        e.clientX - centerX,
        e.clientY - centerY
    );

    if(distance < 150){
        moveButton();
    }
});


// Mobile protection
["touchstart", "touchend", "click"].forEach(event => {

    noBtn.addEventListener(event, (e) => {

        e.preventDefault();
        e.stopPropagation();

        moveButton();

        if(navigator.vibrate){
            navigator.vibrate(40);
        }
    });
});


// =========================
// Forgive Button
// =========================

function forgive(){

    alert("yayyyyyyyyyyyyyyyyyy ❤️");

    for(let i = 0; i < 50; i++){

        setTimeout(createHeart, i * 100);
    }
}


// =========================
// Floating Hearts
// =========================

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.bottom = "0px";

    heart.style.fontSize =
        (20 + Math.random() * 30) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}


// =========================
// Music Toggle
// =========================

const music = document.getElementById("bgMusic");

function toggleMusic(){

    if(!music) return;

    if(music.paused){
        music.play();
    }else{
        music.pause();
    }
}
