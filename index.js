let buttonShow = document.querySelector('.nav-menu-button');
let buttonHide = document.querySelector('.hide');
let nav_menu = document.querySelector('.nav-menu');

buttonShow.addEventListener('click',()=>{
    nav_menu.style.left = '0px'
})

buttonHide.addEventListener('click', ()=>{
    nav_menu.style.left = '-340px'
})

