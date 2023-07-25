    
    var verific = window.document.getElementById('verificador')
    verific.addEventListener('click', verificando)
    
function verificando() {
    var input = window.document.getElementById('idI')
    var sex = window.document.getElementsByName('sexo')
    var res = window.document.getElementById('res')
    var img = window.document.getElementById('pessoa')

    var data = new Date()
    var anoAtual = data.getFullYear()
    var ano = Number(input.value)
    var idade = anoAtual - ano

    var genero = ''
    res.innerHTML = `Você possui, ou ira fazer neste ano ${idade} anos!`
    if (sex[0].checked) {
    genero = 'homem'
    } else if (sex[1].checked) {
        genero = 'mulher'
    }
if (idade > 110 || ano > anoAtual) {
    window.alert('[ERRO] Insira um ano válido')
    res.innerHTML = `Ano mínimo: ${anoAtual-110}, ano máximo: ${anoAtual}`
    img.src = '#'
} else if (idade <= 12) {
    if (genero == 'homem') {
       img.src = './image/homemcrianca.jpg' 
    } else if (genero == 'mulher') {
        img.src = './image/mulhercrianca.jpg'
    }
} else if (idade >=13 && idade <= 25) {
    if (genero == 'homem') {
        img.src = './image/homemjovem.jpg' 
     } else if (genero == 'mulher') {
         img.src = './image/mulherjovem.jpg'
     }
} else if (idade >=26 && idade <= 50){
    if (genero == 'homem') {
        img.src = './image/homemadulto.jpg' 
     } else if (genero == 'mulher') {
         img.src = './image/mulheradulta.jpg'
     }
} else if (idade >= 51 && idade <=110) {
    if (genero == 'homem') {
        img.src = './image/homemidoso.jpg' 
    } else if (genero == 'mulher') {
        img.src = './image/mulheridosa.jpg'
    }
}


}