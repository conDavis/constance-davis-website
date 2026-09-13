/**
 * Mechanical rolodex — cards rotate around a fixed horizontal axle.
 * Each card hinges from its top edge (transform-origin: 50% 0).
 * Discrete slots: -3 … +3 relative to active (0).
 */

const CARD_COUNT = 5;

/**
 * Slot layout around the axle.
 * angle  = rotateX (degrees) — card swings in the vertical plane
 * tx     = lateral offset along the arc
 * tz     = depth (negative = farther from viewer)
 * scale, opacity, z for layering
 */
const SLOT = {
  [-3]: { angle: -34, tx: -108, tz: -72, scale: 0.74, opacity: 0.42, z: 1 },
  [-2]: { angle: -24, tx: -76, tz: -48, scale: 0.82, opacity: 0.58, z: 3 },
  [-1]: { angle: -12, tx: -40, tz: -22, scale: 0.91, opacity: 0.78, z: 6 },
  0: { angle: 0, tx: 0, tz: 0, scale: 1, opacity: 1, z: 12 },
  1: { angle: 12, tx: 40, tz: -22, scale: 0.91, opacity: 0.78, z: 6 },
  2: { angle: 24, tx: 76, tz: -48, scale: 0.82, opacity: 0.58, z: 3 },
  3: { angle: 34, tx: 108, tz: -72, scale: 0.74, opacity: 0.42, z: 1 },
};

const MIN_SLOT = -3;
const MAX_SLOT = 3;

let activeIndex = 0;
let isAnimating = false;

const cardsRoot = document.getElementById("rolodex-cards");
const prevBtn = document.getElementById("rolodex-prev");
const nextBtn = document.getElementById("rolodex-next");
const indicator = document.getElementById("rolodex-indicator");

/** @type {HTMLElement[]} */
const cardEls = Array.from(cardsRoot.querySelectorAll(".rolodex-card"));

function relativeSlot(cardIndex) {
  return cardIndex - activeIndex;
}

function applySlot(el, slot, settling) {
  const cfg = SLOT[slot];
  const inRange = slot >= MIN_SLOT && slot <= MAX_SLOT;

  el.classList.toggle("is-hidden", !inRange);
  el.classList.toggle("is-active", slot === 0);
  el.classList.toggle("is-settling", settling);

  if (!inRange || !cfg) {
    el.style.zIndex = "0";
    el.style.setProperty("--opacity", "0");
    return;
  }

  el.style.zIndex = String(cfg.z);
  el.style.setProperty("--angle", `${cfg.angle}deg`);
  el.style.setProperty("--tx", `${cfg.tx}px`);
  el.style.setProperty("--tz", `${cfg.tz}px`);
  el.style.setProperty("--scale", String(cfg.scale));
  el.style.setProperty("--opacity", String(cfg.opacity));
}

function applyLayout(settlingIndex = null) {
  cardEls.forEach((el, cardIndex) => {
    applySlot(el, relativeSlot(cardIndex), settlingIndex === cardIndex);
  });

  indicator.textContent = `${activeIndex + 1} / ${CARD_COUNT}`;
  prevBtn.disabled = activeIndex === 0 || isAnimating;
  nextBtn.disabled = activeIndex === CARD_COUNT - 1 || isAnimating;
}

function advance(direction) {
  if (isAnimating) return;

  const nextIndex = activeIndex + direction;
  if (nextIndex < 0 || nextIndex >= CARD_COUNT) return;

  isAnimating = true;
  prevBtn.disabled = true;
  nextBtn.disabled = true;

  activeIndex = nextIndex;
  applyLayout(activeIndex);

  const settleMs = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? 80
    : 550;

  window.setTimeout(() => {
    cardEls.forEach((el) => el.classList.remove("is-settling"));
    isAnimating = false;
    applyLayout();
  }, settleMs);
}

prevBtn.addEventListener("click", () => advance(-1));
nextBtn.addEventListener("click", () => advance(1));

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") advance(-1);
  if (event.key === "ArrowRight") advance(+1);
});

applyLayout();
