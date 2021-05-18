
// a) Responda como comentário no seu código: como fazemos para acessar 
// os parâmetros passados na linha de comando para o Node?

//  digitar no terminal:
// node arquivo.js seguido dos parâmetros


// b) Crie um programa que receba seu nome e sua idade. 
// Após receber estes valores, imprima no console uma mensagem que siga
//  a seguinte estrutura:
// "Olá, (Nome)! Você tem (sua idade) anos."

const nome = process.argv[2]
const idade = process.argv[3]

const idademaissete = Number(idade) + 7

console.log(`Olá, ${nome}! Você tem ${idade} anos.`)


console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idademaissete}`)
