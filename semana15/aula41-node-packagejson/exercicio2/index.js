// Exercício 2
/* Crie uma aplicação Node que recebe uma string representando uma 
operação matemática e dois valores numéricos. 
O retorno deverá ser o resultado da operação selecionada utilizando 
os 2 valores fornecidos
*/
// console.log(`Insira npm run start value1 value2 operação(add/sub/mult/div)`)
const operacao = process.argv[2]
const valor1 = Number(process.argv[3])
const valor2 = Number(process.argv[4])
let resultado = 0

switch (operacao) {
    case "add":
        resultado = Number(valor1) + Number(valor2)
        break
    case "sub":
        resultado = Number(valor1) - Number(valor2)
        break
    case "mult":
        resultado = Number(valor1) * Number(valor2)
        break
    case "div":
        resultado = Number(valor1) / Number(valor2)
        break
    default:
        console.log(`Insira npm run start value1 value2 operação(add/sub/mult/div)`)
}

console.log(`*****O resultado é:  ---->>> ${Number(resultado)} *****`)