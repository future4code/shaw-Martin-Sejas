//EXERCICIO FUNÇÕES 

//Exercicio de interpretação de codigo

//1) 
// a) 10, 50
// b) nada apareceria na console


/* 

2) A) Ela pega a frase, bota em minuscula, e confere es tem a palavra cenoura

i. True
ii. True
iii. True

*/


//Exercicio Escrita de Codigo

//1)

//A


function imprimirBio() 
{
    console.log("Eu sou Martin, tenho 25 anos, moro no Rio de Janeiro e sou estudante")
}

imprimirBio()

//B 


function customBio(nome, idade, cidade, profissao)
{
    let resposta = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
    return resposta
}

let nomeCliente = prompt("Por favor digite o seu nome!")
let idadeCliente = Number(prompt("Por favor digite a sua idade!"))
let cidadeCliente = prompt("Por favor digite o nome da cidade que você mora!")
let profissaoCliente = prompt("E finalmente, por favor digite a sua profissão!")

let minhaResposta = customBio(nomeCliente, idadeCliente, cidadeCliente, profissaoCliente)

console.log(minhaResposta)

//2) 

// a)

function soma(a,b) 
{
    return (a+b)
}

console.log(soma(5,4))

// b) 

function biggerThan(a,b) 
{
    return (a>=b)
}


//c 

function isEven(a) 
{
    return (a%2 === 0)
}


//d) 

function capString(mystring)
{
    mystring = mystring.toUpperCase()
    let resposta = `Tamanho da frase: ${mystring.length} a frase é ${mystring}`
    return resposta
}

let stringToCaps = prompt("Por favor digite uma frase!")
console.log(capString(stringToCaps))

//3) 
let somar = (a,b) => {return (a+b)}
let subtrair = (a,b) => {return (a-b)}
let multiplicar = (a,b) => {return (a*b)}
let dividir = (a,b) => {return (a/b)}

let primeiroNum = Number(prompt("Por favor digite o primeiro numero"))
let segundoNum = Number(prompt("Digite o segundo numero"))

console.log(`Numeros inseridos: ${primeiroNum} e ${segundoNum}`)
console.log(`Soma: ${somar(primeiroNum,segundoNum)}`)
console.log(`Diferença: ${subtrair(primeiroNum,segundoNum)}`)
console.log(`Multiplicação: ${multiplicar(primeiroNum,segundoNum)}`)
console.log(`Divisão: ${dividir(primeiroNum,segundoNum)}`)

//Desafio
//1)

let imprimirParametro = string => {console.log(string)}
let arrowSum = (a,b) => {   imprimirParametro((a+b)) }

arrowSum(Number(prompt("Primeiro Numero da Arrow Sum")), Number(prompt("Segundo numero da Arrow Sum")))

//2) 

function Pitagoras(cat1, cat2)
{
    let somaCatetos = (cat1*cat1)+(cat2*cat2)

    return (Math.sqrt(somaCatetos))
}
let cateto1 = Number(prompt("Vamos calcular a hipotenusa, por favor digite o primeiro cateto!"))
let cateto2 = Number(prompt("Por favor digite o segundo cateto!"))

let hipotenusa = Pitagoras(cateto1,cateto2)

console.log("Os catetos eram", cateto1, "e", cateto2, "A hipotenusa é: ", hipotenusa)





