/* 
Exercicio de interpretação de código


1.

Ele vai retornar o item do array, no indice escolhido, o indice em si, e o array em si

ex. 

( (nome: Amanda Rangel, apelido: Mandi), 0, usuarios )


2. 

Vai ser impresso um array contendo: 

Amanda Rangel
Lais Petra
Leticia Chijo



3

{nome: "Amanda Rangel, apelido: "Mandi}
{nome: "Lais Petra, apelido: "Laura}

*/


//Desafio de escrita de codigo


//1

const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]


//A 

let nameOnly = pets.map((pet) => {
    return pet.nome

})

//B
let salsichaOnly = pets.filter((pet) => {
    if (pet.raca === "Salsicha") return pet
})

//C

let poodleDiscount = pets.filter((pet) => {

    if (pet.raca === "Poodle") return pet
}).map((cliente) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${cliente.nome}`
})

console.log(poodleDiscount)


//2
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//  //A 

const productName = produtos.map((produto) => {
    return produto.nome
})

console.log(productName)


//  //B 

let productDiscount = produtos.map((descontados) => {
    return {
        nome: descontados.nome,
        preco: (descontados.preco*0.95)
    }
})

console.log(productDiscount)


//C
let produtosBebidas = produtos.filter((prodBebidas) => {
    return prodBebidas.categoria === "Bebidas"
})

console.log(produtosBebidas)

//D 

let itensYpe = produtos.filter( (produto) => {
    if (produto.nome.includes("Ypê")) return produto
} )

console.log(itensYpe)


//E 

let frasesPromocionais = produtos.filter( (produto) => {
    if (produto.nome.includes("Ypê")) return produto
}).map( (frases) => {
    return `Compre ${frases.nome} por R$ ${frases.preco}`
})

console.log(frasesPromocionais)

//Desafios


const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

//1

//A

let sortedPokemons = pokemons.map( (pokemon) => {
    return pokemon.nome
}).sort()

console.log(sortedPokemons)

//B

let pokemonTypes = new Set()

 pokemons.map( (pokemon) => {
    pokemonTypes.add(pokemon.tipo)
})

let tipoPokemon = Array.from(pokemonTypes) 

console.log(tipoPokemon)

