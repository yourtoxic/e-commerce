// Create Stars

for(let i=0;i<150;i++){

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random()*100 + "%";
    star.style.top = Math.random()*100 + "%";

    document.querySelector(".stars").appendChild(star);
}


// Typewriter Effect

const text = `SORRYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY`;

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


// Angry Button Escape

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover",()=>{

    const x = Math.random()*500;
    const y = Math.random()*150;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
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


