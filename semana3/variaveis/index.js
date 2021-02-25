//INTERPRETAÇÃO

//1. 
//10
//10,5

//2.
//20, 10, 10

let nameUser
let idade
console.log(typeof nameUser, typeof idade)

//como não houve atribuição de valor, o JS atribuiu undefined por padrão.

nameUser = prompt('Digite seu nome')
idade = prompt('Digite sua idade')

console.log(typeof nameUser, typeof idade)

//notei que o typeof de idade é uma string assim como o do nome, mesmo recebendo números.



// Exercícios de escrita de código
//1
console.log('Olá ', nameUser ,', você tem ', idade ,' anos.')
//2
let question1 = prompt('Qual o seu Labenúmero?')
let question2 = prompt('Qual o sentido da vida?')
let question3 = prompt('O que é o universo?')
let question4 = prompt('Que horas eram ontem nesse momento?')
let question5 = prompt('Quem matou Odete Roitman?')

console.log('1.qual o seu Labenúmero?')
console.log('Resposta: ', question1)

console.log('2.Qual o sentido da vida?')
console.log('Resposta: ', question2)

console.log('3.O que é o universo?')
console.log('Resposta: ', question3)

console.log('4.Que horas eram ontem nesse momento?')
console.log('Resposta: ', question4)

console.log('5.Quem matou Odete Roitman?')
console.log('Resposta: ', question5)

//3

//a
let favoriteFood = ['frango xadrez', 'file de frango à milanesa', 'Yaksoba de frango', 'frango compactado', 'pizza de peito de peru']

//b
console.log(favoriteFood)
console.log("Essas são as minhas comidas preferidas: ")
console.log(favoriteFood[0])
console.log(favoriteFood[1])
console.log(favoriteFood[2])
console.log(favoriteFood[3])
console.log(favoriteFood[4])

//c
let userFavoriteFood = prompt('Qual a sua comida favorita?')
favoriteFood[1] = userFavoriteFood
console.log("Essas são as minhas comidas preferidas: ")
console.log(favoriteFood[0])
console.log(favoriteFood[1])
console.log(favoriteFood[2])
console.log(favoriteFood[3])
console.log(favoriteFood[4])

//4
let booleanQuestions = ['Você está vivo?', 'Está acordado?', 'Tem mais de 18 anos?']

let answers = ['true', 'true', 'true']

console.log(booleanQuestions[0], answers[0])
console.log(booleanQuestions[1], answers[1])
console.log(booleanQuestions[2], answers[2])

// fim dos exercícios