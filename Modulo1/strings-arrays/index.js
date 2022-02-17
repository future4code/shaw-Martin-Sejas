//Interpretção de Codigo 


//Exercicio 1

//a. Erro a array não está definida 
//b. null
//c. 10
//d. 3
//e.  3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13 
//f. 9


//Exercicio 2 
//SUBI NUM ONIBUS EM MIRROCOS 26

//=========================================

//Exercicio escrita de codigo

//Exercicio 1
let nomeDoUsuario = prompt("Por favor digite o seu nome")
let emailDoUsuario = prompt("Por favor digite o seu email")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vindo ${nomeDoUsuario} !`)

//Exercicio 2

let comidasFavoritas = ["Arroz", "Massa", "Sushi", "Pizza", "Fritas"]

//a)
console.log(comidasFavoritas)

//b) 
console.log("Essas são as minhas comidas preferidas: ", comidasFavoritas)

//c) 
comidasFavoritas[1] = prompt("Qual é a sua comida preferida?")

console.log(comidasFavoritas)


//Exercicio 3
let listaDeTarefas = []

console.log("Vou precisar que você me indique 3 tarefas pendentes!")

listaDeTarefas[0] = prompt(" Qual é a tarefa #1 ?") 
listaDeTarefas[1] = prompt(" Qual é a tarefa #2 ?")
listaDeTarefas[2] = prompt(" Qual é a tarefa #3 ?")

console.log(listaDeTarefas) 

let escolhaIndice = Number(prompt ("Por favor escolha o numero de uma tarefa ja realizada opções: 0 , 1, 2"))

listaDeTarefas.splice(escolhaIndice,1) 

console.log(listaDeTarefas)

//===========================================================================================


//Desafio 

//Exercicio 1

let minhaFrase = prompt("Por favor escreva uma frase!") 

let fraseArray = minhaFrase.split(" ")

console.log(fraseArray)


//Exercicio 2 

let arrayFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

console.log(arrayFrutas)

let indiceAbacaxi = arrayFrutas.indexOf("Abacaxi")


console.log(`O indice de Abacaxi é: ${indiceAbacaxi} e o tamanho do array é ${arrayFrutas.length}`)