/**
 * Mini pulsar for the contact card back — same palette as life.js
 */
(() => {
  const canvas = document.querySelector("[data-card-life-canvas]");
  const card = document.querySelector("[data-biz-card]");
  if (!canvas || !card) return;

  const ctx = canvas.getContext("2d", { alpha: false });
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* tuned for white card — slightly deeper than the dark-grid life page */
  const COLORS = ["#fff8fc", "#0097a7", "#d40088", "#b8003a", "#5a18b0"];
  const PULSAR = [
    [2, 0], [3, 0], [4, 0], [8, 0], [9, 0], [10, 0],
    [0, 2], [5, 2], [7, 2], [12, 2],
    [0, 3], [5, 3], [7, 3], [12, 3],
    [0, 4], [5, 4], [7, 4], [12, 4],
    [2, 5], [3, 5], [4, 5], [8, 5], [9, 5], [10, 5],
    [2, 7], [3, 7], [4, 7], [8, 7], [9, 7], [10, 7],
    [0, 8], [5, 8], [7, 8], [12, 8],
    [0, 9], [5, 9], [7, 9], [12, 9],
    [0, 10], [5, 10], [7, 10], [12, 10],
    [2, 12], [3, 12], [4, 12], [8, 12], [9, 12], [10, 12],
  ];

  const COLS = 28;
  const ROWS = 14;
  const GRID_ASPECT = COLS / ROWS;

  let current = new Uint8Array(COLS * ROWS);
  let next = new Uint8Array(COLS * ROWS);
  let running = false;
  let rafId = 0;
  let lastTick = 0;
  let viewW = 0;
  let viewH = 0;
  const gensPerSec = 8;

  const colorFor = (age) => {
    if (age <= 0) return COLORS[0];
    if (age === 1) return COLORS[1];
    if (age <= 4) return COLORS[2];
    if (age <= 12) return COLORS[3];
    return COLORS[4];
  };

  const stampPulsar = () => {
    current.fill(0);
    const ox = Math.floor((COLS - 13) / 2);
    const oy = Math.floor((ROWS - 13) / 2);
    for (const [x, y] of PULSAR) {
      const px = ox + x;
      const py = oy + y;
      if (px >= 0 && px < COLS && py >= 0 && py < ROWS) {
        current[py * COLS + px] = 1;
      }
    }
  };

  const neighbors = (x, y) => {
    const xm = x === 0 ? COLS - 1 : x - 1;
    const xp = x === COLS - 1 ? 0 : x + 1;
    const ym = y === 0 ? ROWS - 1 : y - 1;
    const yp = y === ROWS - 1 ? 0 : y + 1;
    let n = 0;
    if (current[ym * COLS + xm]) n += 1;
    if (current[ym * COLS + x]) n += 1;
    if (current[ym * COLS + xp]) n += 1;
    if (current[y * COLS + xm]) n += 1;
    if (current[y * COLS + xp]) n += 1;
    if (current[yp * COLS + xm]) n += 1;
    if (current[yp * COLS + x]) n += 1;
    if (current[yp * COLS + xp]) n += 1;
    return n;
  };

  const step = () => {
    for (let y = 0; y < ROWS; y++) {
      for (let x = 0; x < COLS; x++) {
        const i = y * COLS + x;
        const n = neighbors(x, y);
        const alive = current[i] > 0;
        if (alive && (n === 2 || n === 3)) {
          next[i] = Math.min(current[i] + 1, 255);
        } else if (!alive && n === 3) {
          next[i] = 1;
        } else {
          next[i] = 0;
        }
      }
    }
    [current, next] = [next, current];
  };

  const gridLayout = (width, height) => {
    const boxAspect = width / height;
    if (boxAspect > GRID_ASPECT) {
      const gridH = height;
      const gridW = height * GRID_ASPECT;
      return {
        gridW,
        gridH,
        offsetX: (width - gridW) / 2,
        offsetY: 0,
      };
    }
    const gridW = width;
    const gridH = width / GRID_ASPECT;
    return {
      gridW,
      gridH,
      offsetX: 0,
      offsetY: (height - gridH) / 2,
    };
  };

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const width = Math.max(1, Math.round(rect.width));
    const height = Math.max(1, Math.round(rect.height));
    if (width === viewW && height === viewH && canvas.width) return;

    viewW = width;
    viewH = height;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const draw = () => {
    if (!viewW || !viewH) return;

    ctx.fillStyle = COLORS[0];
    ctx.fillRect(0, 0, viewW, viewH);

    const { gridW, gridH, offsetX, offsetY } = gridLayout(viewW, viewH);
    const cellW = gridW / COLS;
    const cellH = gridH / ROWS;
    const gapX = Math.max(0.5, cellW * 0.1);
    const gapY = Math.max(0.5, cellH * 0.1);

    for (let y = 0; y < ROWS; y++) {
      for (let x = 0; x < COLS; x++) {
        const age = current[y * COLS + x];
        if (!age) continue;
        ctx.fillStyle = colorFor(age);
        ctx.fillRect(
          offsetX + x * cellW + gapX,
          offsetY + y * cellH + gapY,
          cellW - gapX * 2,
          cellH - gapY * 2,
        );
      }
    }
  };

  const loop = (now) => {
    rafId = requestAnimationFrame(loop);
    if (!running) return;
    const interval = 1000 / gensPerSec;
    if (now - lastTick < interval) return;
    lastTick = now;
    step();
    draw();
  };

  const start = () => {
    if (reduceMotion) return;
    running = true;
    lastTick = performance.now();
  };

  const pause = () => {
    running = false;
  };

  const reset = () => {
    stampPulsar();
    lastTick = 0;
  };

  const refresh = () => {
    viewW = 0;
    viewH = 0;
    resize();
    draw();
  };

  reset();
  refresh();

  window.addEventListener("resize", refresh);

  const observer = new MutationObserver(() => {
    if (card.classList.contains("is-flipped")) {
      requestAnimationFrame(() => {
        reset();
        refresh();
        start();
      });
    } else {
      pause();
    }
  });
  observer.observe(card, { attributes: true, attributeFilter: ["class"] });

  if (card.classList.contains("is-flipped")) start();
  rafId = requestAnimationFrame(loop);

  window.addEventListener("pagehide", () => cancelAnimationFrame(rafId), { once: true });
})();
