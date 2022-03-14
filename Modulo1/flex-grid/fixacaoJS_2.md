```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  
  let repeticoes = 0; 
  
  for (numero of arrayDeNumeros)
  {
    if (numero === numeroEscolhido) repeticoes++
    
  }
  
  
  if (repeticoes === 0) 
  {
    return "Número não encontrado"
  }
  
  else
  {
    return `O número ${numeroEscolhido} aparece ${repeticoes}x`
  }
}