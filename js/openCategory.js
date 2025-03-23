const web = document.querySelector('.estaticoCategory');
const mobile = document.querySelector('.mobileCategory');
const bots = document.querySelector('.botsCategory');

const btnCategory1 = document.querySelector('.category1');
const btnCategory2 = document.querySelector('.category2');
const btnCategory3 = document.querySelector('.category3');

const abrirMenu = document.querySelector('.btnOpenMenuMobile');
const menu = document.querySelector('.menu')

btnCategory1.addEventListener("click", function() {
    mobile.style.display = 'none'
    web.style.display = 'block'
    bots.style.display = 'none'
});

btnCategory2.addEventListener("click", function() {
    mobile.style.display = 'block'
    web.style.display = 'none'
    bots.style.display = 'none'
});

btnCategory3.addEventListener("click", function() {
    mobile.style.display = 'none'
    web.style.display = 'none'
    bots.style.display = 'block'
});

abrirMenu.addEventListener('click', ()=>{
    menu.classList.toggle('abrirH')
})
menu.addEventListener('click', ()=>{
    menu.classList.remove('abrirH')
})