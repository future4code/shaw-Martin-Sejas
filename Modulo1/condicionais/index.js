/* 
Interpretacao de Codigo

1) 
a) Ele testa para ver se um número é par ou ímpar

b) numeros pares

c) numeros ímpares


2) 
a) Serve para mostrar o preço da fruta selecionada

b) "O preço da fruta, Maça, é R$ 2.25"

c) "O preço da fruta, Pêra, é R$ 5"


3) 

a) esta recebendo um número do usuario e botando em uma váriavel

b) Se fosse 10 o número a mensagem no terminal seria: 

"Esse número passou no teste" 
"Essa mensagem é secreta" 

c)
Se fosse -10 daria como resposta undefined, a variavel mensagem nunca seria criada


*/


//Exercicio de Escrita de Codigo

//1) 

let idadeUsuario = Number(prompt("Por favor digite a sua idade"))

if (idadeUsuario >= 18) 
{
    console.log("Você pode dirigir")
}

else 
{
    console.log("Você não pode dirigir")
}



//Exercicio 2

let turnoEstudo = prompt("Por favor informe o turno que você estuda: (M)atutino, (V)espertino ou (N)oturno")

turnoEstudo.toUpperCase()

if (turnoEstudo === "M")
{
    console.log("Bom Dia!")
} 

else if (turnoEstudo == "V") 
{
    console.log("Boa Tarde!")
}

else if(turnoEstudo == "N") 
{
    console.log("Boa Noite")
}

else 
{
    console.log("Opção errada! Por favor tente de novo!")
}



//Exercicio 3

let turnoEstudoSwitch = prompt("Por favor informe o turno que você estuda: (M)atutino, (V)espertino ou (N)oturno")

switch (turnoEstudoSwitch.toUpperCase())
{
    case "M": 
        console.log("Bom Dia!")
        break
    
    case "V": 
        console.log("Boa Tarde!") 
        break 
    case "N": 
        console.log("Boa Noite!")
        break 
    default: 
        console.log("Opçâo errada! Por favor tente de novo!")
        break 

}


//Exercicio 4 e DESAFIO 1

const filme = {
    genêro: prompt("Qual é o genero do filme?"),
    preço: Number(prompt("Qual é o preço do filme")),
}

if (filme.genêro.toLowerCase() == "fantasia" && filme.preço < 15) 
{
    let lanchinho = prompt("Qual snack que você quer comprar?")
    console.log("Bom filme!")
    console.log(`Aproveite o seu ${lanchinho}`)
}

else
{
    console.log("Escolha outro filme :(")
}


//Desafios

//Desafio 1 FEITO ENCIMA

//Desafio 2

alert("Bem vindo ao nosso portal de compras de ingressos! Siga os passos para efetuar a sua compra!")

function inputValido(meuIngresso)
{
    let compraValida = true
    meuIngresso.tipoDeJogo.toUpperCase()
    meuIngresso.etapaDoJogo.toUpperCase() 

    //teste de tipo de Jogo
    if (meuIngresso.tipoDeJogo === "IN" || meuIngresso.tipoDeJogo === "DO")
    {    
        compraValida = true
    }

    else 
    {
        console.log("Tipo de Jogo Inválido, somente IN ou DO")
        compraValida = false
        return compraValida
    }

    //teste de etapaDoJogo
    if (meuIngresso.etapaDoJogo === "SF" || meuIngresso.etapaDoJogo === "DT" || meuIngresso.etapaDoJogo === "FI" )
    {
        compraValida = true
    }

    else 
    {
        console.log("Etapa do Jogo Inválido, somente SF ou DT ou FI,")
        compraValida = false
        return compraValida
    }

    //teste de categoria
    if ( meuIngresso.categoria === 1 || meuIngresso.categoria === 2 || meuIngresso.categoria === 3 || meuIngresso.categoria === 4 )
    {
        compraValida = true
    }
    else 
    {
        console.log("Categoria de Jogo Inválida, somente 1, 2, 3 ou 4")
        compraValida = false
        return compraValida
    }

    return compraValida

}

const ingresso = {
    nomeCliente: prompt("Por favor insira o seu nome completo"),
    tipoDeJogo: prompt("Escolha o tipo de jogo: IN indica internacional e DO indica doméstico! (IN | DO) "),
    etapaDoJogo: prompt("Por favor escolha a etapa do jogo: SF indica semi-final, DT indica decisão de terceiro lugar, e FI indica final! (SF | DT | FI) "),
    categoria: Number(prompt("Por favor escolha a categoria! ( 1 | 2 | 3 | 4 ) ")),
    quantidade: Number(prompt("Finalmente, por favor escolha a quantidade de ingressos")),
    dolar: 4.10,
    valorIngresso: 1,
    valorTotal: 1

}

if (inputValido(ingresso))
{
    console.log("---Dados da compra---") 
    console.log(`Nome do cliente: ${ingresso.nomeCliente}`)

    if (ingresso.tipoDeJogo === "IN")
    {
        console.log("Tipo do Jogo: Internacional")
    }

    else 
    {
        console.log("Tipo de jogo: Nacional")
    }

    if (ingresso.etapaDoJogo === "SF")
    {
        console.log("Etapa do jogo: semi-final")
    }

    else if (ingresso.etapaDoJogo === "DT")
    {
        console.log("Etapa do jogo: Decisão de terceiro lugar")
    }

    else
    {
        console.log("Etapa do jogo: Final")
    }

    console.log(`Categoria: ${ingresso.categoria}`)
    console.log(`Quantidade de Ingressos: ${ingresso.quantidade} ingressos`)
    console.log("---Valores---") 

    switch (ingresso.categoria)
    {
        // Caso seja categoria 1
        case 1:
            if (ingresso.etapaDoJogo === "SF") { ingresso.valorIngresso = 1320}
            else if(ingresso.etapaDoJogo === "DT") { ingresso.valorIngresso = 660}
            else {ingresso.valorIngresso = 1980}

            if(ingresso.tipoDeJogo === "DO") 
            {
                console.log(`Valor do ingresso: R$ ${ingresso.valorIngresso}`)
                ingresso.valorTotal = ingresso.valorIngresso * ingresso.quantidade
                console.log(`Valor total: R$ ${(ingresso.valorTotal)}`)
            }

            else 
            {
                ingresso.valorIngresso = ingresso.valorIngresso/ ingresso.dolar
                console.log(`Valor do ingresso: U$ ${ingresso.valorIngresso}`)
                ingresso.valorTotal = ingresso.valorIngresso * ingresso.quantidade
                console.log(`Valor total: U$ ${(ingresso.valorTotal)}`)
            }
        break


        // Caso seja categoria 2
        case 2:
            if (ingresso.etapaDoJogo === "SF") { ingresso.valorIngresso = 880}
            else if(ingresso.etapaDoJogo === "DT") { ingresso.valorIngresso = 440}
            else {ingresso.valorIngresso = 1320}

            if(ingresso.tipoDeJogo === "DO") 
            {
                console.log(`Valor do ingresso: R$ ${ingresso.valorIngresso}`)
                ingresso.valorTotal = ingresso.valorIngresso * ingresso.quantidade
                console.log(`Valor total: R$ ${(ingresso.valorTotal)}`)
            }

            else 
            {
                ingresso.valorIngresso = ingresso.valorIngresso/ ingresso.dolar
                console.log(`Valor do ingresso: U$ ${ingresso.valorIngresso}`)
                ingresso.valorTotal = ingresso.valorIngresso * ingresso.quantidade
                console.log(`Valor total: U$ ${(ingresso.valorTotal)}`)
            }
        break
        
        // Caso seja categoria 3
        case 3:
            if (ingresso.etapaDoJogo === "SF") { ingresso.valorIngresso = 550}
            else if(ingresso.etapaDoJogo === "DT") { ingresso.valorIngresso = 330}
            else {ingresso.valorIngresso = 880}

            if(ingresso.tipoDeJogo === "DO") 
            {
                console.log(`Valor do ingresso: R$ ${ingresso.valorIngresso}`)
                ingresso.valorTotal = ingresso.valorIngresso * ingresso.quantidade
                console.log(`Valor total: R$ ${(ingresso.valorTotal)}`)
            }

            else 
            {
                ingresso.valorIngresso = ingresso.valorIngresso/ ingresso.dolar
                console.log(`Valor do ingresso: U$ ${ingresso.valorIngresso}`)
                ingresso.valorTotal = ingresso.valorIngresso * ingresso.quantidade
                console.log(`Valor total: U$ ${(ingresso.valorTotal)}`)
            }
        break
        
        //Caso seja categoria 4
        default:
            if (ingresso.etapaDoJogo === "SF") { ingresso.valorIngresso = 220}
            else if(ingresso.etapaDoJogo === "DT") { ingresso.valorIngresso = 170}
            else {ingresso.valorIngresso = 330}

            if(ingresso.tipoDeJogo === "DO") 
            {
                console.log(`Valor do ingresso: R$ ${ingresso.valorIngresso}`)
                ingresso.valorTotal = ingresso.valorIngresso * ingresso.quantidade
                console.log(`Valor total: R$ ${(ingresso.valorTotal)}`)
            }

            else 
            {
                ingresso.valorIngresso = ingresso.valorIngresso/ ingresso.dolar
                console.log(`Valor do ingresso: U$ ${ingresso.valorIngresso}`)
                ingresso.valorTotal = ingresso.valorIngresso * ingresso.quantidade
                console.log(`Valor total: U$ ${(ingresso.valorTotal)}`)
            }
        break
    }

}

else 
{
    console.log("Erro na sua compra, verifique os erros de cima, e abra novamente o portal de compra.")
}

