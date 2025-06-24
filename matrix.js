const canvas = document.getElementById('dataRain');
const ctx = canvas.getContext('2d');
const fontSize = 16;
const fontFamily = 'Menlo, monospace';
const glyphs = '01\u2593\u2592\u2591';
const speed = 1.2;
const colour = '#14B8A680';
let cols, drops;
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  cols = Math.ceil(canvas.width / fontSize);
  drops = new Array(cols).fill(0);
}
window.addEventListener('resize', resize);
resize();
function draw() {
  ctx.fillStyle = 'rgba(15,23,42,0.15)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = `${fontSize}px ${fontFamily}`;
  for (let i = 0; i < cols; i++) {
    const char = glyphs[Math.floor(Math.random() * glyphs.length)];
    ctx.fillStyle = colour;
    ctx.fillText(char, i * fontSize, drops[i] * fontSize);
    drops[i] += speed;
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
  }
  requestAnimationFrame(draw);
}
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  ctx.fillStyle = 'rgba(15,23,42,0.15)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = `${fontSize}px ${fontFamily}`;
  for (let i = 0; i < cols; i++) {
    const char = glyphs[Math.floor(Math.random() * glyphs.length)];
    ctx.fillStyle = colour;
    ctx.fillText(char, i * fontSize, drops[i] * fontSize);
  }
} else {
  requestAnimationFrame(draw);
}
