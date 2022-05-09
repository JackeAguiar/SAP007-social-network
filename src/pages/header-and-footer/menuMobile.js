const btnMobile = document.getElementById('btnMobile');

function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

/* const btnMenu = document.getElementById("btnMobile")

if(window.location.hash == "#feed"){
    btnMenu.classList.remove("out")
} */
