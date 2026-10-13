const COLORS = [
  ['#f48fb1', '#fce4ec'],
  ['#ffb74d', '#fff3e0'],
  ['#ef5350', '#ffebee'],
  ['#ffd54f', '#fffde7'],
  ['#f06292', '#fff0f5'],
  ['#fff8e1', '#ffe0b2'],
];

const rnd = (a, b) => a + Math.random() * (b - a);

function flower(size) {
  const c = COLORS[Math.floor(Math.random() * COLORS.length)];
  let petals = '';
  for (let i = 0; i < 5; i++) {
    petals += `<ellipse cx="12" cy="6.5" rx="3.6" ry="5.6" fill="${c[0]}" transform="rotate(${i * 72} 12 12)"/>`;
  }
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', size);
  svg.setAttribute('height', size);
  svg.innerHTML = `${petals}<circle cx="12" cy="12" r="3" fill="#f5b83d"/><circle cx="12" cy="12" r="1.3" fill="${c[1]}"/>`;
  return svg;
}

/** Flowers burst upward from (ox, oy) then fall. */
export function burst(layer, ox, oy) {
  if (!layer) return;
  const W = window.innerWidth;
  const H = window.innerHeight;
  for (let i = 0; i < 34; i++) {
    const f = flower(rnd(16, 34));
    layer.appendChild(f);
    const ang = rnd(-Math.PI * 0.95, -Math.PI * 0.05);
    const dist = rnd(90, Math.min(W, H) * 0.55);
    const dx = Math.cos(ang) * dist;
    const dy = Math.sin(ang) * dist;
    const rot = rnd(-360, 360);
    const a = f.animate(
      [
        { transform: `translate(${ox - 12}px,${oy - 12}px) scale(.2) rotate(0deg)`, opacity: 1 },
        { transform: `translate(${ox + dx}px,${oy + dy}px) scale(1) rotate(${rot / 2}deg)`, opacity: 1, offset: 0.35 },
        { transform: `translate(${ox + dx + rnd(-60, 60)}px,${H + 40}px) scale(.9) rotate(${rot}deg)`, opacity: 0.9 },
      ],
      { duration: rnd(2400, 3800), easing: 'cubic-bezier(.2,.6,.4,1)', fill: 'forwards' }
    );
    a.onfinish = () => f.remove();
  }
}

/** Gentle flower rain from the top of the screen. */
export function rain(layer, count, span) {
  if (!layer) return;
  const W = window.innerWidth;
  const H = window.innerHeight;
  for (let i = 0; i < count; i++) {
    const f = flower(rnd(14, 28));
    layer.appendChild(f);
    const x = rnd(-10, W);
    const sway = rnd(-70, 70);
    const rot = rnd(-540, 540);
    const a = f.animate(
      [
        { transform: `translate(${x}px,-40px) rotate(0deg)`, opacity: 0 },
        { transform: `translate(${x + sway * 0.3}px,${H * 0.1}px) rotate(${rot * 0.1}deg)`, opacity: 1, offset: 0.08 },
        { transform: `translate(${x + sway}px,${H + 40}px) rotate(${rot}deg)`, opacity: 0.85 },
      ],
      { duration: rnd(4500, 7500), delay: rnd(0, span), easing: 'linear', fill: 'both' }
    );
    a.onfinish = () => f.remove();
  }
}
