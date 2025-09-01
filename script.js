const TYPING_TEXT = "Turning Code into Creativity, Ideas into Impact 🚀";
let idx = 0;
function typeEffect() {
  const el = document.getElementById('typing');
  if(!el) return;
  if (idx < TYPING_TEXT.length) {
    el.innerHTML += TYPING_TEXT.charAt(idx);
    idx++;
    setTimeout(typeEffect, 60);
  } else {
    setTimeout(()=>{ el.style.borderRight='0'; }, 800);
  }
}
window.addEventListener('DOMContentLoaded', () => {
  typeEffect();
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('show'); });
  }, {threshold: 0.12});
  reveals.forEach(r => obs.observe(r));
});