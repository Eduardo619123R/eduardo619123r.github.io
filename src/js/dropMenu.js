const w = window


w.addEventListener('DOMContentLoaded', () => {

    const button = document.getElementById('button-burguer-drop-nav-bar')
    const buttonCheck = document.getElementById('check-menu')
    const menu = document.querySelector('.box-nav-bar')
    const documentPage = document.querySelector('.container-page-seccions')
    const buttonHidden = document.getElementById('button-drop-nav-bar-hidden')

    // Cambia el estado del input check
    button.addEventListener('click', () => {
        // input check que valida el estado del menu
        buttonCheck.checked = !buttonCheck.checked
        // Mostrar el menu.
        watchMenu(buttonCheck.checked)
        // Obscurecer el fondo
        documentPage.style.background = 'rgba(0,0,0,0.5)'
    })

    buttonHidden.addEventListener('click', () => {
        // input check que valida el estado del menu
        buttonCheck.checked = !buttonCheck.checked
        // Mostrar el menu.
        watchMenu(buttonCheck.checked)
        // Obscurecer el fondo
        documentPage.style.background = 'transparent'
    })

    const watchMenu = (check) => {
        check ? menu.style.transform = 'translateX(0%)' : menu.style.transform = 'translateX(-100%)'
    }

})