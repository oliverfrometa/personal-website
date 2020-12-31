let menuToggle = document.querySelector('.menu-toggle');
let menuClose = document.querySelector('.menu-close');
let menu = document.querySelector('.menu');
let navLinks = Array.from(document.querySelectorAll('.nav-link'));
console.log(navLinks)

menuToggle.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);

function openMenu(){
  menu.classList.add('active');

  navLinks.forEach((link, idx)=>{
    setTimeout(()=>{
      link.classList.add('active');
    }, idx * 100)
  })
}
