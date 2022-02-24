/* 
Exercicios de interpretação de código

1.

A)
 Matheus Nachtergaele
Virginia Cavendish
o Objeto em si (canal: "Globo" , horario "14h")



2. 

os Objetos em si da seguinte forma: 

nome: Juca 
idade: 3
raca: SRD 

nome: Juba 
idade: 3
raca: SRD 

nome: Jubo
idade: 3
raca: SRD



3.

false

undefined

Sim o javascript fora do strict mode aceita você criar uma 
propriedade de um objeto assim, só chamando ele. 

*/


//Exercicios de escrita de codigo

// 1. 

const exemploAmanda =
{
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]

}


function printApelidos(meuObjeto)
{
    console.log(`Eu sou ${meuObjeto.nome}, mas pode me chamar de: ${meuObjeto.apelidos[0]}, ${meuObjeto.apelidos[1]},${meuObjeto.apelidos[2]}`)
}

printApelidos(exemploAmanda)

const exemploMartin = {
    ...exemploAmanda,
    apelidos: ["Martini", "TinTin", "Martinsito"]
}

printApelidos(exemploMartin)

//2.

const pessoaUm = {
    nome: "Martin", 
    idade: 25,
    profissao: "Engenheiro"
}


const pessoaDois = {
    ...pessoaUm,
    nome: "Paula", 
    idade: 29,
    profissao: "Veterinaria/Contadora"

}


function objetoParaArray(pessoa)
{
    myObject = []

    myObject.push(pessoa.nome)
    myObject.push(pessoa.nome.length)
    myObject.push(pessoa.idade)
    myObject.push(pessoa.profissao)
    myObject.push(pessoa.profissao.length)


    return myObject

}

let pessoaUmArray = objetoParaArray(pessoaUm)
console.log(pessoaUmArray) 

let pessoaDoisArray = objetoParaArray(pessoaDois)
console.log(pessoaDoisArray)

//3. 

var carrinho = []

const banana = {
    nome: "Banana",
    disponibilidade: true,


}

const uva =
{
    ...banana,
    nome: "Uva",

}

const pera =
{
    ...uva,
    nome: "Pera"
}

function colocarEmCarrinho(minhaFruta)
{
    carrinho.push(banana) 
    carrinho.push(uva)
    carrinho.push(pera)
}

colocarEmCarrinho(carrinho) 

console.log(carrinho)

//Desafios
//1

function getUserInfo() 
{
    const userOne = {
        name: prompt("Qual é o seu nome"), 
        idade: Number(prompt("Qual  é a sua idade")), 
        profissao: prompt("Qual é a sua profissao")
    }

    console.log(userOne, typeof(userOne))

}

getUserInfo()

//2

const filme1 = {
    nome: "Green Book", 
    lancamento: 2018
}

const filme2 = 
{
    ...filme1, 
    nome: "Revenant", 
    lancamento: 2015
}

function comparaFilmes(film1, film2)
{
    console.log("O primeiro filme foi lancada antes do segundo?", (film1.lancamento < film2.lancamento))
    console.log("O primeiro filme foi lancada nom mesmo ano que o segundo?", (film1.lancamento === film2.lancamento))
}

comparaFilmes(filme1, filme2)

//3
function checarDisponibilidadeFrutas(umaFruta)
{
    umaFruta.disponibilidade = (!umaFruta.disponibilidade)
    return umaFruta
}

console.log(banana)
 checarDisponibilidadeFrutas(banana)
console.log(banana)