
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    
    if (hora >= 0 && hora < 12) {
        //BD
        img.src = './images/manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        //BT
        img.src = './images/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        //BN
        img.src = './images/noite.jpg'
        document.body.style.background = '#515154'
    }
}
