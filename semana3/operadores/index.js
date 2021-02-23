//1. 
//a. falso
//b. falso
//c. true
//d. boolean

//2.
//a. undefined
//b. null
//c.11
//d. 3
//e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//f.9

// **Exercícios de escrita de código**
//1.
let userAge = Number(prompt('Digite sua idade'))
let friendAge = Number(prompt('Digite a idade di melhor amigui'))
let isfriendolder = userAge > friendAge

console.log('Sua idade é maior que a de seu amigo?', isfriendolder)

//2.
let userNumberEven = prompt('Insira um número par')
console.log(userNumberEven % 2)
// Sempre resulta em 1

//3.
let listaDeTarefas = []
let tarefa1 = prompt('o que você fará hoje primeiro?')
listaDeTarefas.push(tarefa1)
let tarefa2 = prompt('e depois?')
listaDeTarefas.push(tarefa2)
let tarefa3 = prompt('e por último?')
listaDeTarefas.push(tarefa3)
console.log(listaDeTarefas)
let excluaTarefa = prompt('Exclua uma das terafes: 0, 1 ou 2')
listaDeTarefas.splice(excluaTarefa,1)
console.log(listaDeTarefas)

//4.
let userName = prompt('Seu nome')
let userMail = prompt('seu email')

console.log('O e-mail', userMail,'foi cadastrado com sucesso. Seja bem-vindi', userName)