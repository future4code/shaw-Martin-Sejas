type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//b) Como você faria, já com a extensão instalada, para transpilar(converter) esse arquivo typescript em um arquivo javascript?

// Configurando o package.json, botando um script para transpilar com o comando tsc, ou simplesmente no terminal escrevendo tsc (nome do arquivo)

//b) E se este arquivo estivesse dentro de uma pasta chamada src. O processo seria diferente? Se sim, descreva as diferenças.

// simplesemente teria que deixar em especifico src/(nome do arquivo), e depois para rodar ele node src/(arquivo transpilado)

//c) 

//Sim no teu tsconfig.json, tem as opcoes de escolher um root dir (um directorio) ou ate root Dirs (varios diretorios)