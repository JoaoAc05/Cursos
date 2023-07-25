// Vaariável composta (VETOR/ARRAY)

let num = [5, 8, 2, 9, 3]
console.log(`O vetor é [ ${num} ]`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor è: ${num[0]}`)
num.sort() //Organize em forma crescente
console.log(`O vetor organizado em crescente fica: [ ${num} ]`)
num.push(1) //Adiciona o número 1 na ultima posição
console.log(`Adicionando 1 na ultima posição: [ ${num} ]`)
num[0] = 1 //Substitui o valor da primeira posição
console.log(`Substituindo o valor da primeira posição por 1: [ ${num} ]`)
console.log(`O valor 9 se encontra no índice: ${num.indexOf(9)}`) 
// num.indexOf() retorna o índice em que o valor entre parenteses se encontra, caso não houver será retornado -1

/*
BUSCA DE VALORES

let pos = num.indexOf(VALOR)
if (pos == -1){
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição: ${pos}`)
}
*/

/*
ATRIBUIÇÃO DE VALORES

num.push(VALOR)
adiciona o valor que esta entre parenteses após a ultima posição
*/

/*
SUBSTITUIÇÃO DE VALORES

num[POSIÇÃO] = VALOR
A posição do vetor irá receber o valor
*/

/*
ORGANIZAR EM FORMA CRESCENTE

num.sort()
*/