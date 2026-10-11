const P = "";
const PHOTO_ASSETS = {
  pride: P + "WhatsApp Image 2026-10-11 at 1 11.46.38 PM.jpeg",
  nightMemory: P + "WhatsApp Image 2026-10-11 at 11.46.38 PM 2.jpeg",
  togetherSelfie: P + "WhatsApp Image 2026-10-11 at 11.46.38 PM 3.jpeg",
  togetherOutdoor: P + "WhatsApp Image 2026-10-11 at 11.46.38 PM.jpeg",
  tasnimCar: P + "WhatsApp Image 2026-10-11 at 11.47.53 PM 4.jpeg",
  tasnimCafe: P + "WhatsApp Image 2026-10-11 at 11.47.53 PM 5.jpeg",
  treatmentDay: P + "WhatsApp Image 2026-10-11 at 11.47.53 PM 6.jpeg",
  familyNight: P + "WhatsApp Image 2026-10-11 at 11.49.44 PM 10.jpeg",
  celebration: P + "WhatsApp Image 2026-10-11 at 11.49.44 PM 11.jpeg",
  happiestMoment: P + "WhatsApp Image 2026-10-11 at 11.49.44 PM 7.jpeg",
  familyOutdoor: P + "WhatsApp Image 2026-10-11 at 11.49.44 PM 8.jpeg",
  siblings: P + "WhatsApp Image 2026-10-11 at 11.49.44 PM 9.jpeg",
};

const ALT = {
  pride:
    "A young man holding flowers and a certificate, embraced by a woman in teal",
  nightMemory:
    "A dark night scene with bright lights overhead and people in the foreground",
  togetherSelfie:
    "Tasnim and her younger brother in a daytime selfie under a blue sky",
  togetherOutdoor:
    "Tasnim and her younger brother outdoors near greenery and palm trees",
  tasnimCar: "Tasnim in a car, wearing a red headscarf and making a peace sign",
  tasnimCafe: "Tasnim smiling at an outdoor café, holding a drink",
  treatmentDay: "Tasnim smiling in a corridor, wearing a light headscarf",
  familyNight:
    "Adults and a child embracing outdoors at night under bright lights",
  celebration: "A group photo at a graduation-style event near a stage",
  happiestMoment: "Tasnim, her younger brother and a child embracing indoors",
  familyOutdoor:
    "A group of adults and a child outdoors with palm trees behind",
  siblings:
    "A group at an indoor decorated event, with several adults and a small child",
};

const CH = [
  {
    k: "pride",
    tag: "The Moments We Keep",
    h: "Some Moments Hold More Than a Photograph",
    t: "There are moments I look back on and realize that what made them beautiful was never just what happened. It was who stood beside me. Some memories carry pride, some carry joy, and some quietly remind me how lucky I am to have you in my life.",
    c: "Some of my favorite memories have you standing somewhere inside them.",
    ar: "بعض اللحظات لا تبقى في الذاكرة بصورتها، بل بمن شاركنا إيّاها.",
    cls: "ivory polaroid-ch",
  },
  {
    k: "nightMemory",
    tag: "Little Pieces of Our Story",
    h: "Even the Nights Become Memories",
    t: "I don't think every beautiful memory needs a perfect photograph. Sometimes the lights are too bright, the world is moving, and the picture cannot capture everything. But I remember the feeling. And sometimes, that is more than enough.",
    c: "Not every memory needs to be perfectly clear to remain beautiful.",
    cls: "navy night",
  },
  {
    pair: true,
    tag: "The Beautiful Simplicity of Us",
    cls: "cream",
    a: {
      k: "togetherSelfie",
      h: "Nothing Extraordinary. And Everything.",
      t: "Sometimes I think the most precious part of having you in my life is how ordinary everything can feel when we're together. We don't need a special occasion, a perfect plan, or the right words. Sometimes, simply being there is enough.",
      c: "Just us. And somehow, that has always been enough.",
      ar: "معكِ، لا تحتاج اللحظات البسيطة إلى شيءٍ آخر كي تصبح عزيزة.",
    },
    b: {
      k: "togetherOutdoor",
      h: "The Memories I Never Want to Lose",
      t: "I wish I could keep every ordinary moment exactly as it was. Not because anything extraordinary happened, but because there are people whose presence makes even the simplest day worth remembering. You have always been one of those people.",
      c: "If I could keep a thousand little moments, I would keep the ones with you.",
    },
  },
  {
    k: "tasnimCar",
    tag: "The Person Behind the Smile",
    h: "The Lightness You Bring",
    t: "There is a playful side of you that I love. A softness that lives alongside your strength. You can be thoughtful and serious, and still carry this beautiful ability to make life feel lighter. I hope you never lose that part of yourself.",
    c: "Your softness has always been one of your strengths.",
    ar: "أحبّ فيكِ تلك الروح التي تجمع بين رقّة القلب وخفّة الظلّ.",
    cls: "cream soft",
  },
  {
    k: "tasnimCafe",
    tag: "The Kindness That Doesn't Ask for Attention",
    h: "The Quiet Beauty of Who You Are",
    t: "You have this beautiful way of helping people understand themselves without making them feel small. You listen. You offer possibilities. You leave room for others to choose. And somehow, you make people feel safer simply by being yourself.",
    c: "Some people make the world gentler without ever asking for credit.",
    ar: "أجمل ما فيكِ أنّكِ تمنحين الآخرين الطمأنينة، دون أن تسلبيهم حرّيّة الاختيار.",
    cls: "cafe soft flip",
  },
  {
    k: "treatmentDay",
    tag: "The Courage I Will Always Admire",
    h: "I Wish I Had Been There for More",
    t: "I know there were days I didn't see. Difficult moments you carried, fears you may never have spoken about, and a strength I can only begin to understand.\n\nAnd I wish I could have been there for more of it.\n\nBut there is one thing I will always be grateful for: I was there on that final day of your treatment injections.\n\nI got to stand near you in a moment that meant so much.\n\nI don't want you to think that I am proud of you only because you were strong. I am proud of you because you are you — through every version of yourself, including the ones that were tired, frightened, or simply trying to get through another day.\n\nYou never needed to prove your strength to deserve my love.",
    c: "I could not be beside you through every chapter. But I will always be grateful that I was there for this one.",
    ar: "كم تمنّيتُ لو كنتُ إلى جانبكِ في كلّ لحظةٍ صعبة. لكنّني سأظلّ ممتنًّا لأنّني كنتُ معكِ في ذلك اليوم. أنا فخورٌ بكِ، لا لأنّكِ كنتِ قويةً دائمًا، بل لأنّكِ أنتِ، بكلّ ما مررتِ به.",
    cls: "tribute",
    plain: true,
  },
  {
    k: "familyNight",
    tag: "The Little World of Love",
    h: "The People Who Make Life Warmer",
    t: "There is something beautiful about seeing the people we love surrounded by their own little world of love. The moments that might look ordinary from the outside can mean everything to the people living them.",
    c: "The smallest moments together often become the biggest memories.",
    cls: "navy night flip",
  },
  {
    k: "celebration",
    tag: "The People Who Feel Like Home",
    h: "Being There Matters",
    t: "Some photographs remind me of celebrations. Others remind me of the people who made those moments feel complete. When I look back, it is often the faces around me that matter most.",
    c: "The best part of a beautiful day is often who shares it with us.",
    cls: "album",
    seal: true,
  },
  {
    k: "happiestMoment",
    tag: "One of My Happiest Moments",
    h: "If Happiness Had a Photograph",
    t: "I don't know if I have ever told you how much moments like this mean to me.\n\nNot because everything was perfect.\n\nNot because anything extraordinary had to happen.\n\nBut because I was there, with you, sharing a moment I wished I could hold on to a little longer.\n\nSome of the happiest moments of my life have been this simple.\n\nAnd this is one of the memories I will always keep close.",
    c: "One of the happiest moments of my life.",
    ar: "لو استطعتُ أن أحتفظ بلحظةٍ إلى الأبد، لكانت بعض لحظاتنا معًا من أوّل ما أختار.",
    cls: "hero",
    hero: true,
  },
  {
    k: "familyOutdoor",
    tag: "The People We Carry With Us",
    h: "Home Is Sometimes a Collection of People",
    t: "Over time, I have learned that home is not always a place. Sometimes it is the people we return to, the familiar voices, and the memories that keep reminding us where we belong.",
    c: "Some people will always feel like home.",
    cls: "cream soft wide",
  },
  {
    k: "siblings",
    tag: "The Family We Carry With Us",
    h: "The People Who Know Where We Began",
    t: "There is something irreplaceable about the people who share the story of where we came from. Life may take us in different directions, and not every person can be present in every photograph. But family has a way of living far beyond the edges of a picture.",
    c: "Not everyone we love is in every photograph. They are still part of the story.",
    ar: "قد لا تجمعنا صورةٌ واحدة في كلّ مرّة، لكنّ المحبّة التي تجمعنا أوسع من حدود الصور.",
    cls: "spread flip",
  },
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
const paras = (s) =>
  s
    .split("\n\n")
    .map((p) => `<p class="t">${esc(p)}</p>`)
    .join("");
const img = (k) =>
  `<img src="${encodeURI(PHOTO_ASSETS[k])}" alt="${ALT[k]}" loading="lazy">`;
const btn = (k, cap, inner) =>
  `<button class="ph" data-k="${k}" data-cap="${esc(cap).replace(/"/g, "&quot;")}" aria-label="Open photo fullscreen">${inner}</button>`;
const words = (o, tag) =>
  `${tag ? `<p class="tag">${esc(tag)}</p>` : ""}<h2>${esc(o.h)}</h2>${paras(o.t)}<p class="cap">${esc(o.c)}</p>${o.ar ? `<p class="ar" dir="rtl" lang="ar">${o.ar}</p>` : ""}`;

function photoBlock(o) {
  const i = img(o.k);
  if (o.cls.includes("polaroid"))
    return `<div class="polaroid">${btn(o.k, o.c, i)}</div>`;
  if (o.cls.includes("night"))
    return `<div class="frame">${btn(o.k, o.c, i)}</div>`;
  if (o.cls.includes("soft"))
    return `<div class="portrait">${btn(o.k, o.c, i)}</div>`;
  return btn(o.k, o.c, i);
}

const book = document.getElementById("book");
CH.forEach((o) => {
  const s = document.createElement("section");
  s.className = "ch " + (o.cls || "");
  if (o.pair) {
    s.innerHTML = `<div class="in"><p class="tag" style="text-align:center">${esc(o.tag)}</p>
      <div class="in two"><div class="pair"><div class="a"><div class="polaroid">${btn(o.a.k, o.a.c, img(o.a.k))}</div></div></div><div>${words(o.a)}</div></div>
      <div class="in two flip second"><div class="pair"><div class="a"><div class="polaroid tilt">${btn(o.b.k, o.b.c, img(o.b.k))}</div></div></div><div>${words(o.b)}</div></div></div>`;
    s.querySelectorAll(".second .pair").forEach((p) =>
      p.classList.remove("pair"),
    );
  } else if (o.hero) {
    s.innerHTML = `<div class="full">${btn(o.k, o.c, img(o.k))}</div><div class="letter"><p class="tag">${esc(o.tag)}</p><h2>${esc(o.h)}</h2>${paras(o.t)}<p class="cap">${esc(o.c)}</p><p class="ar" dir="rtl" lang="ar">${o.ar}</p></div>`;
  } else {
    const deco = o.cls.includes("night")
      ? '<div class="stars" aria-hidden="true"></div>'
      : o.cls.includes("soft")
        ? '<div class="leaf" aria-hidden="true"></div>'
        : "";
    const wrap = o.cls.includes("album")
      ? `<div class="ph-wrap">${photoBlock(o)}${o.seal ? '<span class="seal" aria-hidden="true"></span>' : ""}</div>`
      : o.cls.includes("spread")
        ? `<div class="ph-wrap">${photoBlock(o)}</div>`
        : photoBlock(o);
    s.innerHTML = `${deco}<div class="in ${o.plain ? "" : "two"}${o.cls.includes("flip") ? " flip" : ""}"><div class="ph-wrap-outer ph-wrap">${wrap}</div><div>${words(o, o.tag)}</div></div>`;
    if (o.plain) {
      s.querySelector(".in").innerHTML =
        `<div>${photoBlock(o)}</div><div>${words(o, o.tag)}</div>`;
    }
  }
  book.appendChild(s);
});

/* Lightbox */
const lb = document.getElementById("lightbox"),
  lbImg = lb.querySelector("img"),
  lbCap = lb.querySelector("p");
let opener = null;
const close = () => {
  lb.hidden = true;
  document.body.style.overflow = "";
  if (opener) opener.focus();
};
book.addEventListener("click", (e) => {
  const b = e.target.closest(".ph");
  if (!b) return;
  opener = b;
  lbImg.src = encodeURI(PHOTO_ASSETS[b.dataset.k]);
  lbImg.alt = ALT[b.dataset.k];
  lbCap.textContent = b.dataset.cap;
  lb.hidden = false;
  document.body.style.overflow = "hidden";
  document.getElementById("close").focus();
});
lb.addEventListener("click", (e) => {
  if (e.target !== lbImg) close();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !lb.hidden) close();
});

/* ===== Book: page turning + sound effects (all synthesized, no audio files) ===== */
document.addEventListener(
  "error",
  (e) => {
    const i = e.target;
    if (
      i.tagName === "IMG" &&
      !i.dataset.f &&
      i.src.includes("/photos/") &&
      !i.src.includes("/assets/photos/")
    ) {
      i.dataset.f = 1;
      i.src = i.src.replace("/photos/", "/assets/photos/");
    }
  },
  true,
);
book.querySelectorAll("img").forEach((i) => (i.loading = "eager"));

let AC,
  muted = false;
const ac = () => {
  AC = AC || new (window.AudioContext || window.webkitAudioContext)();
  if (AC.state === "suspended") AC.resume();
  return AC;
};
function flip() {
  if (muted) return;
  const c = ac(),
    t = c.currentTime;
  const b = c.createBuffer(1, c.sampleRate * 0.6, c.sampleRate),
    d = b.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  const s = c.createBufferSource(),
    f = c.createBiquadFilter(),
    g = c.createGain();
  s.buffer = b;
  f.type = "bandpass";
  f.Q.value = 0.7;
  f.frequency.setValueAtTime(500, t);
  f.frequency.exponentialRampToValueAtTime(4000, t + 0.4);
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(0.4, t + 0.1);
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.55);
  s.connect(f);
  f.connect(g);
  g.connect(c.destination);
  s.start(t);
}
function chime(notes, vol = 0.16) {
  if (muted) return;
  const c = ac();
  notes.forEach((fr, i) => {
    const o = c.createOscillator(),
      g = c.createGain(),
      t = c.currentTime + i * 0.13;
    o.type = "sine";
    o.frequency.value = fr;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.001, t + 1.6);
    o.connect(g);
    g.connect(c.destination);
    o.start(t);
    o.stop(t + 1.7);
  });
}
function thud() {
  if (muted) return;
  const c = ac(),
    t = c.currentTime,
    o = c.createOscillator(),
    g = c.createGain();
  o.frequency.setValueAtTime(130, t);
  o.frequency.exponentialRampToValueAtTime(45, t + 0.25);
  g.gain.setValueAtTime(0.5, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
  o.connect(g);
  g.connect(c.destination);
  o.start(t);
  o.stop(t + 0.35);
}

[...book.children].forEach((c) => c.classList.add("pg"));
const pgs = [...book.children],
  N = pgs.length - 1;
const count = document.getElementById("count"),
  hint = document.getElementById("hint");
let tok = 0,
  hinted = false;
let cur = 0,
  busy = false;
pgs.forEach((p, i) => (p.style.zIndex = pgs.length - i));

function show(n, quiet) {
  if (n < 0 || n > N || busy) return;
  busy = true;
  const old = cur;
  cur = n;
  pgs.forEach((p, i) => {
    p.classList.toggle("turned", i < cur);
    p.inert = i !== cur;
    p.style.visibility = i === cur || i === old ? "visible" : "hidden";
  });
  document.body.classList.toggle("onCover", cur === 0);
  count.textContent = cur + " / " + N;
  if (cur === 1 && !hinted) {
    hinted = true;
    hint.hidden = false;
    setTimeout(() => (hint.hidden = true), 4500);
  }
  if (!quiet) {
    if (old === 0 && cur === 1) {
      thud();
      chime([523, 659, 784, 1047]);
    } else if (cur === 0) {
      flip();
      chime([784, 659, 523], 0.12);
    } else flip();
    const cls = pgs[cur].className;
    setTimeout(() => {
      if (cls.includes("night")) chime([1319, 1568, 1976], 0.08);
      else if (cls.includes("hero")) chime([659, 784, 988], 0.12);
    }, 700);
  }
  pgs[cur].scrollTop = 0;
  const tk = ++tok;
  setTimeout(() => (busy = false), 900);
  setTimeout(() => {
    if (tk === tok)
      pgs.forEach((p, i) => {
        if (i !== cur) p.style.visibility = "hidden";
      });
  }, 1100);
}
pgs.forEach((p, i) => (p.inert = i !== 0));
const cover = document.getElementById("cover");
let opened = false;
function confetti() {
  const cols = ["#e8c77d", "#c2566b", "#f3ead8", "#7fb3a8", "#b49ad9"],
    r = cover.querySelector(".box").getBoundingClientRect();
  for (let i = 0; i < 46; i++) {
    const e = document.createElement("i");
    e.className = "confetti";
    e.style.background = cols[i % 5];
    e.style.left = r.left + r.width / 2 + "px";
    e.style.top = r.top + "px";
    document.body.appendChild(e);
    const dx = (Math.random() - 0.5) * 420,
      dy = -140 - Math.random() * 260;
    e.animate(
      [
        { transform: "translate(0,0) rotate(0)", opacity: 1 },
        {
          transform: `translate(${dx}px,${dy}px) rotate(${Math.random() * 720}deg)`,
          opacity: 1,
          offset: 0.55,
        },
        {
          transform: `translate(${dx * 1.2}px,${dy + 420}px) rotate(900deg)`,
          opacity: 0,
        },
      ],
      { duration: 1800 + Math.random() * 600, easing: "ease-out" },
    ).onfinish = () => e.remove();
  }
}
function openGift() {
  startMusic();
  if (opened) return show(1);
  opened = true;
  cover.classList.add("open");
  cover.querySelector("small").style.visibility = "hidden";
  chime([784, 988, 1175, 1568], 0.12);
  confetti();
  setTimeout(() => show(1), 1700);
}
cover.addEventListener("click", openGift);
cover.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    openGift();
  }
});
document.addEventListener("keydown", (e) => {
  if (!lb.hidden || cur === 0) return;
  if (e.key === "ArrowRight") show(cur + 1);
  if (e.key === "ArrowLeft") show(cur - 1);
});
let sx = null,
  sy = 0,
  swiped = false;
book.addEventListener("pointerdown", (e) => {
  sx = e.clientX;
  sy = e.clientY;
  swiped = false;
});
book.addEventListener("pointerup", (e) => {
  if (sx == null) return;
  const dx = e.clientX - sx,
    dy = e.clientY - sy;
  sx = null;
  if (cur > 0 && Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.3) {
    swiped = true;
    show(cur + (dx < 0 ? 1 : -1));
  }
});
book.addEventListener("pointercancel", () => (sx = null));
book.addEventListener(
  "click",
  (e) => {
    if (swiped) {
      e.stopPropagation();
      e.preventDefault();
      swiped = false;
    }
  },
  true,
);
const snd = document.getElementById("snd");
snd.onclick = () => {
  muted = !muted;
  if (mBus) mBus.gain.setTargetAtTime(muted ? 0 : 0.3, AC.currentTime, 0.1);
  snd.setAttribute("aria-pressed", String(!muted));
  snd.setAttribute("aria-label", muted ? "Sound off" : "Sound on");
};
show(0, true);

/* ===== Background music: soft music-box lullaby, generated live ===== */
const CHORDS = [
  [261.6, 329.6, 392, 523.3, 659.3, 784],
  [220, 261.6, 329.6, 440, 523.3, 659.3],
  [174.6, 220, 261.6, 349.2, 440, 523.3],
  [196, 246.9, 293.7, 392, 493.9, 587.3],
];
let mStarted = false,
  mBus,
  nextT = 0,
  stp = 0;
function tone(f, t, dur, vol, type) {
  const c = AC,
    o = c.createOscillator(),
    g = c.createGain();
  o.type = type;
  o.frequency.value = f;
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(vol, t + 0.01);
  g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  o.connect(g);
  g.connect(mBus);
  o.start(t);
  o.stop(t + dur + 0.05);
}
function note(t) {
  const ch = CHORDS[Math.floor(stp / 8) % 4],
    k = stp % 8;
  if (k === 0) tone(ch[0] / 2, t, 3.2, 0.45, "sine");
  const i = [1, 2, 3, 2, 4, 3, 5, 3][k];
  if (k % 2 === 0 || Math.random() < 0.5)
    tone(
      ch[Math.random() < 0.2 ? Math.min(i + 1, 5) : i],
      t,
      1.7,
      0.2,
      "triangle",
    );
  stp++;
}
function startMusic() {
  if (mStarted) return;
  mStarted = true;
  const c = ac();
  mBus = c.createGain();
  mBus.gain.value = 0;
  mBus.gain.linearRampToValueAtTime(muted ? 0 : 0.3, c.currentTime + 3);
  const dl = c.createDelay(1),
    fb = c.createGain(),
    lp = c.createBiquadFilter();
  dl.delayTime.value = 0.38;
  fb.gain.value = 0.38;
  lp.type = "lowpass";
  lp.frequency.value = 2200;
  mBus.connect(c.destination);
  mBus.connect(dl);
  dl.connect(lp);
  lp.connect(fb);
  fb.connect(dl);
  lp.connect(c.destination);
  nextT = c.currentTime + 0.2;
  setInterval(() => {
    while (nextT < c.currentTime + 1.5) {
      note(nextT);
      nextT += 0.42;
    }
  }, 250);
}
