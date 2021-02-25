

//**Exercícios de interpretação de código**

//EXERCÍCIO 1
/*
O código deste exercício recebe um dado do usuário pelo prompt e armazena na const respostaDoUsuario
Na sequencia pega esse valor e transforma em number, que armazena a referência na const numero

O teste basicamente busca saver se o resto da divisão do número - devidamente convertida pra number - 
inserido pelo usuário é PAR, pois se for PAR, terá resto zero, sendo igual em tipo e valor
ao número 0 que está no if. E se tiver resto 1, será IMPAR, e imprimirá no CONSOLE que não passou no teste. 

*/


//EXERCÍCIO 2
/*
a. O código acima, retorna ao usuário o valor da fruta que ele digita no prompt.
b. 2.25
c. 5  // pois vai pegar o valor seguinte - e último - que é o default
*/


//EXERCÍCIO 3
/*
a. recebendo um valor digitado pelo usuário e convertendo-o para o tipo number.
b. "Esse número passou no teste". Se fosse -10, apenas um erro.
c. Sim. Justamente porque a let mensagem foi criada dentro do escopo do IF, não estando 
disponível no escopo global onde ela foi passada como argumento do console.log.
O console.log com a mensagem precisaria estar dentro do if, pare receber o valor da variável
que foi declarada neste mesmo escopo.


*/

//**Exercícios de escrita de código**

//4.
let userAge = Number(prompt('Sua idade'))

if(userAge >= 18){
    console.log('Você pode dirigir')
} else {
    console.log('você não pode dirigir')
}

//5.
let dayTurn = prompt('Em que turno você estuda. Digite: M (matutino) ou V (Vespertino) ou N (Noturno)')

if(dayTurn === 'm'){
    console.log('Bom dia!')
} else if (dayTurn === 'v') {
    console.log('Boa tarde!')
} else if (dayTurn === 'n') {
    console.log('Boa noite!')
} else {
    console.log('digite M, V ou N')
}

//6.
let dayTurn2 = prompt('2: Em que turno você estuda. Digite: M (matutino) ou V (Vespertino) ou N (Noturno)')

switch(dayTurn2){
    case 'm':
        console.log('Bom dia!')
        break
    case 'v':
        console.log('Boa tarde!')
        break
    case 'n':
        console.log('Boa noite!')
        break
    default:
        console.log('digite M, V ou N')
}

//7.
let movieGenre = prompt('Qual gênero do filme vc quer? ')
let ticketPrice = Number(prompt('Qual o preço do ingresso?'))

if(movieGenre === 'fantasia' ){
    if(ticketPrice < 15) {
        console.log('Bom filme')
    } else { console.log('muito caro')}
} else {
    console.log('Escolha outro filme')
}