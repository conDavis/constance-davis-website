document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector("[data-life-canvas]");
  if (!canvas) return;

  const genEl = document.querySelector("[data-life-gen]");
  const popEl = document.querySelector("[data-life-pop]");
  const stateEl = document.querySelector("[data-life-state]");
  const toggleBtn = document.querySelector("[data-life-toggle]");
  const stepBtn = document.querySelector("[data-life-step]");
  const clearBtn = document.querySelector("[data-life-clear]");
  const speedInput = document.querySelector("[data-life-speed]");
  const patternBtns = document.querySelectorAll("[data-life-pattern]");
  const stage = canvas.parentElement;
  const ctx = canvas.getContext("2d", { alpha: false });
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const CELL = 11;
  const COLORS = ["#090018", "#00e6f6", "#ff2fb0", "#ff1f4b", "#7a1fff"];

  const PATTERNS = {
    glider: [
      [1, 0],
      [2, 1],
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    ship: [
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [0, 1],
      [4, 1],
      [4, 2],
      [0, 3],
      [3, 3],
    ],
    pulsar: [
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
    ],
    penta: [
      [2, 0], [7, 0],
      [0, 1], [1, 1], [3, 1], [4, 1], [5, 1], [6, 1], [8, 1], [9, 1],
      [2, 2], [7, 2],
    ],
    gun: [
      [24, 0],
      [22, 1], [24, 1],
      [12, 2], [13, 2], [20, 2], [21, 2], [34, 2], [35, 2],
      [11, 3], [15, 3], [20, 3], [21, 3], [34, 3], [35, 3],
      [0, 4], [1, 4], [10, 4], [16, 4], [20, 4], [21, 4],
      [0, 5], [1, 5], [10, 5], [14, 5], [16, 5], [17, 5], [22, 5], [24, 5],
      [10, 6], [16, 6], [24, 6],
      [11, 7], [15, 7],
      [12, 8], [13, 8],
    ],
    acorn: [
      [1, 0],
      [3, 1],
      [0, 2],
      [1, 2],
      [4, 2],
      [5, 2],
      [6, 2],
    ],
    rpent: [
      [1, 0],
      [2, 0],
      [0, 1],
      [1, 1],
      [1, 2],
    ],
  };

  let cols = 0;
  let rows = 0;
  let cellW = CELL;
  let cellH = CELL;
  let current = new Uint8Array(0);
  let next = new Uint8Array(0);
  let generation = 0;
  let population = 0;
  let running = !reduceMotion;
  let gensPerSec = Number(speedInput?.value) || 10;
  let lastTick = 0;
  let rafId = 0;
  let paintMode = 1;
  let painting = false;

  const colorFor = (age) => {
    if (age <= 0) return COLORS[0];
    if (age === 1) return COLORS[1];
    if (age <= 4) return COLORS[2];
    if (age <= 12) return COLORS[3];
    return COLORS[4];
  };

  const pad = (value, width) => String(value).padStart(width, "0");

  const setRunning = (value) => {
    running = value;
    if (toggleBtn) toggleBtn.textContent = running ? "pause" : "play";
    if (stateEl) stateEl.textContent = running ? "playing" : "paused";
  };

  const updateHud = () => {
    if (genEl) genEl.textContent = `gen ${pad(generation, 5)}`;
    if (popEl) popEl.textContent = `pop ${pad(population, 4)}`;
  };

  const recount = () => {
    let pop = 0;
    for (let i = 0; i < current.length; i++) {
      if (current[i]) pop += 1;
    }
    population = pop;
  };

  const sizeGrid = () => {
    const width = Math.max(stage.clientWidth, 220);
    const height = Math.max(Math.round(Math.min(520, Math.max(280, width * 0.58))), 220);
    const nextCols = Math.max(20, Math.floor(width / CELL));
    const nextRows = Math.max(16, Math.floor(height / CELL));
    cellW = width / nextCols;
    cellH = height / nextRows;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    if (nextCols === cols && nextRows === rows && current.length) return;

    const grown = new Uint8Array(nextCols * nextRows);
    const copyCols = Math.min(cols, nextCols);
    const copyRows = Math.min(rows, nextRows);
    for (let y = 0; y < copyRows; y++) {
      for (let x = 0; x < copyCols; x++) {
        grown[y * nextCols + x] = current[y * cols + x];
      }
    }
    cols = nextCols;
    rows = nextRows;
    current = grown;
    next = new Uint8Array(cols * rows);
    recount();
  };

  const clearBoard = () => {
    current.fill(0);
    generation = 0;
    population = 0;
  };

  const stamp = (cells, ox, oy) => {
    for (const [x, y] of cells) {
      const px = ((ox + x) % cols + cols) % cols;
      const py = ((oy + y) % rows + rows) % rows;
      current[py * cols + px] = 1;
    }
    recount();
  };

  const bounds = (cells) => {
    let maxX = 0;
    let maxY = 0;
    for (const [x, y] of cells) {
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    }
    return [maxX + 1, maxY + 1];
  };

  const placeCentered = (name) => {
    clearBoard();
    if (name === "soup") {
      for (let i = 0; i < current.length; i++) {
        current[i] = Math.random() < 0.28 ? 1 : 0;
      }
      recount();
      updateHud();
      draw();
      return;
    }
    const cells = PATTERNS[name];
    if (!cells) return;
    const [w, h] = bounds(cells);
    const ox = Math.floor((cols - w) / 2);
    const oy = Math.floor((rows - h) / 2);
    stamp(cells, ox, oy);
    updateHud();
    draw();
  };

  const seedDefault = () => {
    clearBoard();
    if (cols >= 48 && rows >= 22) {
      stamp(PATTERNS.gun, 4, Math.floor(rows / 2) - 6);
      stamp(PATTERNS.pulsar, cols - 18, 3);
      stamp(PATTERNS.glider, cols - 10, rows - 8);
    } else {
      placeCentered("soup");
      return;
    }
    recount();
    updateHud();
    draw();
  };

  const neighbors = (x, y) => {
    const xm = x === 0 ? cols - 1 : x - 1;
    const xp = x === cols - 1 ? 0 : x + 1;
    const ym = y === 0 ? rows - 1 : y - 1;
    const yp = y === rows - 1 ? 0 : y + 1;
    const w = cols;
    let n = 0;
    if (current[ym * w + xm]) n += 1;
    if (current[ym * w + x]) n += 1;
    if (current[ym * w + xp]) n += 1;
    if (current[y * w + xm]) n += 1;
    if (current[y * w + xp]) n += 1;
    if (current[yp * w + xm]) n += 1;
    if (current[yp * w + x]) n += 1;
    if (current[yp * w + xp]) n += 1;
    return n;
  };

  const step = () => {
    let pop = 0;
    const w = cols;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < w; x++) {
        const i = y * w + x;
        const n = neighbors(x, y);
        const alive = current[i] > 0;
        if (alive && (n === 2 || n === 3)) {
          const aged = current[i] + 1;
          next[i] = aged > 255 ? 255 : aged;
          pop += 1;
        } else if (!alive && n === 3) {
          next[i] = 1;
          pop += 1;
        } else {
          next[i] = 0;
        }
      }
    }
    const swap = current;
    current = next;
    next = swap;
    generation += 1;
    population = pop;
  };

  const draw = () => {
    const w = cols;
    ctx.fillStyle = COLORS[0];
    ctx.fillRect(0, 0, cols * cellW, rows * cellH);
    const gapX = Math.max(1, cellW * 0.12);
    const gapY = Math.max(1, cellH * 0.12);
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < w; x++) {
        const age = current[y * w + x];
        if (!age) continue;
        ctx.fillStyle = colorFor(age);
        ctx.fillRect(x * cellW + gapX, y * cellH + gapY, cellW - gapX * 2, cellH - gapY * 2);
      }
    }
  };

  const cellFromEvent = (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor(((event.clientX - rect.left) / rect.width) * cols);
    const y = Math.floor(((event.clientY - rect.top) / rect.height) * rows);
    if (x < 0 || y < 0 || x >= cols || y >= rows) return null;
    return [x, y];
  };

  const paintAt = (x, y) => {
    const i = y * cols + x;
    const wasAlive = current[i] > 0;
    if (paintMode) {
      if (wasAlive) return;
      current[i] = 1;
      population += 1;
      return;
    }
    if (!wasAlive) return;
    current[i] = 0;
    population -= 1;
  };

  const loop = (now) => {
    rafId = requestAnimationFrame(loop);
    if (!running) return;
    const interval = 1000 / Math.max(1, gensPerSec);
    if (now - lastTick < interval) return;
    lastTick = now;
    step();
    draw();
    updateHud();
  };

  const markPattern = (name) => {
    patternBtns.forEach((btn) => {
      btn.classList.toggle("is-on", btn.getAttribute("data-life-pattern") === name);
    });
  };

  toggleBtn?.addEventListener("click", () => setRunning(!running));
  stepBtn?.addEventListener("click", () => {
    setRunning(false);
    step();
    draw();
    updateHud();
  });
  clearBtn?.addEventListener("click", () => {
    setRunning(false);
    clearBoard();
    markPattern("");
    updateHud();
    draw();
  });
  speedInput?.addEventListener("input", () => {
    gensPerSec = Number(speedInput.value) || 10;
  });
  patternBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const name = btn.getAttribute("data-life-pattern");
      markPattern(name);
      placeCentered(name);
    });
  });

  canvas.addEventListener("pointerdown", (event) => {
    const cell = cellFromEvent(event);
    if (!cell) return;
    event.preventDefault();
    canvas.setPointerCapture(event.pointerId);
    painting = true;
    const [x, y] = cell;
    paintMode = current[y * cols + x] ? 0 : 1;
    paintAt(x, y);
    draw();
    updateHud();
  });
  canvas.addEventListener("pointermove", (event) => {
    if (!painting) return;
    const cell = cellFromEvent(event);
    if (!cell) return;
    paintAt(cell[0], cell[1]);
    draw();
    updateHud();
  });
  const endPaint = () => {
    painting = false;
  };
  canvas.addEventListener("pointerup", endPaint);
  canvas.addEventListener("pointercancel", endPaint);
  canvas.addEventListener("lostpointercapture", endPaint);

  document.addEventListener("keydown", (event) => {
    if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
    if (event.code === "Space") {
      event.preventDefault();
      setRunning(!running);
    }
  });

  window.addEventListener("resize", () => {
    sizeGrid();
    recount();
    updateHud();
    draw();
  });

  sizeGrid();
  seedDefault();
  markPattern(cols >= 48 ? "gun" : "soup");
  setRunning(running);
  updateHud();
  lastTick = performance.now();
  rafId = requestAnimationFrame(loop);

  window.addEventListener("pagehide", () => cancelAnimationFrame(rafId), { once: true });
});
