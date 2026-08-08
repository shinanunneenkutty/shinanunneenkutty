/* =========================================================
   SK21 — MAIN JAVASCRIPT
========================================================= */


const $ = (selector, parent = document) =>
  parent.querySelector(selector);

const $$ = (selector, parent = document) =>
  [...parent.querySelectorAll(selector)];


/* =========================================================
   STATE
========================================================= */

const state = {

  magicPlayed: false,

  friendCount: 13,

  galleryIndex: 0,

  easterTriggered: false

};


/* =========================================================
   BOOT SCREEN
========================================================= */

const boot = $("#boot");
const bootBar = $("#bootBar");

let bootProgress = 0;

const bootTimer = setInterval(() => {

  bootProgress +=
    Math.random() * 13 + 5;

  if (bootProgress >= 100) {

    bootProgress = 100;

    clearInterval(bootTimer);

    setTimeout(() => {

      boot.classList.add("done");

    }, 500);

  }

  bootBar.style.width =
    bootProgress + "%";

}, 110);


/* =========================================================
   CURSOR GLOW
========================================================= */

const cursorGlow =
  $("#cursorGlow");

window.addEventListener(
  "pointermove",
  (event) => {

    cursorGlow.style.left =
      event.clientX + "px";

    cursorGlow.style.top =
      event.clientY + "px";

    cursorGlow.style.opacity = "1";


    $$(".social-card").forEach(card => {

      const rect =
        card.getBoundingClientRect();

      card.style.setProperty(
        "--mx",
        `${event.clientX - rect.left}px`
      );

      card.style.setProperty(
        "--my",
        `${event.clientY - rect.top}px`
      );

    });

  },
  {
    passive: true
  }
);


/* =========================================================
   STARFIELD
========================================================= */

const canvas =
  $("#starfield");

const ctx =
  canvas.getContext("2d");

let stars = [];


function resizeStars() {

  const dpr =
    Math.min(
      window.devicePixelRatio || 1,
      2
    );

  canvas.width =
    innerWidth * dpr;

  canvas.height =
    innerHeight * dpr;

  ctx.setTransform(
    dpr,
    0,
    0,
    dpr,
    0,
    0
  );


  const count =
    innerWidth < 700
      ? 70
      : 150;


  stars =
    Array.from(
      {
        length: count
      },
      () => ({

        x:
          Math.random() *
          innerWidth,

        y:
          Math.random() *
          innerHeight,

        z:
          Math.random(),

        s:
          Math.random() * 1.4 + .2

      })
    );

}


function drawStars() {

  ctx.clearRect(
    0,
    0,
    innerWidth,
    innerHeight
  );


  const time =
    performance.now() / 1000;


  for (const star of stars) {

    const twinkle =
      .35 +
      .65 *
      Math.abs(
        Math.sin(
          time *
          (.6 + star.z * 1.8)
        )
      );


    ctx.fillStyle =
      `rgba(
        180,
        220,
        255,
        ${twinkle * .5}
      )`;


    ctx.beginPath();

    ctx.arc(
      star.x,
      star.y,
      star.s * (.4 + star.z),
      0,
      Math.PI * 2
    );

    ctx.fill();

  }


  requestAnimationFrame(
    drawStars
  );

}


resizeStars();

window.addEventListener(
  "resize",
  resizeStars
);

drawStars();


/* =========================================================
   NAVIGATION
========================================================= */

const nav =
  $("#nav");


$("#navToggle").addEventListener(
  "click",
  () => {

    nav.classList.toggle(
      "open"
    );

  }
);


$("#closeNav").addEventListener(
  "click",
  () => {

    nav.classList.remove(
      "open"
    );

  }
);


$$(".nav-panel a").forEach(
  link => {

    link.addEventListener(
      "click",
      () => {

        nav.classList.remove(
          "open"
        );

      }
    );

  }
);


/* =========================================================
   ENTER BUTTON
========================================================= */

$("#enterBtn").addEventListener(
  "click",
  () => {

    $("#about").scrollIntoView({
      behavior: "smooth"
    });

  }
);


/* =========================================================
   SCROLL REVEALS
========================================================= */

const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(
        entry => {

          if (
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              "visible"
            );

          }

        }
      );

    },
    {
      threshold: .15
    }
  );


$$(".reveal").forEach(
  element => {

    observer.observe(element);

  }
);


/* =========================================================
   NATIVE PLACE GALLERY
========================================================= */

const galleryTrack =
  $("#galleryTrack");


for (
  let i = 1;
  i <= 15;
  i++
) {

  const card =
    document.createElement(
      "article"
    );

  card.className =
    "gallery-card";


  const number =
    String(i).padStart(
      2,
      "0"
    );


  card.innerHTML = `

    <img
      src="./public/images/native-place/${number}.jpg"
      alt="Ambalappara — photograph ${number}"
      loading="${i < 3 ? "eager" : "lazy"}"
    >

    <div class="photo-label">

      AMBALAPPARA

      <b>
        // ${number}
      </b>

    </div>

  `;


  galleryTrack.appendChild(
    card
  );

}


const gallery =
  $("#gallery");

const galleryProgress =
  $("#galleryProgress");

const galleryCurrent =
  $("#galleryCurrent");


function updateGallery() {

  const rect =
    gallery.getBoundingClientRect();


  const max =
    Math.max(
      1,
      gallery.scrollHeight -
      innerHeight
    );


  const progress =
    Math.min(
      1,
      Math.max(
        0,
        -rect.top / max
      )
    );


  galleryTrack.style.transform =
    `translate3d(
      ${-progress *
      (galleryTrack.scrollWidth -
      innerWidth) *
      .94}px,
      0,
      0
    )`;


  galleryProgress.style.width =
    progress * 100 + "%";


  galleryCurrent.textContent =
    String(
      Math.min(
        15,
        Math.floor(
          progress * 14.99
        ) + 1
      )
    ).padStart(
      2,
      "0"
    );

}


window.addEventListener(
  "scroll",
  updateGallery,
  {
    passive: true
  }
);


/* =========================================================
   MAGIC SECTION
========================================================= */

const magicSection =
  $("#magic");

const magicBtn =
  $("#magicBtn");

const stage =
  $("#friendStage");

const audio =
  $("#magicAudio");

const scan =
  $("#scanOverlay");

const magicHud =
  $("#magicHud");

const magicEnd =
  $("#magicEnd");

const magicContent =
  $(".magic-content");

const magicCount =
  $("#magicCount");

const magicMessage =
  $("#magicMessage");

const magicStatus =
  $("#magicStatus");


/* =========================================================
   FRIEND ENTRY POSITIONS
========================================================= */

const entryStyles = [

  {
    x: "-35vw",
    y: "-65vh",
    r: -35,
    s: .55
  },

  {
    x: "38vw",
    y: "-65vh",
    r: 24,
    s: .8
  },

  {
    x: "-42vw",
    y: "20vh",
    r: -22,
    s: .65
  },

  {
    x: "45vw",
    y: "25vh",
    r: 31,
    s: .72
  },

  {
    x: "-35vw",
    y: "55vh",
    r: 55,
    s: .75
  },

  {
    x: "35vw",
    y: "55vh",
    r: -48,
    s: .62
  },

  {
    x: "-46vw",
    y: "-5vh",
    r: 18,
    s: .7
  },

  {
    x: "42vw",
    y: "-8vh",
    r: -28,
    s: .9
  },

  {
    x: "-12vw",
    y: "-70vh",
    r: 42,
    s: .6
  },

  {
    x: "12vw",
    y: "70vh",
    r: -41,
    s: .72
  },

  {
    x: "-55vw",
    y: "38vh",
    r: 14,
    s: .65
  },

  {
    x: "55vw",
    y: "-35vh",
    r: -17,
    s: .8
  },

  {
    x: "0vw",
    y: "-75vh",
    r: 7,
    s: .68
  }

];


/* =========================================================
   CREATE FRIEND
========================================================= */

function makeFriend(index) {

  const element =
    document.createElement(
      "div"
    );

  element.className =
    "friend";


  element.innerHTML = `

    <img
      src="./public/images/friends/friend-${String(index).padStart(2,"0")}.png"
      alt="Friend ${index}"
    >

    <span class="friend-name">
      SUBJECT ${String(index).padStart(2,"0")}
    </span>

  `;


  stage.appendChild(
    element
  );


  return element;

}


/* =========================================================
   ANIMATE ONE FRIEND
========================================================= */

function animateFriend(index) {

  return new Promise(
    resolve => {

      const element =
        makeFriend(index);

      const style =
        entryStyles[index - 1];


      const angle =
        style.r;


      element.style.left =
        "50%";

      element.style.top =
        "50%";


      element.style.opacity =
        "0";


      element.style.transform =

        `translate(-50%,-50%)
         translate(${style.x},${style.y})
         rotate(${angle}deg)
         scale(${style.s})`;


      const finalX =
        (Math.random() - .5) *
        44;

      const finalY =
        (Math.random() - .5) *
        35;


      const finalRotation =
        (Math.random() - .5) *
        22;


      requestAnimationFrame(
        () => {

          element.style.transition =

            "transform 1.05s cubic-bezier(.12,.85,.18,1)," +
            "opacity .45s ease";


          element.style.opacity =
            "1";


          element.style.transform =

            `translate(-50%,-50%)
             translate(${finalX}vw,${finalY}vh)
             rotate(${finalRotation}deg)
             scale(1)`;

        }
      );


      setTimeout(
        () => {

          element.style.transition =
            "transform 1.5s cubic-bezier(.2,.8,.2,1)";


          element.style.transform =

            `translate(-50%,-50%)
             translate(${finalX}vw,${finalY}vh)
             rotate(${finalRotation + 8}deg)
             scale(1.03)`;


          setTimeout(
            resolve,
            550
          );

        },
        950
      );

    }
  );

}


/* =========================================================
   PLAY MAGIC
========================================================= */

async function playMagic() {

  if (
    state.magicPlayed
  ) {

    return;

  }


  state.magicPlayed =
    true;


  document.body.classList.add(
    "magic-active"
  );


  magicContent.classList.add(
    "hide"
  );


  magicStatus.textContent =
    "Oh no. You actually pressed it.";


  scan.classList.add(
    "active"
  );


  magicHud.classList.add(
    "active"
  );


  magicMessage.textContent =
    "INITIALIZING UNNECESSARY CHAOS";


  /*
    Audio begins only after
    the user clicks the Magic button.
  */

  try {

    await audio.play();

  } catch (error) {

    console.log(
      "Audio could not start:",
      error
    );

  }


  await new Promise(
    resolve =>
      setTimeout(
        resolve,
        650
      )
  );


  for (
    let i = 1;
    i <= state.friendCount;
    i++
  ) {

    magicCount.textContent =

      `${String(i).padStart(2,"0")} / 13`;


    magicMessage.textContent =

      i === 1
        ? "FIRST SUBJECT ACQUIRED"
        : "SUBJECT DETECTED";


    await animateFriend(i);


    if (
      i <
      state.friendCount
    ) {

      await new Promise(
        resolve =>
          setTimeout(
            resolve,
            170
          )
      );

    }

  }


  magicMessage.textContent =
    "ALL SUBJECTS ACCOUNTED FOR";


  magicEnd.classList.add(
    "show"
  );


  setTimeout(
    () => {

      magicEnd.classList.remove(
        "show"
      );

      magicMessage.textContent =
        "SYSTEM STABLE";

      document.body.classList.remove(
        "magic-active"
      );

    },
    4200
  );

}


magicBtn.addEventListener(
  "click",
  playMagic
);


/* =========================================================
   FRIEND INTERACTION
========================================================= */

stage.addEventListener(
  "pointermove",
  event => {

    if (
      !state.magicPlayed
    ) {

      return;

    }


    $$(".friend", stage)
      .forEach(
        element => {

          const rect =
            element.getBoundingClientRect();


          const centerX =
            rect.left +
            rect.width / 2;


          const centerY =
            rect.top +
            rect.height / 2;


          const dx =
            (event.clientX -
              centerX) / 100;


          const dy =
            (event.clientY -
              centerY) / 100;


          element.style.marginLeft =

            `${Math.max(
              -12,
              Math.min(12, dx)
            )}px`;


          element.style.marginTop =

            `${Math.max(
              -12,
              Math.min(12, dy)
            )}px`;

        }
      );

  },
  {
    passive: true
  }
);


/* =========================================================
   SOCIAL LINKS
=========================================================

   CHANGE THESE FOUR VALUES.

========================================================= */

const SOCIALS = {

  instagram:
    "https://instagram.com/YOUR_USERNAME",

  facebook:
    "https://facebook.com/YOUR_USERNAME",

  snapchat:
    "https://www.snapchat.com/add/YOUR_USERNAME",

  email:
    "mailto:YOUR_EMAIL@example.com"

};


$$("[data-social]").forEach(
  element => {

    const key =
      element.dataset.social;


    if (
      SOCIALS[key]
    ) {

      element.href =
        SOCIALS[key];

    }

  }
);


/* =========================================================
   REPLAY
========================================================= */

$("#replayBtn").addEventListener(
  "click",
  () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });


    setTimeout(
      () => {

        location.reload();

      },
      700
    );

  }
);


/* =========================================================
   SECRET EASTER EGG
=========================================================

   Tap the SK21 navigation button
   7 times within 4 seconds.

========================================================= */

let taps = 0;

let tapTimer;


$("#navToggle").addEventListener(
  "click",
  () => {

    taps++;


    clearTimeout(
      tapTimer
    );


    tapTimer =
      setTimeout(
        () => {

          taps = 0;

        },
        4000
      );


    if (
      taps >= 7
    ) {

      taps = 0;


      $("#easterEgg")
        .classList
        .add("show");


      $("#easterEgg")
        .setAttribute(
          "aria-hidden",
          "false"
        );

    }

  }
);


/* =========================================================
   CLOSE EASTER EGG
========================================================= */

$("#eggClose").addEventListener(
  "click",
  () => {

    $("#easterEgg")
      .classList
      .remove("show");


    $("#easterEgg")
      .setAttribute(
        "aria-hidden",
        "true"
      );

  }
);


/* =========================================================
   KEYBOARD ACCESSIBILITY
========================================================= */

window.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
    ) {

      nav.classList.remove(
        "open"
      );

    }

  }
);


/* =========================================================
   INITIALIZE
========================================================= */

updateGallery();
