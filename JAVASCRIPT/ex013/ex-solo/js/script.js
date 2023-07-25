let adicionar = window.document.querySelector('input#ad')
let finalizar = window.document.querySelector('input#fim')
adicionar.addEventListener('click', adiciona)
finalizar.addEventListener('click', finaliza)

let numeros = []
let contador = 0
let res = window.document.querySelector('div#res')

function adiciona() {
    let input = window.document.querySelector('input#valor')
    
   
    if (input.value.length == 0 || Number(input.value) > 100 || Number(input.value) < 1) {
        window.alert('[ERRO] Por favor, adicione um valor válido')
    } else {
        let valor = Number(input.value)
        if (numeros.indexOf(valor) != -1) {
            window.alert(`O valor ${valor} já foi adicionado!`)
        } else {
            let tabela = window.document.querySelector('select#tabela')
            numeros.push(valor)

            //Criando as opções que serão exibidas
            let item = document.createElement('option')
            item.text = `Valor ${valor} adicionado`
            tabela.appendChild(item)
            contador++
            res.innerHTML = ""
        }
    }
}

function finaliza() {
    let tabela = window.document.querySelector('select#tabela')
    if ( numeros == 0){
        window.alert('Adicione algum valor antes')
    } else {
        numeros.sort()
        let menorNum = numeros[0]
        let maiorNum = 0
        let soma = 0
        for(let c = 0; c < numeros.length; c++){
            if (maiorNum < numeros[c]) {
                maiorNum = numeros[c]
            }
            soma += numeros[c]
        }
        let media = soma/contador

        res.innerHTML = `<p>A quantidade de números exibidos foi :${contador}</p>`
        res.innerHTML += `<p>O maior número exibido foi: ${maiorNum}</p>`
        res.innerHTML += `<p>O menor número exibido foi: ${menorNum}</p>`
        res.innerHTML += `<p>A soma entre todos é: ${soma}</p>`
        res.innerHTML += `<p>A media de todos os números é ${media}</p>` 
    }
}