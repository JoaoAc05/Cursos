function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.querySelector('select#seltab')
    if(num.value.lenght == 0){
        window.alert('Por favor digite um número!')
    }else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.setAttribute('value', `tab${c}`)
            tab.appendChild(item)
            c++
        }
    }
}