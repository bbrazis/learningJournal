// mobile menu toggle //
const navMenuBtn = document.getElementById('nav-menu_btn')

navMenuBtn.addEventListener('click', toggleMenu)

function toggleMenu(){
    navMenuBtn.classList.toggle('menu-toggled')
    document.getElementById('nav-menu').classList.toggle('menu-open')
}