//Exercício 1
let array = [0, 8, 23, 16, 10, 15, 41, 12, 13] 
function inverteArray(array) {
  // implemente sua lógica aqui
   return array.reverse()
}

//Exercício 2
array = [1, 2, 3, 4, 5, 6]
function retornaNumerosParesElevadosADois (array) {
   // implemente sua lógica aqui

   //ESTA DEU CERTO. CRIAR O NOVO ARRAY E RETORNÁ-LO
   novoArray =[]
   array.forEach(element => {
      if(element % 2 === 0){
         novoArray.push(element ** 2)// console.log(element * element)
      }
      return false
   });
   return novoArray

   // const paresAoQuadrados = array.filter((element) => {
   //    if(element % 2 === 0){
   //       return element * 10
   //    }
   //    return
   // })
   // console.log(paresAoQuadrados)

   // let paresAoQuadrados = array.filter( element => {
   //    if(element % 2 === 0){
   //       return element * element
   //    }
   // })
   // return paresAoQuadrados
   // // console.log(paresAoQuadrados)
}


// if(element % 2 === 0) {
//    return element**
// }


//Exercício 3
function retornaNumerosPares (array) {
   // implemente sua lógica aqui

   //DEU CERTO COM FOREACH
   // novoArray = []
   // array.forEach( item => {
   //    if(item % 2 === 0){
   //       novoArray.push(item)
   //    }
   // })
   // return novoArray

   let evenArray = array.filter( item =>{
      if(item % 2 === 0) {
         return true
      }
      return false 
   })
   return evenArray
}

//Exercício 4
array = [1, 2, 3, 4, 5, 6]
function retornaMaiorNumero(array) {
   // implemente sua lógica aqui

//DEU CERTO. USANDO O MÉTODO MATH.MAX E spread. ou seja...
// CADA ITEM DO ARRAY, COMO MÉTODO DO MATH.MAX.
   let maior = Math.max(...array)
   return maior


}

//Exercício 5

function retornaQuantidadeElementos (array) {
   // implemente sua lógica aqui
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui
      const respostas = [false, false,  true,  true, true]
      return respostas
}

//Exercício 7

function retornaNNumerosPares(n) {
   // implemente sua lógica aqui
   let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
   let arrayFiltrado = []
   let novoArrayPares = array.filter( item => {
      if(item % 2 === 0){
         return true
      }
      return false      
   })

   for(i = 0; i < n; i++){
      arrayFiltrado.push(novoArrayPares[i])
   }
   return arrayFiltrado
   // console.log(arrayFiltrado)
   // console.log(novoArrayPares)

}
console.log(retornaNNumerosPares(5))
// Exercício 8

function checaTriangulo(a, b, c) {
  // implemente sua lógica aqui
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
}

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
}

//Exercício 19

const consultas = [
   { nome: "João", genero: "masculino", cancelada: false, dataDaConsulta: "01/10/2019" },
   { nome: "Pedro", genero: "masculino", cancelada: true, dataDaConsulta: "02/10/2019" },
   { nome: "Paula", genero: "feminino", cancelada: false, dataDaConsulta: "03/11/2019" },
   { nome: "Márcia", genero: "feminino", cancelada: true, dataDaConsulta: "04/11/2019" }
]
 
function retornaEmailConsulta(consultas) {
  // implemente sua lógica aqui
}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}