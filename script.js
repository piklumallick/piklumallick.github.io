// Color arrays for body, header, nav, footer
const colors_1 = ["#f8fafc", "#f6f7f9", "#f3faf6", "#fefaf7", "#f7f7fc", "#f4fcfc"];
const colors_2 = [ "#3b654d", "#465fa6", "#0f5942", "#a2c67b", "#43547a", "#43666b", "#435d47"];
const colors_3 = ['#2a2d34'];
const colors_4 = ['#c88af1d3'];

function changeColors() {
  const body = document.body;
  const main = document.querySelector('main');
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');
  const footer = document.querySelector('footer');
  // Defensive: Don't run if elements not found
  if (!body || !header || !nav || !footer) return;

  setInterval(() => {
    main.style.backgroundColor = colors_1[Math.floor(Math.random() * colors_1.length)];
  }, 12000);

  setInterval(() => {
    header.style.backgroundColor = colors_2[Math.floor(Math.random() * colors_2.length)];
  }, 15000);

  setInterval(() => {
    nav.style.backgroundColor = colors_3[Math.floor(Math.random() * colors_3.length)];
  }, 12000);

  setInterval(() => {
    footer.style.backgroundColor = colors_4[Math.floor(Math.random() * colors_4.length)];
  }, 15000);
}

// Run color script only if JS enabled
document.addEventListener('DOMContentLoaded', changeColors);