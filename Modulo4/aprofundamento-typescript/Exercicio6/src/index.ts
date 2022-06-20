
// 100.000AC -> 4000 AC === Pré-história 
//4000Ac ->   476 DC === Idade Antiga
// 476 DC ->  1453 DC ===  Idade Média
// 1453 DC ->   1789 DC  === Idade Moderna. 
// 1789 DC  -> 2022 DC === Idade Contemporânea,


function idadeHistorica(ano:number, sigla?:string):string {
    if (sigla === undefined) sigla = 'DC'; 

    else {
        sigla = sigla.toUpperCase()
    }
   

    if (sigla === 'DC' || sigla === 'AC') 
  {  
      if (sigla === 'AC')
    {
        if (ano > 4000) return "Pré-história"; 
        else {
            return "Idade Antiga"
        }
    }

    else {
        if(ano > 2022) return "Erro: Ano no futuro, não faz parte da historia"

        else if (ano < 476) return "Idade Antiga"

        else if (ano >= 476 && ano < 1453) return "Idade Média" 

        else if (ano >= 1453 && ano < 1789) return "Idade Moderna"

        else {
            return "Idade Contemporânea"
        }
    }}

    else {
        return "Erro ao inserir sigla"
    }
    

}

console.log(idadeHistorica(2025))
console.log(idadeHistorica(2010, 'DC'))
console.log(idadeHistorica(1200))
console.log(idadeHistorica(1250, 'AC'))
console.log(idadeHistorica(2010))
