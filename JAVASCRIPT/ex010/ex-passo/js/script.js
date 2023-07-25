
function clicou() {
    var ini = Number(window.document.getElementById('start').value)
    var fim = Number(window.document.getElementById('end').value)
    var salto = Number(window.document.getElementById('steps').value)
    var res = window.document.querySelector('div#res')
    if(salto < 1 || salto == 0){
        window.alert('O valor do salto é invalido!')
    } else {
        res.innerHTML = '<p>Contando: </p> <br>'

        if (ini < fim) {
           for(ini; ini <= fim; ini += salto){
            res.innerHTML += `${ini} &rightarrow;`
        } 
        } else {
            for (ini; ini >= fim; ini -= salto) {
                res.innerHTML = `${ini} &rightarrow;`
            }
        }
        
        res.innerHTML += '&checkmark;'
    }

    
}