var map = L.map('mapid').setView([-23.71122,-46.41437], 15);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-23.71122,-46.41437]).addTo(map)
    .bindPopup('Ribeirão Pires.')

// menu
const navMenu = document.getElementsByClassName("ul-menu")[0];
const btnMenu = document.getElementsByClassName("mobile-menu")[0];
const line1 = document.getElementsByClassName("line1")[0];
const line2 = document.getElementsByClassName("line2")[0];
const line3 = document.getElementsByClassName("line3")[0];
btnMenu.addEventListener("click", ()=>{
    navMenu.classList.toggle('active-menu')
    line2.classList.toggle('remove')
    line1.classList.toggle('rotate1')
    line3.classList.toggle('rotate3')
})


//dark
const themeSystem = localStorage.getItem('themeSystem') || 'dark'

function defineCurrentTheme(theme){
    document.documentElement.setAttribute("data-theme", theme)
}

defineCurrentTheme(themeSystem)