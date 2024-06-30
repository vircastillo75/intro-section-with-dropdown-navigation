
const hamburgerMenu = document.querySelector('#hamburger-menu');
const closeBtn = document.querySelector('#close-btn');
const navbar = document.getElementById('navbar')

hamburgerMenu.addEventListener('click', () => {
    navbar.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    const screenSize = window.innerWidth;
    if(screenSize <= 768) {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'block';
    }
})

const featuresBtn = document.querySelector('#features-btn')
const featuresUl = document.querySelector('#features-ul')
const featuresBtnArrow = document.querySelector('#features-btn-arrow')

featuresBtn.addEventListener('click', ()=>{
  featuresUl.style.display = (featuresUl.style.display === 'block') ? 'none' : 'block';
  featuresBtnArrow.style.transition = 'transform 0.3s ease'
  featuresBtnArrow.style.transform = (featuresBtnArrow.style.transform === 'rotate(180deg)') ? 'rotate(0deg)' : 'rotate(180deg)';
})

const companyBtn = document.querySelector('#company-btn')
const companyUl = document.querySelector('#company-ul')
const companyBtnArrow = document.querySelector('#company-btn-arrow')
companyBtn.addEventListener('click', ()=>{
  companyUl.style.display = (companyUl.style.display === 'block') ? 'none' : 'block';
  companyBtnArrow.style.transition = 'transform 0.3s ease'
  companyBtnArrow.style.transform = (companyBtnArrow.style.transform === 'rotate(180deg)') ? 'rotate(0deg)' : 'rotate(180deg)';
})

