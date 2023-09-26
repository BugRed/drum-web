const listaTeclas = document.querySelectorAll('.tecla')
// const sound = document.querySelector('#som_tecla_pom')


function playSound(idSound) {
    const sound = document.querySelector(idSound)

    if (sound && sound.localName === 'audio') {
        sound.play()
    } else {
        alert(`Não há elementos com o seletor chamado: ${idSound}`)
    }
}

listaTeclas.forEach((element) => {
    element.onclick = () => {
        playSound(`#som_${element.classList[1]}`)

        //eventos de teclado
        element.onkeydown = (event) => {
            if (event.key == 'Enter' || event.key == ' ') {
                element.classList.add('ativa')
                console.log(event.key)
            }
        }
        element.onkeyup = () => {
            element.classList.remove('ativa')
        }


    }
})
