const words = [
    "Full Stack Developer",
    "Frontend Developer",
    "Web Designer",
    "B.Tech Student"
];
const typing = document.querySelector(".typing");
let wordIndex = 0;
let charIndex = 0;
let deleting = false;
function typeEffect(){
    const currentWord = words[wordIndex];
    if(!deleting){
        typing.textContent =
        currentWord.substring(0,charIndex);
        charIndex++;
        if(charIndex > currentWord.length){
            deleting = true;
            setTimeout(typeEffect,1200);
            return;
        }
    }else{
        typing.textContent =
        currentWord.substring(0,charIndex);
        charIndex--;
        if(charIndex < 0){
            deleting = false;
            wordIndex++;
            if(wordIndex >= words.length){
                wordIndex = 0;
            }
        }
    }
    setTimeout(typeEffect,
    deleting ? 60 : 120);
}
typeEffect();
const menuBtn =
document.querySelector(".menu-btn");
const navMenu =
document.querySelector(".nav-menu");
menuBtn.onclick = ()=>{
  navMenu.classList.toggle("active");
};
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(11,16,32,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.30)";
    } else {
        header.style.background = "rgba(11,16,32,.75)";
        header.style.boxShadow = "none";
    }
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        topBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
    }
});
topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});
ScrollReveal().reveal(
".hero-left",
{
    distance:"60px",
    origin:"left",
    duration:1200,
    delay:200
}
);
ScrollReveal().reveal(
".hero-right",
{
    distance:"60px",
    origin:"right",
    duration:1200,
    delay:300
}
);
ScrollReveal().reveal(
".section-title",
{
    distance:"40px",
    origin:"top",
    duration:1000
}
);
ScrollReveal().reveal(
".about-image,.about-content",
{
    distance:"60px",
    origin:"bottom",
    duration:1200,
    interval:200
}
);
ScrollReveal().reveal(
".skill-card,.project-card,.education-card,.info-card,.contact-card",
{
    distance:"40px",
    origin:"bottom",
    duration:1000,
    interval:100
}
);
ScrollReveal().reveal(
".timeline-item",
{
    distance:"70px",
    origin:"left",
    duration:1000,
    interval:200
}
);
VanillaTilt.init(
document.querySelectorAll(
".project-card,.skill-card,.info-card"
),
{
    max:8,
    speed:400,
    glare:true,
    "max-glare":0.2,
    scale:1.03
}
);
window.addEventListener("load",()=>{
    document.body.classList.add("loaded");
});
const buttons = document.querySelectorAll(".btn");
buttons.forEach(btn=>{
    btn.addEventListener("mouseenter",()=>{
        btn.style.transform="translateY(-5px)";
    });
    btn.addEventListener("mouseleave",()=>{
        btn.style.transform="translateY(0)";
    });
});
