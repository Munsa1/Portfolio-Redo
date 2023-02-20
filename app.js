const menuBars = document.querySelector('.fa-bars');
const overlay = document.querySelector('.overlay');
const myLinks = document.querySelector('.my-links');
const closeBar = document.querySelector('.fa-xmark');
// const link = document.querySelectorAll('.link');

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

let contactInfo = {
  Name: "Munsa Mibenge",
  Email: "munsamibenge65@gmail.com",
  Message: "Hi!, I would like to get in touch with you concerning some work"
}

console.log(contactInfo);

localStorage.setItem("contact-info", JSON.stringify(contactInfo));