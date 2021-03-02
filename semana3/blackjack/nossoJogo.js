/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log('Bem vindo ao Jogo de BlackJack!')
// const comecaria = confirm

if(confirm('Quer iniciar uma nova rodada?')) {
   
   let userCarta1 = comprarCarta()
   let userCarta2 = comprarCarta()
   let pcCarta1 = comprarCarta()
   let pcCarta2 = comprarCarta()

   let userPontuacao = userCarta1.valor + userCarta2.valor
   let pcPontuacao = pcCarta1.valor + pcCarta2.valor


console.log("Usuário - cartas: " + userCarta1.texto + " (cujo valor é "  + userCarta1.valor + ") e " + 
         userCarta2.texto + " (cujo valor é: " + userCarta2.valor + ") totalizando : " +  userPontuacao + " pontos!")
console.log("Computador - cartas: " + pcCarta1.texto +  " (cujo valor é " + pcCarta1.valor + ") e " + 
         pcCarta2.texto + " (cujo valor é: " + pcCarta2.valor + ") totalizando : " +  pcPontuacao + " pontos!")


if( userPontuacao >  pcPontuacao) {
   console.log('O usuário ganhou!')
} else if ( userPontuacao <  pcPontuacao ) {
   console.log('O computador ganhou!')
} else {
   console.log('Empate!')
}

} else {
   console.log('o jogo acabou!')
}