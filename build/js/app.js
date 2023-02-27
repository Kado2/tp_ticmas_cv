document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});
function iniciarApp() {
    navegacionFija();
    navMenu();
};

function navegacionFija() {
    const barra = document.querySelector('.contenedor-barra');
    const presentacion = document.querySelector ('.header_presentacion-pic');
    window.addEventListener('scroll', function () {
        if (presentacion.getBoundingClientRect().top < 0 ){
            barra.classList.add('fijo');
        } else {
            barra.classList.remove('fijo');
        }
    });
}
function navMenu() {
    const icono = document.getElementById('nav-menu_icon')
    const menu = document.getElementById('nav-menu_list');
    icono.addEventListener('click', function () {
        if (icono.classList.contains('activo')) {
            menu.classList.add('ocultar');
            icono.classList.remove('activo');
        } else {
            menu.classList.remove('ocultar');
            icono.classList.add('activo');
        }
    })
}