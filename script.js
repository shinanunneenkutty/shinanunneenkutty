/* =========================================================
   SHINAN UNNEENKUTTY P — PORTFOLIO SCRIPT
   ========================================================= */

/* ---------------------------------------------------------
   ⚙️  SOCIAL_LINKS — EDIT YOUR LINKS HERE ONLY
   Replace the values below any time. Nothing else in this
   file needs to change. "github" currently has no URL yet —
   add one whenever you're ready and its button will work.
--------------------------------------------------------- */
const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/shinan_parokkot?igsh=NjM4N3pnNnR2ZzN3&utm_source=qr",
  linkedin:  "https://www.linkedin.com/in/shinan-unneenkutty-p-026790335?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  github:    "", // TODO: add your GitHub profile URL here
  x:         "https://x.com/shhinaaann?s=11",
  email:     "Sk21online@gmail.com"
};

const PREFERS_REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------------------------------------------------------
   Social icons (inline SVG, no external requests)
--------------------------------------------------------- */
const SOCIAL_ICONS = {
  instagram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.24.06 2.08.25 2.82.54.76.3 1.4.7 2.03 1.33.63.63 1.03 1.27 1.33 2.03.29.74.48 1.58.54 2.82.07 1.25.07 1.65.07 4.85s0 3.6-.07 4.85c-.06 1.24-.25 2.08-.54 2.82a5.7 5.7 0 0 1-1.33 2.03 5.7 5.7 0 0 1-2.03 1.33c-.74.29-1.58.48-2.82.54-1.25.07-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.24-.06-2.08-.25-2.82-.54a5.7 5.7 0 0 1-2.03-1.33 5.7 5.7 0 0 1-1.33-2.03c-.29-.74-.48-1.58-.54-2.82C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.06-1.24.25-2.08.54-2.82.3-.76.7-1.4 1.33-2.03A5.7 5.7 0 0 1 6.17 .97c.74-.29 1.58-.48 2.82-.54C10.24 .36 10.8.2 12 2.2Zm0 1.8c-3.15 0-3.52 0-4.76.07-1.02.05-1.57.22-1.94.36-.49.19-.84.42-1.2.79-.37.36-.6.71-.79 1.2-.14.37-.31.92-.36 1.94C2.88 9.4 2.88 9.77 2.88 12s0 3.52.07 4.76c.05 1.02.22 1.57.36 1.94.19.49.42.84.79 1.2.36.37.71.6 1.2.79.37.14.92.31 1.94.36 1.24.07 1.6.07 4.76.07s3.52 0 4.76-.07c1.02-.05 1.57-.22 1.94-.36.49-.19.84-.42 1.2-.79.37-.36.6-.71.79-1.2.14-.37.31-.92.36-1.94.07-1.24.07-1.6.07-4.76s0-3.52-.07-4.76c-.05-1.02-.22-1.57-.36-1.94a3.15 3.15 0 0 0-.79-1.2 3.15 3.15 0 0 0-1.2-.79c-.37-.14-.92-.31-1.94-.36C15.52 4 15.15 4 12 4Zm0 3.4a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2Zm0 1.8a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm4.8-2a1.08 1.08 0 1 1 0 2.16 1.08 1.08 0 0 1 0-2.16Z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.2 8.75h3.5V21H3.2V8.75Zm6.3 0h3.35v1.68h.05c.47-.88 1.6-1.8 3.3-1.8 3.53 0 4.18 2.32 4.18 5.35V21h-3.5v-6.36c0-1.52-.03-3.47-2.11-3.47-2.12 0-2.45 1.66-2.45 3.37V21H9.5V8.75Z"/></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.9-1.3 2.74-1.02 2.74-1.02.56 1.38.2 2.4.1 2.65.65.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h4.3l4 5.4L15.8 3H19l-6 7.6L19.7 21H15.4l-4.3-5.8L6.4 21H3l6.4-8.1L3 3Zm2.4 1.6 10.9 14.8h1.3L6.7 4.6H5.4Z"/></svg>`,
  email: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 5.5A1.5 1.5 0 0 1 4.5 4h15A1.5 1.5 0 0 1 21 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5v-13Zm2.1.6 6.9 5.4 6.9-5.4H5.1Zm13.4 1.4-6.02 4.72a1.5 1.5 0 0 1-1.86 0L4.5 7.5V18h15V7.5Z"/></svg>`
};

const SOCIAL_LABELS = {
  instagram: "Instagram",
  linkedin: "LinkedIn",
  github: "GitHub",
  x: "X / Twitter",
  email: "Email"
};

function buildSocialButtons(container){
  if(!container) return;
  container.innerHTML = "";
  Object.entries(SOCIAL_LINKS).forEach(([key, value]) => {
    if(!value) return; // skip empty links (e.g. GitHub until you add one)
    const isEmail = key === "email";
    const a = document.createElement("a");
    a.className = "social-btn glass";
    a.href = isEmail ? `mailto:${value}` : value;
    if(!isEmail){
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
    a.setAttribute("aria-label", SOCIAL_LABELS[key] || key);
    a.innerHTML = `${SOCIAL_ICONS[key] || ""}<span>${SOCIAL_LABELS[key] || key}</span>`;
    container.appendChild(a);
  });
}
buildSocialButtons(document.getElementById("socialGrid"));
buildSocialButtons(document.getElementById("socialGridFooter"));

/* ---------------------------------------------------------
   Page load veil removal
--------------------------------------------------------- */
window.addEventListener("load", () => {
  const veil = document.getElementById("loadVeil");
  if(veil) setTimeout(() => veil.remove(), 1500);
});

/* ---------------------------------------------------------
   Nav: compact on scroll + mobile toggle + active section
--------------------------------------------------------- */
const nav = document.getElementById("siteNav");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  nav.classList.toggle("is-compact", window.scrollY > 60);
  lastScrollY = window.scrollY;
}, { passive: true });

const sections = document.querySelectorAll("main section[id], main#home");
const navLinkEls = document.querySelectorAll(".nav-link");
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const id = entry.target.id;
      navLinkEls.forEach(link => {
        link.classList.toggle("active", link.dataset.section === id);
      });
    }
  });
}, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
sections.forEach(sec => sectionObserver.observe(sec));

/* ---------------------------------------------------------
   Reveal-on-scroll for sections
--------------------------------------------------------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

/* ---------------------------------------------------------
   Hero canvas — subtle cursor-reactive particle field
--------------------------------------------------------- */
(function heroCanvasInit(){
  const canvas = document.getElementById("heroCanvas");
  const hero = document.getElementById("hero");
  if(!canvas || !hero) return;
  const ctx = canvas.getContext("2d");
  let w, h, particles = [];
  let mouse = { x: null, y: null };

  function resize(){
    w = canvas.width = hero.offsetWidth * devicePixelRatio;
    h = canvas.height = hero.offsetHeight * devicePixelRatio;
    canvas.style.width = hero.offsetWidth + "px";
    canvas.style.height = hero.offsetHeight + "px";
    const count = Math.min(70, Math.floor((hero.offsetWidth * hero.offsetHeight) / 18000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
      vy: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
      r: (Math.random() * 1.6 + 0.8) * devicePixelRatio
    }));
  }

  function draw(){
    ctx.clearRect(0, 0, w, h);
    const dpr = devicePixelRatio;
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if(p.x < 0 || p.x > w) p.vx *= -1;
      if(p.y < 0 || p.y > h) p.vy *= -1;

      if(mouse.x !== null){
        const dx = p.x - mouse.x * dpr;
        const dy = p.y - mouse.y * dpr;
        const dist = Math.sqrt(dx*dx + dy*dy);
        const radius = 140 * dpr;
        if(dist < radius){
          const force = (radius - dist) / radius;
          p.x += (dx / (dist || 1)) * force * 1.4;
          p.y += (dy / (dist || 1)) * force * 1.4;
        }
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(47, 111, 237, 0.28)";
      ctx.fill();
    });

    // connecting lines for nearby particles
    for(let i = 0; i < particles.length; i++){
      for(let j = i + 1; j < particles.length; j++){
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if(dist < 120 * devicePixelRatio){
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(47, 111, 237, ${0.08 * (1 - dist / (120*devicePixelRatio))})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
  }

  let rafId;
  function loop(){
    draw();
    rafId = requestAnimationFrame(loop);
  }

  resize();
  window.addEventListener("resize", resize);
  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  hero.addEventListener("mouseleave", () => { mouse.x = null; mouse.y = null; });

  if(!PREFERS_REDUCED_MOTION){
    loop();
  } else {
    draw(); // draw a static frame only
  }
})();

/* ---------------------------------------------------------
   Ambient cursor glow (desktop only, subtle)
--------------------------------------------------------- */
if(window.matchMedia("(hover: hover) and (pointer: fine)").matches && !PREFERS_REDUCED_MOTION){
  const glow = document.createElement("div");
  glow.className = "cursor-glow";
  document.body.appendChild(glow);
  let glowTimeout;
  window.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
    glow.classList.add("is-active");
    clearTimeout(glowTimeout);
    glowTimeout = setTimeout(() => glow.classList.remove("is-active"), 900);
  });
}

/* ---------------------------------------------------------
   My Corner — live scoreboard clock
--------------------------------------------------------- */
function updateClock(){
  const now = new Date();
  const pad = n => String(n).padStart(2, "0");
  const h = document.getElementById("flipH");
  const m = document.getElementById("flipM");
  const s = document.getElementById("flipS");
  if(h) h.textContent = pad(now.getHours());
  if(m) m.textContent = pad(now.getMinutes());
  if(s) s.textContent = pad(now.getSeconds());
  const dateLine = document.getElementById("dateLine");
  if(dateLine){
    dateLine.textContent = now.toLocaleDateString(undefined, {
      weekday: "long", year: "numeric", month: "long", day: "numeric"
    });
  }
}
updateClock();
setInterval(updateClock, 1000);

/* ---------------------------------------------------------
   My Corner — quote generator
--------------------------------------------------------- */
const QUOTES = [
  { text: "The process is more important than the result.", author: "MS Dhoni" },
  { text: "Do or do not. There is no try.", author: "Yoda, Star Wars" },
  { text: "Cricket is a team game. So is life.", author: "Kapil Dev" },
  { text: "Every day I get up and look through the Forbes list of the richest people in America. If I'm not there, I go to work.", author: "Robert Orben" },
  { text: "Some infinities are bigger than other infinities.", author: "The Fault in Our Stars" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "You have to expect things of yourself before you can do them.", author: "Michael Jordan" },
  { text: "Just keep swimming.", author: "Finding Nemo" }
];
const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const quoteBtn = document.getElementById("quoteBtn");
let lastQuoteIndex = 0;
quoteBtn?.addEventListener("click", () => {
  let idx;
  do { idx = Math.floor(Math.random() * QUOTES.length); } while (idx === lastQuoteIndex && QUOTES.length > 1);
  lastQuoteIndex = idx;
  quoteText.style.opacity = 0;
  quoteAuthor.style.opacity = 0;
  setTimeout(() => {
    quoteText.textContent = `"${QUOTES[idx].text}"`;
    quoteAuthor.textContent = `— ${QUOTES[idx].author}`;
    quoteText.style.transition = "opacity 0.35s ease";
    quoteAuthor.style.transition = "opacity 0.35s ease";
    quoteText.style.opacity = 1;
    quoteAuthor.style.opacity = 1;
  }, 200);
});

/* ---------------------------------------------------------
   My Corner — cricket micro-animation
--------------------------------------------------------- */
const bowlBtn = document.getElementById("bowlBtn");
const cricketBall = document.getElementById("cricketBall");
bowlBtn?.addEventListener("click", () => {
  cricketBall.classList.remove("is-bowling");
  void cricketBall.offsetWidth; // restart animation
  cricketBall.classList.add("is-bowling");
});

/* ---------------------------------------------------------
   My Corner — hidden easter egg
--------------------------------------------------------- */
const eggTrigger = document.getElementById("eggTrigger");
const eggMessage = document.getElementById("eggMessage");
const EGG_MESSAGES = [
  "Nice click.",
  "Keep going…",
  "Almost there…",
  "You found it — thanks for stopping by! 🏏🎬"
];
let eggClicks = 0;
eggTrigger?.addEventListener("click", () => {
  eggMessage.textContent = EGG_MESSAGES[Math.min(eggClicks, EGG_MESSAGES.length - 1)];
  eggClicks++;
  if(eggClicks === EGG_MESSAGES.length){
    eggTrigger.style.transform = "rotate(360deg)";
    eggTrigger.style.transition = "transform 0.6s ease";
    eggClicks = 0;
  }
});

/* ---------------------------------------------------------
   My Corner — theme shift
--------------------------------------------------------- */
document.querySelectorAll(".theme-dot").forEach(dot => {
  dot.addEventListener("click", () => {
    const theme = dot.dataset.theme;
    if(theme === "default"){
      document.body.removeAttribute("data-theme");
    } else {
      document.body.setAttribute("data-theme", theme);
    }
  });
});

/* ---------------------------------------------------------
   Footer year + fun bottom-of-page message
--------------------------------------------------------- */
document.getElementById("footerYear").textContent = new Date().getFullYear();
const footerFun = document.getElementById("footerFun");
const FUN_MESSAGES = [
  "You made it all the way down here. Respect. 🏏",
  "That's a wrap — thanks for scrolling by!",
  "Roll credits. 🎬",
  "Full over, well played."
];
let funShown = false;
window.addEventListener("scroll", () => {
  if(funShown) return;
  const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 40;
  if(scrolledToBottom){
    footerFun.textContent = FUN_MESSAGES[Math.floor(Math.random() * FUN_MESSAGES.length)];
    funShown = true;
  }
}, { passive: true });

/* ===========================================================
   SNAKE GAME
   =========================================================== */
(function snakeGame(){
  const canvas = document.getElementById("snakeCanvas");
  if(!canvas) return;
  const ctx = canvas.getContext("2d");
  const overlay = document.getElementById("gameOverlay");
  const overlayText = document.getElementById("gameOverlayText");
  const scoreEl = document.getElementById("score");
  const highScoreEl = document.getElementById("highScore");
  const startBtn = document.getElementById("startBtn");
  const pauseBtn = document.getElementById("pauseBtn");
  const restartBtn = document.getElementById("restartBtn");
  const touchButtons = document.querySelectorAll(".touch-btn");

  const GRID = 18;
  let cellSize, snake, dir, nextDir, food, score, highScore, running, paused, loopTimer;

  const HS_KEY = "sk21_snake_highscore";
  highScore = Number(localStorage.getItem(HS_KEY) || 0);
  highScoreEl.textContent = highScore;

  function resizeCanvas(){
    const size = canvas.parentElement.clientWidth;
    canvas.width = size * devicePixelRatio;
    canvas.height = size * devicePixelRatio;
    cellSize = canvas.width / GRID;
    draw();
  }

  function resetState(){
    snake = [{ x: 8, y: 9 }, { x: 7, y: 9 }, { x: 6, y: 9 }];
    dir = { x: 1, y: 0 };
    nextDir = { x: 1, y: 0 };
    score = 0;
    scoreEl.textContent = score;
    placeFood();
  }

  function placeFood(){
    let pos;
    do {
      pos = { x: Math.floor(Math.random() * GRID), y: Math.floor(Math.random() * GRID) };
    } while (snake.some(s => s.x === pos.x && s.y === pos.y));
    food = pos;
  }

  function draw(){
    if(!cellSize) return;
    // board background
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255,255,255,0.04)";
    for(let i=0;i<GRID;i++){
      for(let j=0;j<GRID;j++){
        if((i+j)%2===0){
          ctx.fillRect(i*cellSize, j*cellSize, cellSize, cellSize);
        }
      }
    }
    if(!snake) return;

    // food
    ctx.beginPath();
    ctx.arc(
      food.x*cellSize + cellSize/2,
      food.y*cellSize + cellSize/2,
      cellSize*0.32, 0, Math.PI*2
    );
    ctx.fillStyle = "#7CAAFB";
    ctx.fill();

    // snake
    snake.forEach((seg, i) => {
      const r = cellSize*0.22;
      ctx.beginPath();
      ctx.roundRect
        ? ctx.roundRect(seg.x*cellSize+2, seg.y*cellSize+2, cellSize-4, cellSize-4, r)
        : ctx.rect(seg.x*cellSize+2, seg.y*cellSize+2, cellSize-4, cellSize-4);
      ctx.fillStyle = i === 0 ? "#ffffff" : "rgba(255,255,255,0.82)";
      ctx.fill();
    });
  }

  function step(){
    dir = nextDir;
    const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };

    // wrap-around edges (kinder than instant game-over walls)
    if(head.x < 0) head.x = GRID - 1;
    if(head.x >= GRID) head.x = 0;
    if(head.y < 0) head.y = GRID - 1;
    if(head.y >= GRID) head.y = 0;

    if(snake.some(s => s.x === head.x && s.y === head.y)){
      gameOver();
      return;
    }

    snake.unshift(head);
    if(head.x === food.x && head.y === food.y){
      score += 10;
      scoreEl.textContent = score;
      placeFood();
    } else {
      snake.pop();
    }
    draw();
  }

  function gameOver(){
    running = false;
    clearInterval(loopTimer);
    if(score > highScore){
      highScore = score;
      localStorage.setItem(HS_KEY, String(highScore));
      highScoreEl.textContent = highScore;
    }
    overlayText.textContent = `Game over — score ${score}. Press Restart to play again.`;
    overlay.classList.remove("is-hidden");
    startBtn.disabled = false;
    pauseBtn.disabled = true;
  }

  function startGame(){
    resetState();
    running = true;
    paused = false;
    overlay.classList.add("is-hidden");
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    pauseBtn.textContent = "Pause";
    clearInterval(loopTimer);
    loopTimer = setInterval(step, 130);
    draw();
  }

  function togglePause(){
    if(!running) return;
    paused = !paused;
    if(paused){
      clearInterval(loopTimer);
      pauseBtn.textContent = "Resume";
      overlayText.textContent = "Paused";
      overlay.classList.remove("is-hidden");
    } else {
      loopTimer = setInterval(step, 130);
      pauseBtn.textContent = "Pause";
      overlay.classList.add("is-hidden");
    }
  }

  function setDirection(x, y){
    // prevent reversing directly into itself
    if(snake && snake.length > 1 && dir.x === -x && dir.y === -y) return;
    nextDir = { x, y };
  }

  startBtn.addEventListener("click", startGame);
  pauseBtn.addEventListener("click", togglePause);
  restartBtn.addEventListener("click", startGame);

  window.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();
    if(["arrowup","w"].includes(key)) setDirection(0, -1);
    else if(["arrowdown","s"].includes(key)) setDirection(0, 1);
    else if(["arrowleft","a"].includes(key)) setDirection(-1, 0);
    else if(["arrowright","d"].includes(key)) setDirection(1, 0);
    else return;
    e.preventDefault();
  });

  touchButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const map = { up: [0,-1], down: [0,1], left: [-1,0], right: [1,0] };
      const [x,y] = map[btn.dataset.dir];
      setDirection(x, y);
    });
  });

  // swipe controls
  let touchStart = null;
  const board = document.querySelector(".game-board-wrap");
  board.addEventListener("touchstart", (e) => {
    const t = e.touches[0];
    touchStart = { x: t.clientX, y: t.clientY };
  }, { passive: true });
  board.addEventListener("touchend", (e) => {
    if(!touchStart) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.x;
    const dy = t.clientY - touchStart.y;
    if(Math.abs(dx) > Math.abs(dy)){
      if(Math.abs(dx) > 24) setDirection(dx > 0 ? 1 : -1, 0);
    } else {
      if(Math.abs(dy) > 24) setDirection(0, dy > 0 ? 1 : -1);
    }
    touchStart = null;
  }, { passive: true });

  window.addEventListener("resize", resizeCanvas);
  resetState();
  resizeCanvas();
  draw();
})();
