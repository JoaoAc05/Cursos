var agora = new Date()
var hora = agora.getHours()
var body = window.document.body
var msg = document.getElementById('msg')
var image = document.querySelector('img#horario')
msg.innerHTML = `Agora são <strong>${hora}</strong> horas!`

if (hora < 12) {
body.style.backgroundColor = '#f7d48a'
msg.innerHTML += '<p>Bom Dia!</p>'
image.src = './images/manha.jpg'
} else if (hora < 18) {
    body.style.backgroundColor = '#F48D45'
    msg.innerHTML += '<p>Boa Tarde!</p>'
    image.src = './images/tarde.jpg'
} else {
    body.style.backgroundColor = '#002658'
    msg.innerHTML += '<p>Boa Noite!</p>'
    image.src = './images/noite.jpg'
}