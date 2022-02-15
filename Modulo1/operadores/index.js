// ::: Exercicio de interpretacao de codigo OPERADORES ::::::: 

//======================================================================
// Pergunta 1) 

// a. false 
// b. false 
//
// resultado = false 

//resultado = (!resultado [true]) && (bool1 [true] OU bool2 [false])
// c. true
// d. boolean

//=======================================================================

// Pergunta 2) 
//
//  Está tudo em formato string, será adicionado o primeiroNumero e segundo Numero como um string composto

//=======================================================================

//Pergunta 3)
//
// Recomendaria meu amigo fazer assim: 

// let primeiroNumero = Number(prompt("Digite um numero!")) 
// let segundoNumero = Number(prompt("Digite outro numero!")) 

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

//=========================================================================









// ::::EXERCICIO DE ESCRITA DE CODIGO::::::: OPERACOES

//=========================================================================
// PERGUNTA 1 

let idadeUsuario = Number(prompt("Usuario! Por favor digite a sua idade!"))
let idadeAmigo = Number(prompt("Digite a idade do seu melhor amigo/a!"))

console.log("Sua idade é maior do que a do seu melhor amigo/a?", (idadeUsuario > idadeAmigo))
console.log("A Diferença de idade é: ", (idadeUsuario - idadeAmigo))

//=================================================================================================

// PERGUNTA 2


let numeroPar = Number(prompt("Por favor digite um numero par!"))

console.log("O resto da divisao por 2 é: ", (numeroPar% 2))

// se escrever um numero ímpar aparece 1 em vez de 0

//=================================================================================================

//PERGUNTA 3 

let idadeUsuarioAnos = Number(prompt("Quantos anos você tem?"))

let idadeUsuarioMeses = idadeUsuarioAnos * 12
let idadeUsuarioDias = idadeUsuarioAnos * 365
let idadeUsuarioHoras = idadeUsuarioDias * 24

console.log(" A sua idade em meses é: ", idadeUsuarioMeses)
console.log(" A sua idade em dias é: ", idadeUsuarioDias)
console.log(" A sua idade em horas é: ", idadeUsuarioHoras) 

//=================================================================================================

//PERGUNTA 4 

let primeiroNum = Number(prompt(" Digite um numero por favor"))
let segundoNum = Number(prompt("Digite um segundo numero por favor!"))

console.log("O primeiro numero é maior que o segundo?", (primeiroNum > segundoNum))
console.log("O primeiro numero é igual que o segundo?", (primeiroNum === segundoNum))
console.log("O primeiro numero é divisivel pelo segundo?", ((primeiroNum % segundoNum) === 0))
console.log("O segundo numero é divisivel pelo primeiro?", ((segundoNum % primeiroNum ) === 0))









// ::::DESAFIO::::::: OPERACOES
//=======================================================================================

//Pergunta 1 

// a.)
 console.log(" O Valor de 77°F em  K é: ", ( (77 - 32) * (5/9) + 273.15 ), "K")

// b.)
 console.log("O Valor de 80°C em °F é: ", (80 * (9/5) + 32), "°F")

// c.)
 console.log("O valor de 30°C em °F e K é: ", (30 * (9/5) + 32), "°F ", (30 + 273.15), "K") 

// d.) 
 let valorTemp = Number(prompt("Por favor digite um valor em Celsius para convertar para Fahrenheit e Kelvin!"))
 console.log("O valor de", valorTemp, "°C em °F e K é: ", (valorTemp * (9/5) + 32), "°F ", (valorTemp + 273.15), "K") 

//=========================================================================================

//Pergunta 2

 let consumoEnergiaResidencia = Number(prompt(" Quantos quilowatts foram consumidos na sua residencia?"))
 console.log( consumoEnergiaResidencia, "Quiloawatts gera um custo de: ", (consumoEnergiaResidencia * 0.05), " reais")

//a. 
 console.log(" Para uma residencia que consumiu 280 quilowatts-hora o preço é: ", (280 * 0,05), "reais")

//b. 
 console.log("Uma resdiencia que consumiu 280 quilowatt-hora com desconto de 15% deve pagar: ", ((280*0,05) * 0.85), "reais") 

//==========================================================================================

//Pergunta 3 

//a. 
console.log("20lb equivalem a", (20/2.2), "kg")

//b. 
console.log("10.5oz equivalem a",(10.5 * 0.0283495), "kg" )

//c. 
console.log("100mi equivalem a", (100 * 1609.34), "m") 

//d. 
console.log("50ft equivalem a", (50 * 0.3048), "m")

//e. 
console.log("103.56 gal equivalem a", (103.56 * 3.785), "liters" )

//f. 
console.log("450 xic equivalem a ", (450 * 0.236588), "l")

//g. 
let librasPraKilos = Number(prompt("Por favor digite a quantidade de lbiras (lb) para converter pra kilos!"))
console.log( librasPraKilos, "lb equivalem a", (librasPraKilos/2.2), "kg")
