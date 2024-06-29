const hamburgerMenu = document.querySelector('#hamburger-menu');
const closeBtn = document.querySelector('#close-btn');
const navbar = document.getElementById('navbar')

hamburgerMenu.addEventListener('click', ()=>{
    navbar.style.display ='block'
})

closeBtn.addEventListener('click', ()=>{
    navbar.style.display = 'none'
})