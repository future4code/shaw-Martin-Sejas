//Declaração de Funções

//imprime o resultado final e calcula quem ganhou
function imprimirResultadoFinal(user, PC) {

   let mensagemFinal = `${user.nome} - cartas: ${cartasEmString(user)} - pontuação ${user.pontos} \n 
      ${PC.nome} - cartas: ${cartasEmString(PC)} - pontuação ${PC.pontos}`

   // testando ganho normal, ou se PC se passou de 21
   if ((user.pontos > PC.pontos && user.pontos <= 21) || PC.pontos > 21) mensagemFinal += " \nO usúario ganhou!"

   //testando ganho normal ou se usuario se passou de 21
   else if ((user.pontos < PC.pontos && PC.pontos <= 21) || user.pontos > 21) mensagemFinal += " \nO computador ganhou!"

   else {
      mensagemFinal += " \nEmpate!"
   }

   alert(mensagemFinal)
}

//pega todas as cartas de um jogador e converte em string
function cartasEmString(jogador) {

   let cartasTexto = ""

   for (carta of jogador.cartas) {
      cartasTexto += (` ${carta.texto}`)
   }
   return cartasTexto
}

//gera cartas iniciais para um jogador
function gerarCartasIniciais(jogador) {

   // Cartas iniciais
   jogador.cartas.push(comprarCarta())
   jogador.cartas.push(comprarCarta())

   // Verificar que não são duas cartas A, refazer se necessario
   while (jogador.cartas[0].valor === 11 && jogador.cartas[1].valor === 11) {
      jogador.cartas[0] = comprarCarta()
      jogador.cartas[1] = comprarCarta()
   }

   //adicionar pontos
   for (i of jogador.cartas) {
      jogador.pontos += i.valor
   }
}

//adiciona uma carta para um jogador
function adicionarCarta(jogador) {
   cartaNova = comprarCarta()
   jogador.pontos += cartaNova.valor
   return cartaNova

}

//MAIN
alert("Boas vindas ao jogo de Blackjack!")

//controle de jogo
let jogandoBlackJack = true

//main game loop
while (jogandoBlackJack) {

   if (confirm("Quer iniciar uma nova rodada?")) {
      //iniciando uma rodada
      let rodadaUsuario = true
      let rodadaComputador = true

      //criando objetos usuario e computador
      let usuario = {
         nome: "Usuario",
         cartas: [],
         pontos: 0
      }

      let computador = {
         ...usuario,
         nome: "Computador",
         cartas: []
      }

      //gerando cartas iniciais para cada jogador
      gerarCartasIniciais(usuario)
      gerarCartasIniciais(computador)

      //rodada do usuario
      while (rodadaUsuario) {
         let mensagemUsuario = `Suas cartas são ${cartasEmString(usuario)}. A carta revelada do computador é ${computador.cartas[0].texto} \n 
         Deseja comprar mais uma carta?`

         if (confirm(mensagemUsuario)) {
            //adicionar carta nova para array, e adicionar pontos (função adicionarCarta faz isso)
            usuario.cartas.push(adicionarCarta(usuario))

            //se o usuario se passou de 21, ele perdeu o jogo
            if (usuario.pontos > 21) {
               rodadaUsuario = false
               rodadaComputador = false //não é necessario o computador jogar, ele ja ganhou
               imprimirResultadoFinal(usuario, computador)
            }
         }
         // se o usuario aperter 'cancel', a rodada do usuario acabou
         else rodadaUsuario = false
      }

      while (rodadaComputador) {

         //computador compra cartas até igualar ou ter mais pontos que o usuario
         if (!(computador.pontos >= usuario.pontos)) {
            computador.cartas.push(adicionarCarta(computador))
         }

         else {
            rodadaComputador = false
            imprimirResultadoFinal(usuario, computador)
         }
      }
   }
   //se o usuario não quiser uma nova rodada, o jogo acabou
   else {
      alert("O jogo acabou")
      jogandoBlackJack = false
   }
}