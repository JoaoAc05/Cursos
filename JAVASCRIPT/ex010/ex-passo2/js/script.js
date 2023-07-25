function contar(){
    var ini = window.document.querySelector('input#txti')
    var fim = window.document.querySelector('input#txtf')
    var passo = window.document.querySelector('input#txtp')
    var res = window.document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if (i < f) {
            // Contagem Crescente
          for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`
        }  
        }else {
            // Contagem Decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        
        res.innerHTML += `\u{1F3C1}`
    }
}