

//**Exercícios de interpretação de código**

/*
EXERCÍCIO 1
a.  10
    50
b. Não apareceria nada no console.

EXERCÍCIO 2
a.  Darvas
    Caio
b.  Amanda
    Caio

EXERCÍCIO 3
Resumindo: A função multiplica números pares.
NOVO NOME: multiplicarPares

*/


//**Exercícios de escrita de código**

//EXERCÍCIO 4

//a
function apresentacao() {
    console.log('Eu sou Marcos, tenho 33 anos, moro em Belo Horizonte e sou estudante')
}

apresentacao()

//b
let apresentacaoMelhor = function (nome, idade, cidade, seEstuda) {
    if ( seEstuda === 'não') {
        seEstuda = 'não'
    } else {
        seEstuda =''
    }
    console.log('Eu sou '+nome+ ', tenho ' +idade+ ' anos, moro em ' +cidade+' e '+seEstuda+' sou estudante')
}

apresentacaoMelhor('Carlos', 34, 'BH', 'sim')



//EXERCÍCIO 5

//a.

function somaDoisNumeros(num1, num2) {
    return num1 + num2
}
console.log(somaDoisNumeros(10, 20))

//b.
let testaQualEMaior = (num1, num2) => {
    return (num1 >= num2)
}
console.log(testaQualEMaior(30, 20))

//c.
let recebeMensagem = mensagem =>{
    for(i = 0; i < 10; i++){
        console.log(mensagem)
    }
}
// recebeMensagem(prompt('Mensagem a se replicar X10'))
//d.


//EXERCÍCIO 6

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22,]

//a.
let quantosNumNoArray = (array) => {
    console.log('Tem '+ array.length + ' itens nesse array.')
}
quantosNumNoArray(array)

//b
let sePar = num => {
    return num % 2 === 0 
}
console.log(sePar(9))

//c
let quantosParesNoArray = array =>{
    let pares = 0
    for( item of array) {
        if( item % 2 === 0) {
            pares++
        }
    }
    console.log(pares)
}
quantosParesNoArray(array)

//d
let quantosParesNoArrayMelhor = array =>{
    let pares = 0
    for(item of array){
        
        if(sePar(item)) {
            pares++
        }
    }
    console.log(pares)
}
quantosParesNoArrayMelhor(array)