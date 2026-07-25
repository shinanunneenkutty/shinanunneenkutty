/* =========================================================
   SHINAN UNNEENKUTTY P  PORTFOLIO SCRIPT
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- AOS init ---------- */
  if (window.AOS) {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 60 });
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Cursor glow (desktop only) ---------- */
  const cursorGlow = document.getElementById('cursorGlow');
  if (cursorGlow && matchMedia('(hover: hover)').matches) {
    window.addEventListener('mousemove', (e) => {
      cursorGlow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    });
  }

  /* ---------- Scroll progress bar ---------- */
  const progressBar = document.getElementById('scrollProgress');
  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  /* ---------- Navbar mobile toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Typing animation ---------- */
  const typingEl = document.getElementById('typingText');
  const phrases = ['Finance Enthusiast', 'Technology Explorer', 'Lifelong Learner'];
  let phraseIndex = 0, charIndex = 0, deleting = false;

  function typeLoop() {
    const current = phrases[phraseIndex];
    if (!deleting) {
      charIndex++;
      typingEl.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(typeLoop, 1400);
        return;
      }
    } else {
      charIndex--;
      typingEl.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }
    setTimeout(typeLoop, deleting ? 40 : 80);
  }
  typeLoop();

  /* ---------- Tilt-on-hover for interest cards ---------- */
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y / rect.height) - 0.5) * -14;
      const rotateY = ((x / rect.width) - 0.5) * 14;
      card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(700px) rotateX(0) rotateY(0) translateY(0)';
    });
  });

  /* ---------- Contact form (no backend — placeholder submit) ---------- */
  const contactForm = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      formNote.textContent = "Thanks for reaching out! I'll get back to you soon.";
      contactForm.reset();
    });
  }

  /* ---------- GSAP scroll reveals (subtle, layered on top of AOS) ---------- */
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.timeline-item').forEach((item, i) => {
      gsap.fromTo(item,
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: item, start: 'top 85%' }
        }
      );
    });
  }

  /* =========================================================
     "TAKE A BREAK" TOGGLE
     ========================================================= */
  const breakToggle = document.getElementById('breakToggle');
  const breakPanel = document.getElementById('breakPanel');
  breakToggle.addEventListener('click', () => {
    const isHidden = breakPanel.hasAttribute('hidden');
    if (isHidden) {
      breakPanel.removeAttribute('hidden');
      breakToggle.setAttribute('aria-expanded', 'true');
      initSnakeGame(); // lazy-init game once panel is opened
    } else {
      breakPanel.setAttribute('hidden', '');
      breakToggle.setAttribute('aria-expanded', 'false');
    }
  });

  /* =========================================================
     SNAKE GAME
     ========================================================= */
  let gameInitialized = false;

  function initSnakeGame() {
    if (gameInitialized) return;
    gameInitialized = true;

    const canvas = document.getElementById('snakeCanvas');
    const ctx = canvas.getContext('2d');

    const GRID_SIZE = 20;
    let cellSize = canvas.width / GRID_SIZE;

    const scoreEl = document.getElementById('score');
    const highScoreEl = document.getElementById('highScore');
    const overlay = document.getElementById('gameOverlay');
    const gameOverOverlay = document.getElementById('gameOverOverlay');
    const finalScoreEl = document.getElementById('finalScore');
    const startBtn = document.getElementById('startBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const restartBtn = document.getElementById('restartBtn');
    const playAgainBtn = document.getElementById('playAgainBtn');

    const HIGH_SCORE_KEY = 'shinan_snake_high_score';
    const NAME_KEY = 'shinan_snake_player_name';
    const LEADERBOARD_KEY = 'shinan_snake_leaderboard';
    const MAX_LEADERBOARD_ENTRIES = 10;

    let highScore = parseInt(localStorage.getItem(HIGH_SCORE_KEY) || '0', 10);
    highScoreEl.textContent = highScore;

    const playerNameInput = document.getElementById('playerName');
    const leaderboardList = document.getElementById('leaderboardList');
    const leaderboardEmpty = document.getElementById('leaderboardEmpty');

    // restore last-used name, if any
    const savedName = localStorage.getItem(NAME_KEY);
    if (savedName) playerNameInput.value = savedName;

    function getLeaderboard() {
      try {
        const raw = JSON.parse(localStorage.getItem(LEADERBOARD_KEY) || '[]');
        return Array.isArray(raw) ? raw : [];
      } catch {
        return [];
      }
    }

    function renderLeaderboard() {
      const entries = getLeaderboard();
      leaderboardList.innerHTML = '';
      leaderboardEmpty.hidden = entries.length > 0;

      entries.forEach((entry, i) => {
        const li = document.createElement('li');
        li.className = 'leaderboard-item' + (i === 0 ? ' is-top' : '');
        li.innerHTML = `
          <span class="leaderboard-rank">${i + 1}</span>
          <span class="leaderboard-name"></span>
          <span class="leaderboard-score">${entry.score}</span>
        `;
        li.querySelector('.leaderboard-name').textContent = entry.name;
        leaderboardList.appendChild(li);
      });
    }

    function saveScore(name, finalScore) {
      const entries = getLeaderboard();
      entries.push({ name, score: finalScore });
      entries.sort((a, b) => b.score - a.score);
      const trimmed = entries.slice(0, MAX_LEADERBOARD_ENTRIES);
      localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(trimmed));
      renderLeaderboard();
    }

    renderLeaderboard();

    let snake, direction, nextDirection, food, score, baseSpeed, speed, running, paused, loopTimer;

    function resizeCanvas() {
      const wrap = canvas.parentElement;
      const size = Math.min(wrap.clientWidth, wrap.clientHeight) || wrap.clientWidth;
      canvas.width = size;
      canvas.height = size;
      cellSize = canvas.width / GRID_SIZE;
      draw();
    }

    function resetState() {
      snake = [
        { x: 9, y: 10 },
        { x: 8, y: 10 },
        { x: 7, y: 10 }
      ];
      direction = { x: 1, y: 0 };
      nextDirection = { x: 1, y: 0 };
      score = 0;
      baseSpeed = 140; // ms per tick
      speed = baseSpeed;
      scoreEl.textContent = score;
      placeFood();
    }

    function placeFood() {
      let valid = false;
      while (!valid) {
        food = {
          x: Math.floor(Math.random() * GRID_SIZE),
          y: Math.floor(Math.random() * GRID_SIZE)
        };
        valid = !snake.some(seg => seg.x === food.x && seg.y === food.y);
      }
    }

    function draw() {
      // background
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      grad.addColorStop(0, '#eaf2ff');
      grad.addColorStop(1, '#ffffff');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // grid (subtle)
      ctx.strokeStyle = 'rgba(11,46,110,0.05)';
      ctx.lineWidth = 1;
      for (let i = 1; i < GRID_SIZE; i++) {
        ctx.beginPath();
        ctx.moveTo(i * cellSize, 0);
        ctx.lineTo(i * cellSize, canvas.height);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i * cellSize);
        ctx.lineTo(canvas.width, i * cellSize);
        ctx.stroke();
      }

      if (!food) return;

      // food
      ctx.fillStyle = '#0a5fff';
      ctx.beginPath();
      const fx = food.x * cellSize + cellSize / 2;
      const fy = food.y * cellSize + cellSize / 2;
      ctx.arc(fx, fy, cellSize * 0.32, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowColor = 'rgba(10,95,255,0.5)';
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.shadowBlur = 0;

      // snake
      snake.forEach((seg, i) => {
        const isHead = i === 0;
        ctx.fillStyle = isHead ? '#06214f' : '#0a5fff';
        const pad = isHead ? 1 : 2;
        roundRect(
          ctx,
          seg.x * cellSize + pad,
          seg.y * cellSize + pad,
          cellSize - pad * 2,
          cellSize - pad * 2,
          6
        );
        ctx.fill();
      });
    }

    function roundRect(ctx, x, y, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    }

    function tick() {
      if (!running || paused) return;

      direction = nextDirection;
      const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

      // wall collision
      if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
        return gameOver();
      }
      // self collision
      if (snake.some(seg => seg.x === head.x && seg.y === head.y)) {
        return gameOver();
      }

      snake.unshift(head);

      if (head.x === food.x && head.y === food.y) {
        score++;
        scoreEl.textContent = score;
        placeFood();
        // speed up slightly as score increases, with a floor
        speed = Math.max(60, baseSpeed - score * 4);
      } else {
        snake.pop();
      }

      draw();
      loopTimer = setTimeout(tick, speed);
    }

    function startLoop() {
      clearTimeout(loopTimer);
      loopTimer = setTimeout(tick, speed);
    }

    function startGame() {
      resetState();
      running = true;
      paused = false;
      overlay.hidden = true;
      gameOverOverlay.hidden = true;
      pauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i> Pause';
      draw();
      startLoop();
    }

    function gameOver() {
      running = false;
      clearTimeout(loopTimer);
      if (score > highScore) {
        highScore = score;
        localStorage.setItem(HIGH_SCORE_KEY, String(highScore));
        highScoreEl.textContent = highScore;
      }
      finalScoreEl.textContent = `Your score: ${score}`;
      gameOverOverlay.hidden = false;

      // save this run to the local leaderboard, tied to the entered name
      const name = (playerNameInput.value || '').trim().slice(0, 18) || 'Player';
      playerNameInput.value = name;
      localStorage.setItem(NAME_KEY, name);
      if (score > 0) saveScore(name, score);
    }

    function togglePause() {
      if (!running) return;
      paused = !paused;
      pauseBtn.innerHTML = paused
        ? '<i class="fa-solid fa-play"></i> Resume'
        : '<i class="fa-solid fa-pause"></i> Pause';
      if (!paused) startLoop();
    }

    function setDirection(dir) {
      const map = {
        up: { x: 0, y: -1 },
        down: { x: 0, y: 1 },
        left: { x: -1, y: 0 },
        right: { x: 1, y: 0 }
      };
      const d = map[dir];
      if (!d) return;
      // prevent reversing directly into itself
      if (d.x === -direction.x && d.y === -direction.y) return;
      nextDirection = d;
    }

    /* --- controls --- */
    startBtn.addEventListener('click', startGame);
    playAgainBtn.addEventListener('click', startGame);
    restartBtn.addEventListener('click', startGame);
    pauseBtn.addEventListener('click', togglePause);

    window.addEventListener('keydown', (e) => {
      const keyMap = {
        ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right',
        w: 'up', s: 'down', a: 'left', d: 'right'
      };
      if (keyMap[e.key]) {
        e.preventDefault();
        setDirection(keyMap[e.key]);
      }
      if (e.key === ' ') {
        e.preventDefault();
        togglePause();
      }
    });

    document.querySelectorAll('.touch-btn').forEach(btn => {
      btn.addEventListener('click', () => setDirection(btn.dataset.dir));
    });

    // swipe controls
    let touchStartX = 0, touchStartY = 0;
    canvas.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }, { passive: true });
    canvas.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      const dy = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(dx) > Math.abs(dy)) {
        setDirection(dx > 0 ? 'right' : 'left');
      } else {
        setDirection(dy > 0 ? 'down' : 'up');
      }
    }, { passive: true });

    window.addEventListener('resize', resizeCanvas);

    resetState();
    resizeCanvas();
    draw();
  }

});
