/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


// Imprime a mão de cada um, e calcula o resultado do jogo
function imprimirCartas(user, PC){
   console.log(`${user.nome} - cartas: ${user.carta1.texto} ${user.carta2.texto} - pontuação ${user.pontos}`)
   console.log(`${PC.nome} - cartas: ${PC.carta1.texto} ${PC.carta2.texto} - pontuação ${PC.pontos}`)

   if (user.pontos > PC.pontos) return "O usúario ganhou!"

   else if (user.pontos < PC.pontos) return "O computador ganhou!" 

   else {
      return "Empate!"
   }
}


//soma os pontos de cada jogador
function somarPontos(jogador) {
   jogador['pontos'] = jogador.carta1.valor + jogador.carta2.valor
}

//boolean de jogo
let jogandoBlackJack = true

console.log("Boas vindas ao jogo de Blackjack!")


//main game loop
while (jogandoBlackJack) { 

   if(confirm("Quer iniciar uma nova rodada?")) 
   {
      //iniciando uma rodada
      //criando cartas usuario e computador

      let usuario = {
         nome: "Usuario",
         carta1: comprarCarta(),
         carta2: comprarCarta(),
      }

      let computador = {  
         nome: "Computador",
         carta1: comprarCarta(), 
         carta2: comprarCarta(),
      }
      
      somarPontos(usuario) 
      somarPontos(computador)
     console.log(imprimirCartas(usuario,computador))

   }

   else 
   {
      console.log("O jogo acabou")
      jogandoBlackJack = false
   }
}


   