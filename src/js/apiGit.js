const API = 'https://api.github.com/users/Eduardo619123R'

w.addEventListener('DOMContentLoaded', () => {

    const home = document.querySelector('.box-content-home')

    const getIMG = async () => {
        await fetch(API).then(response => response.json()).then(data => {

            const user = data.login

            // Carga la imagen del usuario
            home.innerHTML += `<img src="${data.avatar_url}" class="avatar-github" />`
            home.innerHTML += `<h2 class="name-user" >${user}</h2>`

            // Agregale su animacion
            const name = document.querySelector('.name-user')
            name.style.width = `${user.length - 1}ch`
            name.style.animation = `typing 2s steps(${user.length}), blink 0.5s infinite step-end alternate`
        })
    }



    getIMG()

})