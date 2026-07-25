/* ===========================================
   SHINAN PORTFOLIO
   SCRIPT.JS
=========================================== */

/* ---------------- Loader ---------------- */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";

        setTimeout(() => {

            loader.style.display = "none";

        }, 600);

    }, 1200);

});

/* ---------------- Scroll Reveal ---------------- */

const revealElements = document.querySelectorAll(
    ".glass-card,.section-heading,.timeline-item,.skill-card"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

revealElements.forEach(el => {

    el.classList.add("fade-up");

    observer.observe(el);

});

/* ---------------- AI Assistant ---------------- */

const buttons = document.querySelectorAll(".ai-buttons button");

const responseBox = document.getElementById("ai-response");

const answerText = document.getElementById("answer-text");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const answer = button.dataset.answer;

        responseBox.style.display = "block";

        answerText.textContent = answer;

    });

});

/* ---------------- Smooth Navigation ---------------- */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ---------------- Navbar Scroll ---------------- */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        navbar.style.background="rgba(7,17,31,.82)";
        navbar.style.backdropFilter="blur(28px)";

    }

    else{

        navbar.style.background="rgba(255,255,255,.06)";

    }

});/* ===========================================
   PART 2
=========================================== */

/* ---------- Progress Bar Animation ---------- */

const progressBars = document.querySelectorAll(".progress-fill");

const progressObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const bar = entry.target;

            const finalWidth = bar.style.width;

            bar.style.width = "0";

            setTimeout(()=>{

                bar.style.width = finalWidth;

                bar.style.transition = "width 1.5s ease";

            },200);

        }

    });

},{threshold:0.5});

progressBars.forEach(bar=>{

    progressObserver.observe(bar);

});

/* ---------- Mouse Parallax ---------- */

const hero = document.querySelector(".hero");

document.addEventListener("mousemove",(e)=>{

    if(!hero) return;

    const x = (e.clientX/window.innerWidth - 0.5) * 20;

    const y = (e.clientY/window.innerHeight - 0.5) * 20;

    hero.style.transform =
    `translate(${x}px,${y}px)`;

});

/* ---------- Active Navigation ---------- */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop - 150;

        if(scrollY >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

/* ---------- Scroll To Top ---------- */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "top-button";

document.body.appendChild(topButton);

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topButton.style.opacity="1";

        topButton.style.pointerEvents="auto";

    }

    else{

        topButton.style.opacity="0";

        topButton.style.pointerEvents="none";

    }

});

/* ---------- Hero Typing Effect ---------- */

const subtitle = document.querySelector(".hero h3");

if(subtitle){

    const text = subtitle.textContent;

    subtitle.textContent = "";

    let index = 0;

    function type(){

        if(index < text.length){

            subtitle.textContent += text.charAt(index);

            index++;

            setTimeout(type,60);

        }

    }

    setTimeout(type,1200);

}

/* ---------- Copyright Year ---------- */

const copyright = document.querySelector(".copyright");

if(copyright){

    copyright.innerHTML =
    `© ${new Date().getFullYear()} Shinan Unneenkutty P. All Rights Reserved.`;

}

console.log(
"%cWelcome to Shinan Portfolio",
"font-size:18px;color:#64b5ff;font-weight:bold;"
);
