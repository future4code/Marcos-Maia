
// **Exercícios de interpretação de código**

/*

EXERCÍCIO 1.
O código é contém um laço que vai iterando o valor de i, que começa de zero, 
até que elenão seja menor que 5, quando ele sai do laço, e vai para o console.log abaixo.
Enquanto o valor é menor que 5, ele incrementa o valor da let valor que inicia com zero, 
e é incrementada com +1 a cada iteração do laço.
Resumindo: let valor recebe o que ela tem mais o valor do contador "i" que vai sendo incrementado.

No fim, o valor de "valor" assume : 5

*/

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

/*

EXERCÍCIO 2.
a. 
    19
    20
    21
    23
    25
    27
    30

b.
Não. O ideal é usar um for, por exemplo. Poderia usar o lista.lenth-1 em cada iteração.
Mas depende do que se pretende quando se diz "acessar"

*/



const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}



/*
DESAFIO 1 (Está antes dos Exercícios de escrita de código)

0
00
000
0000

*/



//**Exercícios de escrita de código**

/*
EXERCÍCIO 3.
*/

//a.
let arrayOriginal = [50, 60, 70, 80, 90, 100]

for(i = 0; i < arrayOriginal.length; i++ ) {
    console.log(arrayOriginal[i])
}

//b.
for(let numero of arrayOriginal) {
    console.log(numero / 10)
}

//c.
let novoArray = []
for(let numero of arrayOriginal) {
    novoArray.push(numero)
}
console.log(novoArray)

//d.
for(i = 0; i < arrayOriginal.length; i++ ) {
    console.log('O elemento do índex '+ i + ' é: ' + arrayOriginal[i])
}

//e.
let maiorNumero = 70
let menorNumero = 70

for(i = 0; i < arrayOriginal.length; i++ ) {
    if(arrayOriginal[i] > arrayOriginal[i+1]) {
        maiorNumero = arrayOriginal[i]
    } 
    if(arrayOriginal[arrayOriginal.length-1] > arrayOriginal[arrayOriginal.length-2]) {
        maiorNumero = arrayOriginal[i]
    } 
    if (menorNumero < arrayOriginal[i]) {
        menorNumero = menorNumero
    } 
    if (menorNumero > arrayOriginal[i]) {
        menorNumero = arrayOriginal[i]
    }

}
console.log('O maior número é: '+ maiorNumero + ' e o menor número é: '+ menorNumero )
