const backdrop = document.getElementById('backdrop');
const menu = document.getElementById('menu');
const bar = document.getElementById('bar');
const x = document.getElementById('x');
const menuLinks = document.querySelectorAll('menu li a');

function open() {
  menu.className = 'open';
  bar.style = 'display:none';
  x.style = 'display:block';
  backdrop.className = 'active';
}
function close() {
  menu.className = '';
  bar.style = 'display:block';
  x.style = 'display:none';
  backdrop.className = '';
}

bar.addEventListener('click', open);
x.addEventListener('click', close);
backdrop.addEventListener('click', (e) => {
  if (!menu.contains(e.target)) {
    close();
  }
});

menuLinks.forEach((link) => {
  link.addEventListener('click', close);
});
