//a)

let minhaString:string = "Hello World"; 

//me da o erro: Type 'number' is not assignable to type 'string'.ts(2322

//b)

let meuNumero:number = 5; 

//me da o erro: Type 'string' is not assignable to type 'number'.ts(2322

//c) e d)

enum CoresArcoiris {
    Vermelho, 
    Laranja, 
    Amarelo, 
    Verde, 
    Azul,
    Indigo, 
    Violeta

}


type Person = {
    nome:string,
    idade:number, 
    corFavorita: CoresArcoiris
}

let person1:Person = {
    nome: "Martin", 
    idade: 25,
    corFavorita: CoresArcoiris.Vermelho
}

let person2:Person = {
    nome: "Luis", 
    idade: 23,
    corFavorita: CoresArcoiris.Azul
}

let person3:Person = {
    nome: "Mariana", 
    idade: 25,
    corFavorita: CoresArcoiris.Laranja
}