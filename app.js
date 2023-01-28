const menuBars = document.querySelector('.fa-bars');
const overlay = document.querySelector('.overlay');
const myLinks = document.querySelector('.my-links');
const closeBar = document.querySelector('.fa-xmark');
const link = document.querySelectorAll('.link');

menuBars.addEventListener('click', () => {
  overlay.classList.remove('hidden');
  myLinks.classList.remove('hidden');
});

closeBar.addEventListener('click', () => {
  overlay.classList.add('hidden');
  myLinks.classList.add('hidden');
});


// link.addEventListener('click', () => {
//     overlay.classList.add('hidden');
//     myLinks.classList.add('hidden');
// });