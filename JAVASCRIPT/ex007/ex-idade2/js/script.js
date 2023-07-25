function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifiquei os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 15) {
                //Crianca
                img.setAttribute('src', './image/homemcrianca.jpg')
            }else if (idade >=15 && idade <= 25) {
                //Jovem
                img.setAttribute('src', './image/homemjovem.jpg')
            } else if (idade > 25 && idade < 50) {
                //adulto
                img.setAttribute('src', './image/homemadulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', './image/homemidoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 15) {
                //Crianca
                img.setAttribute('src', './image/mulhercrianca.jpg')
            }else if (idade >=15 && idade <= 25) {
                //Jovem
                img.setAttribute('src', './image/mulherjovem.jpg')
            } else if (idade > 25 && idade < 50) {
                //adulto
                img.setAttribute('src', './image/mulheradulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', './image/mulheridosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>${genero} com ${idade} anos </p>`
        res.appendChild(img)
    }
}