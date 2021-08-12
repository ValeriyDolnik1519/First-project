//filter
const filterBox = document.querySelectorAll('.box');

document.querySelector('nav').addEventListener('click', event => {
    if (event.target.tagName !== 'LI') return false;

    let filterClass = event.target.dataset['f'];

    filterBox.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
        }
    });
});

//slider
const slider = document.querySelector('.slider');

const indicatorParent = document.querySelector('.control ul'); 
const indicators = document.querySelectorAll('.control li');
index = 0;

indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    document.querySelector('.control .selected').classList.remove('selected');
    indicator.classList.add('selected');
    slider.style.transform = 'translateX(' + (i) * -33.333333 + '%)';  
    index = i;    
  });
});

//menu
const iconMenu = document.querySelector('.header-menu__icon');
const menuBody = document.querySelector('.nav');
if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    });
}

//scroll
function scrollTo(elem) {
    window.scroll({
        left: 0,
        top: elem.offsetTop,
        behavior: 'smooth',
    })
}
const aFirst = document.querySelector('#linkFirst');
const thingFirst = document.querySelector('#filter');
    
aFirst.addEventListener('click', () => {
    scrollTo(thingFirst);
    document.body.classList.remove('lock');
    iconMenu.classList.remove('active');
    menuBody.classList.remove('active');
})

const aSecond = document.querySelector('#linkSecond');
const thingSecond = document.querySelector('#about');

aSecond.addEventListener('click', () => {
    scrollTo(thingSecond);
    document.body.classList.remove('lock');
    iconMenu.classList.remove('active');
    menuBody.classList.remove('active');
})

const aThird = document.querySelector('#linkThird');
const thingThird = document.querySelector('#read');  

aThird.addEventListener('click', () => {
    scrollTo(thingThird);
    document.body.classList.remove('lock');
    iconMenu.classList.remove('active');
    menuBody.classList.remove('active');
})

