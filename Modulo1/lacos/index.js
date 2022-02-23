/*
Interpretação de codigo


1. Está somando o iterador a variavel valor
O valor impresso vai ser 10


2. Qualquer numero da lista maior que 18:
A) 19, 21, 23, 25, 27, 30

B) voce poderia usar indexOf como funcao


3. 
*
**
***
****

*/

//Exercicios de escrita de código

let bichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))
let nome_bichinhos = []

if (bichinhos === 0) console.log("Que pena! Você pode adotar um pet!")

else
{
    console.log("Por favor digite os nomes dos seus pets!")

    for (let i = 0; i< bichinhos; i++)
    {
        nome_bichinhos.push(prompt("Insira o nome do bichinho por favor!"))
    }

}


for (let nomes of nome_bichinhos)
{
    console.log(nomes)
}


//2

let array_original = [10,20,30,40,50,60,70,80,90]

//A
let imprimirOriginal = (myarray) =>
{
    for (let i of myarray)
    {
        console.log(i)
    }
}


//B
let imprimirDividido = (myarray) => 
{
    for (let i of myarray)
    {
        console.log(i/10)
    }
}

//C
function somentePares(myarray) 
{
    let newArray = []
    for (let i of myarray)
    {
        if(i%2 === 0) newArray.push(i)
    }

    console.log(newArray)
}

//D

function createStringArray(myArray)
{
    let stringArray = []

    for(let i of myArray)
    {
        stringArray.push(`O elemento do index: ${myArray.indexOf(i)} é: ${i}`)
    }

    console.log(stringArray)
}

//E

function minMax(myArray) 
{
    let min = myArray[0] 
    let max = myArray[0]

    for (let i of myArray)
    {
        if(min > i) min = i

        else if(max < i) max = i
    }

    console.log(`O maior numero é ${max} e o menor é ${min}`)
}

imprimirOriginal(array_original)
imprimirDividido(array_original)
somentePares(array_original) 
createStringArray(array_original) 
minMax(array_original)

//Desafio 

//1

let numeroMagico = Number(prompt("Jogador 1 por favor escolha o numero magico"))
console.log("Vamos jogar!")
let respostaUsuario = 0
let loops = 0

while(respostaUsuario !== numeroMagico)
{
    respostaUsuario = Number(prompt("Faça o seu chute Jogador 2"))
    console.log(`O número chutado foi: ${respostaUsuario}`)

    if (respostaUsuario < numeroMagico) console.log("Errrrrrrrou, é maior")

    else if(respostaUsuario > numeroMagico) console.log("Errrrrrrrrrrou, é menor!")

    else 
    {
        console.log("Acertou!!")
    }

    loops++
}

console.log(`O número de tentativas foi: ${loops}`)



//2

let magicNumber = Math.floor((Math.random() * 100) +1)
console.log("Vamos jogar!")
let resposta = -1
let myloops = 0

while(resposta !== magicNumber && resposta !== 0)
{
    resposta = Number(prompt("Faça o seu chute Jogador 2"))
    console.log(`O número chutado foi: ${resposta}`)

    if (resposta < magicNumber) alert("Errrrrrrrou, é maior que " + resposta + " !")

    else if(resposta > magicNumber) alert("Errrrrrrrrrrou, é menor que " + resposta)

    else 
    {
        console.log("Acertou!!")
    }

    myloops++
}

console.log(`O número de tentativas foi: ${myloops}`)

/* 
A alteração em si de criar o número magico foi fácil, o dificil foi conseguir ver se era menor ou maior na consola, tava travando, tive que mudar para alert, e tambem botar um munero chave meu (0) para poder sair do loop
*/
