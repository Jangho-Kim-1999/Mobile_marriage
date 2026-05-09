/* ── Polaroid: Float + Mouse/Touch Parallax ── */
const polaroids = [...document.querySelectorAll('.polaroid')];

const configs = polaroids.map(p => ({
  rot:       parseFloat(p.dataset.rot    || 0),
  mouseSpd:  parseFloat(p.dataset.speed  || 0.3),
  amp:       parseFloat(p.dataset.amp    || 8),
  fspeed:    parseFloat(p.dataset.fspeed || 1.0),
  phase:     Math.random() * Math.PI * 2,
}));

let targetX = 0, targetY = 0;
let curX = 0, curY = 0;

document.addEventListener('mousemove', e => {
  targetX = (e.clientX / window.innerWidth  - 0.5) * 26;
  targetY = (e.clientY / window.innerHeight - 0.5) * 26;
});

document.addEventListener('touchmove', e => {
  const t = e.touches[0];
  targetX = (t.clientX / window.innerWidth  - 0.5) * 14;
  targetY = (t.clientY / window.innerHeight - 0.5) * 14;
}, { passive: true });

function animatePolaroids() {
  curX += (targetX - curX) * 0.055;
  curY += (targetY - curY) * 0.055;

  const now = Date.now() / 1000;

  polaroids.forEach((p, i) => {
    const c = configs[i];
    const floatY   = Math.sin(now * c.fspeed + c.phase) * c.amp;
    const rotDelta = curX * 0.06 * c.mouseSpd;
    const dx = curX * c.mouseSpd;
    const dy = curY * c.mouseSpd + floatY;
    p.style.transform = `rotate(${c.rot + rotDelta}deg) translate(${dx}px, ${dy}px)`;
  });

  requestAnimationFrame(animatePolaroids);
}

animatePolaroids();

/* ── Countdown ── */
const weddingDate = new Date('2026-06-14T13:00:00');

function tick() {
  const diff = weddingDate - new Date();
  if (diff <= 0) return;

  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000)  / 60000);
  const s = Math.floor((diff % 60000)    / 1000);

  document.getElementById('days').textContent    = String(d).padStart(2, '0');
  document.getElementById('hours').textContent   = String(h).padStart(2, '0');
  document.getElementById('minutes').textContent = String(m).padStart(2, '0');
  document.getElementById('seconds').textContent = String(s).padStart(2, '0');
}

tick();
setInterval(tick, 1000);

/* ── Scroll Reveal ── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal, .reveal-card').forEach(el => revealObs.observe(el));