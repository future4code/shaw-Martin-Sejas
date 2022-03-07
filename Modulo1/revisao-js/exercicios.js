// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {

    return array.length
   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    //return array.reverse()

    //Desafio 
    let reversedArray = []

    for (let i = (array.length -1); i >= 0; i--)
    {
        reversedArray.push(array[i])
    }

    return reversedArray
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {

  /* array.sort( function (a,b) {
       return a - b});
  return array 
  */ 

  //Desafio 
  
  //boolean control for sorting
    let isArraySorted = false 
    
  //while not sorted
    while(!isArraySorted) 
    {
        //check for sorting changes
        let changes = 0
        //comparar indice atual com indice previo
        //se indice atual for menor que o previo, intercambiar
        //record changes
        for (let i = 1; i <= (array.length -1); i++)
        {
            if (array[i] < array [i-1] )
            {
                let temp = array[i]
                array[i] = array[i-1]
                array[i-1] = temp 
                changes++
            }
        }

        if (changes === 0 ) isArraySorted = true
    }

    return array

}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    /*
    let meusPares = array.filter( (pares) => {
        return pares%2 === 0
    })

    return meusPares 
    */

    //Desafio

    let meusPares = []

    for (i of array)
    {
        if (i%2 === 0) meusPares.push(i)
    }

    return meusPares
  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

    let elevatedPairs = retornaNumerosPares(array).map( (par) => {
        return par*par
    })

    return elevatedPairs
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

    array = retornaArrayOrdenado(array) 

    return array[array.length -1]
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    let meuMenor 
    let meuMaior = num1>num2 ? ((meuMenor = num2), num1) : ((meuMenor=num1), num2);

    let meuNums = {
        maiorNumero: meuMaior,
        maiorDivisivelPorMenor: (meuMaior%meuMenor === 0),
        diferenca: (meuMaior-meuMenor)
    };

    return meuNums

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    // 0 nao eh par...

    let meusPares = []
    
    for (let i = 0; i < (n*2); i+=2) meusPares.push(i)

    return meusPares
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if(ladoA === ladoB && ladoB === ladoC) return "Equilátero"

    else if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) return "Escaleno"

    else return "Isósceles"

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array = retornaArrayOrdenado(array)
   return [ array[array.length -2], array[1]]
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

   let atoresEmString  = ""
   let lastActor = filme.atores[filme.atores.length -1]
   filme.atores.pop()

   for (ator of filme.atores) 
   {
     atoresEmString += `${ator}, `
   }

   atoresEmString += `${lastActor}.`

   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atoresEmString}`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

    return {...pessoa, nome: "ANÔNIMO"}
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

    let autorizados = pessoas.filter( (pessoa) => {
        return (pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5)
    })

    return autorizados
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

    let naoAutorizados = pessoas.filter( (pessoa) => {
        return (pessoa.idade < 15 || pessoa.idade > 60 || pessoa.altura < 1.5)
    })
    return naoAutorizados
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

    for (cliente of contas)
    {
        for (gasto of cliente.compras)
        {
            cliente.saldoTotal -= gasto
        }
        cliente.compras = []
    }

    return contas


}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
   
   consultas.sort ( (a,b) => {
       let nomeA = a.nome.toLowerCase()
       let nomeB = b.nome.toLowerCase()

       if (nomeA > nomeB) return 1

       else if (nomeA < nomeB) return -1

       else return 0
   })

   return consultas


}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    
    function formatarData (data) 
    {
        //"02/07/2021"
        // new Date(1995,11,17); 
        let dataSeparada =  data.split("/")
        dataSeparada.reverse()

        let dataFormatada = dataSeparada.map( (elemento) => {
            return Number(elemento)})

       return dataFormatada

    }
    
    consultas.sort ( (a,b) => {

        let dataFormatadaA = formatarData(a.dataDaConsulta)
        let dataFormatadaB = formatarData(b.dataDaConsulta)

        let dataA = new Date( dataFormatadaA[0], dataFormatadaA[1], dataFormatadaA[2])
        let dataB = new Date(dataFormatadaB[0], dataFormatadaB[1], dataFormatadaB[2])
 
        if (dataA > dataB) return 1
 
        else if (dataA < dataB) return -1
 
        else return 0
    })
 
    return consultas
   
}