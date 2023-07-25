function gerar(){
    var valor = window.document.getElementById('valor')
    var tabuada = window.document.querySelector('select#tab')
    
    if (valor.value.length == 0 ){
        window.alert('Digite um número')
    } else {
        var val = Number(valor.value)
        tabuada.innerHTML = ''
        for(var c = 1; c <= 10; c++) {
        var tab = window.document.createElement('option') // Criar um elemento
        tab.text = `${val} x ${c} = ${val*c}` // O que ira aparecer no elemento
        tabuada.appendChild(tab) // Adicionar o elemento na tabela
    }
    }
}