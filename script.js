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
let charIndex = 0;
function typeWriter(){
    const typeElement = document.getElementById("typewriter");
    if(typeElement && charIndex < text.length){
        typeElement.innerHTML += text.charAt(charIndex);
        charIndex++;
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
    const reasonElement = document.getElementById("reason");
    if(reasonElement){
        reasonElement.innerHTML = "mariii " + reasons[random];
    }
}

// =========================
// Angry Button Escape (Updated)
// =========================
const noBtn = document.getElementById("noBtn");
const buttonArea = document.querySelector(".button-area");

function moveButton() {
    if(!noBtn || !buttonArea) return;

    const areaWidth = buttonArea.clientWidth;
    const areaHeight = buttonArea.clientHeight;
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // বাটন যেন সীমানার ভেতরে থাকে
    const maxX = areaWidth - btnWidth;
    const maxY = areaHeight - btnHeight;

    const x = Math.max(0, Math.floor(Math.random() * maxX));
    const y = Math.max(0, Math.floor(Math.random() * maxY));

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

// ইভেন্ট লিসেনারস
if(noBtn) {
    // মাউস এবং টাচ ইভেন্ট
    noBtn.addEventListener("mouseover", moveButton);
    noBtn.addEventListener("touchstart", (e) => {
        e.preventDefault();
        moveButton();
        if(navigator.vibrate) navigator.vibrate(40);
    }, {passive: false});

    noBtn.addEventListener("click", (e) => {
        e.preventDefault();
        moveButton();
    });
}

// Initial position
setTimeout(moveButton, 300);

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
    heart.style.fontSize = (20 + Math.random() * 30) + "px";
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 5000);
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
