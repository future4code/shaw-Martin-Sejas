// a) e b)

function calcularEstatisticas(numeros:number[]):object {

    const numerosOrdenados:number[] = numeros.sort(
        (a,b) => a-b
    )

    let soma:number = 0; 

    for (let num of numeros) {
        soma += num;
    }

    //numero
    const estatisticas = {
        maior: numerosOrdenados[numeros.length -1],
        menor: numerosOrdenados[0],
        media: soma/ numeros.length
    }

    return estatisticas;
}


//c) 

type AmostraDeDados = {
    numeros: number[],
    obterEstatisticas: (numeros:number[]) => object
        
    }


const amostraDeIdades: AmostraDeDados = {
    numeros: [21,18, 65, 44, 15, 18],
    obterEstatisticas: (numeros):object => {  const numerosOrdenados:number[] = numeros.sort(
        (a,b) => a-b
    )

    let soma:number = 0; 

    for (let num of numeros) {
        soma += num;
    }

    //numero
    const estatisticas = {
        maior: numerosOrdenados[numeros.length -1],
        menor: numerosOrdenados[0],
        media: soma/ numeros.length
    }

    return estatisticas;
}

}

//teste
console.log(amostraDeIdades.obterEstatisticas(amostraDeIdades.numeros))

