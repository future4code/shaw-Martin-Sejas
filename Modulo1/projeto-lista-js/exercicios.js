// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  
  return (num1 + num2)
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = Number(prompt("Por favor digite a altura do retângulo!"))
  let largura = Number(prompt("Por favor digite a largura do retângulo!"))

  let area = altura*largura

  console.log(area)

}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  let anoAtual = Number(prompt("Digite o ano atual porfavor"))
  let anoNascimento = Number(prompt("Digite o ano que você nasceu!")) 

  let idade = anoAtual-anoNascimento

  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  let IMC = peso / (altura* altura)

  return IMC

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui

  let nome = prompt("Por favor digite o seu nome") 
  let idade = Number(prompt("Por favor digite a sua idade"))
  let email = prompt("Por favor digite o seu email")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

  let minhasCores = []

  minhasCores[0] = prompt("Digite a primeira cor por favor!")
  minhasCores[1] = prompt("Digite uma segunda cor por favor")
  minhasCores[2] = prompt("Digtie a última cor por favor")

  console.log(minhasCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  string = string.toUpperCase()

  return string

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  return (custo/valorIngresso)

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let myBool = (string1.length === string2.length)

  return myBool

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  let lastElement = (array.length - 1)

  return array[lastElement]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  let lastElement = array[(array.length -1)]
  array[array.length-1] = array[0]

  array[0] = lastElement 

  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  string1 = string1.toLowerCase()
  string2 = string2.toLowerCase()

  return (string1 === string2)

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  let anoAtual = Number(prompt("Por favor digite o ano atual"))
  let anoNascimento = Number(prompt("Por favor digite o seu ano de nascimento"))
  let anoRG = Number(prompt("Por favor digite o ano que a sua RG foi emitida"))
  let idade = anoAtual - anoNascimento
  let idadeRG = anoAtual - anoRG

  let renovar1 = (idade <= 20) && (idadeRG >= 5)
  let renovar2 = (idade > 21 && idade <= 50 ) && (idadeRG >= 10)
  let renovar3 = (idade > 50) && (idadeRG >= 15)

  let resposta = (renovar1 || renovar2 || renovar3)

  console.log(resposta)

}



// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let condicao1 = (ano % 400 === 0)
  let condicao2 = ( (ano % 4 === 0) && (!(ano%100 === 0 && condicao1 === false ) ) )   
  let condicao3 = false

  let resposta = (condicao1 || condicao2 || condicao3)
  return resposta

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let respostaIdade = prompt("tem mais de 18?") 
  let respostaEscolaridade = prompt("tem ensino médio completo?")
  let respostaDisponibilidade = prompt("tem disponibilidade de horários?")

  respostaIdade = respostaIdade.toLowerCase()
  respostaEscolaridade = respostaEscolaridade.toLowerCase()
  respostaDisponibilidade = respostaDisponibilidade.toLocaleLowerCase()

  let boolValidade = (respostaIdade.includes("sim") && respostaEscolaridade.includes("sim") && respostaDisponibilidade.includes("sim"))

  console.log(boolValidade || false)
}