// Exercicios de Interpretacao de codigo (RESPOSTAS)

//1) 
// Impresso: 
// 5
// 10 5

// 2)
// Impresso: 
// 10 10 10

//3) 
// nome variavel p -> horasDiarias 
// nome variavel t -> salarioDiario

//-------------------------------------------------------------------------

// EXERCICIO ESCRITA DE CODIGO 

// Exercicio 1
let nome
let idade 

console.log(typeof nome)
console.log(typeof idade)


// Porque as variaveis não estão definidas, elas não tem um tipo 

nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é a sua idade?")

console.log(typeof nome)
console.log(typeof idade)

//nome e idade são ambos strings 

console.log("Olá", nome, "você tem", idade, "anos")

//FIM EXERCICIO 1
//=====================================================


// Exercicio 2

let roupaVermelha = "- NÃO"
let temPet = "- SIM"
let gostaPizza = "- SIM"

console.log("Você está usando uma roupa vermelha?", roupaVermelha)
console.log("Você tem pet?", temPet)
console.log("Você gosta de pizza?", gostaPizza)

//FIM EXERCICIO 2
//=====================================================


// Exercicio 3

let a = 10
let b = 25 

c = b 
b = a 
a = c 

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

//FIM EXERCICIO 3
//=====================================================

//Desafio 

let x 
let y 

x = Number(prompt("Por favor digite o primeiro número"))
y = Number(prompt("Por favor digite o segundo número"))


console.log("1. O primeiro número somado ao segundo número resulta em:", (x+y))
console.log("2. O primeiro número multiplicado pelo segundo número resulta em:", (x*y))
