console.log("======================= LISTA TYPESCRIPT ========================= \n  ")



//Exercicio 1
console.log("\nExercicio 1 \n")

function separarData(nome:string, data:string):string {

    let dataSeparada = data.split('/');

    let mes = dataSeparada[1]

    switch (mes) {
        case '01':
            mes = 'Janeiro';
            break; 
        case '02':
            mes = 'Fevereiro';
            break; 
        case ('03'):
            mes = 'Março';
            break; 
        case ('04'):
            mes = 'Abril';
            break; 
        case ('05'):
            mes = 'Maio';
            break; 
        case ('06'):
            mes = 'Junho';
            break; 
        case ('07'):
            mes = 'Julio';
            break; 
        case ('08'):
            mes = 'Agosto';
            break; 
        case ('09'):
            mes = 'Setembro';
            break; 
        case '10':
            mes = 'Outubro';
            break; 
        case '11':
            mes = 'Novembro';
            break; 
        case '12':
            mes = 'Dezembro';
            break; 
        default:
            mes = 'Janeiro';
            break; 
    }
    
    return `Olá me chamo ${nome}, nasci no dia ${dataSeparada[0]} do mês de ${mes} do ano de ${dataSeparada[2]}`; 
}

console.log(separarData("Martin", "14/02/1997"))






//Exercicio 2
console.log("\nExercicio 2 \n")

function determineType(myVar:any):void {
    console.log(typeof myVar)
}

determineType(1234)
 






//Exercicio 3
console.log("\nExercicio 3 \n")

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme = {
    nome: string; 
    anoLancamento:number, 
    genero: GENERO,
    pontuacao?: number 

}


function catalogarFilmes(nome:string, anoLancamento:number, genero:GENERO, pontuacao?:number):Filme {

    if(pontuacao)
  {  
      let meuFilme:Filme = {
        nome: nome,
        anoLancamento: anoLancamento, 
        genero: genero, 
        pontuacao: pontuacao
    }

    return meuFilme
}

else {
    let meuFilme:Filme = {
        nome: nome,
        anoLancamento: anoLancamento, 
        genero: genero, 
    }

    return meuFilme; 
}

}

console.log(catalogarFilmes("Duna",2021, GENERO.ACAO, 74))
console.log(catalogarFilmes("Duna",2021, GENERO.ACAO))





 
//Exercicio 4
console.log("\nExercicio 4 \n")

enum SETOR {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
}

type Funcionario = {
    nome:string, 
    salario:number, 
    setor: SETOR, 
    presencial:boolean

}

let funcionarios:Funcionario[] = [
	{ nome: "Marcos", salario: 2500, setor: SETOR.MARKETING, presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: SETOR.VENDAS, presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "João" ,salario: 2800, setor: SETOR.MARKETING, presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: SETOR.VENDAS, presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: SETOR.MARKETING, presencial: true }
]


function filtrarFuncionariosMarketingPresencial(funcionarios:Funcionario[]):Funcionario[] {


    return funcionarios.filter( (funcionario) => {
        return funcionario.setor === SETOR.MARKETING && funcionario.presencial === true
    })

}

console.log(filtrarFuncionariosMarketingPresencial(funcionarios))

 
//Exercicio 5
console.log("\nExercicio 5 \n")

enum ROLES {
    USER = "user",
    ADMIN = "admin"
}

type Usuario = {
    name:string, 
    email:string, 
    role: ROLES
}

let usuarios = [
	{name: "Rogério", email: "roger@email.com", role: ROLES.USER},
	{name: "Ademir", email: "ademir@email.com", role: ROLES.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ROLES.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLES.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ROLES.USER},  
	{name: "Carina", email: "carina@email.com", role: ROLES.ADMIN}      
] 


function filterAdminUsers(usuarios:Usuario[]):(string|undefined)[] {

  let emailUsuarios:(string|undefined)[] = usuarios.map( (usuario) => {
      if (usuario.role === ROLES.ADMIN) return usuario.email
  }).filter( (email) => {
      return email !== undefined
  })

  return emailUsuarios
}

console.log(filterAdminUsers(usuarios))

 
//Exercicio 6
console.log("\nExercicio 6 \n")

type ClienteBanco = {
    cliente: string, 
    saldoTotal: number, 
    debitos: number[]
}

let clientes:ClienteBanco[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]


function calcularSaldo(clientes:ClienteBanco[]):ClienteBanco[]{

    let saldosAtuais = [...clientes]; 

    return saldosAtuais.map( (cliente) => {
       cliente.saldoTotal = cliente.debitos.reduce((total, num)=> {
           return total - num; 

       }, cliente.saldoTotal)

       cliente.debitos = []; 

       return cliente;
    }).filter( (cliente) => {
        return cliente.saldoTotal < 0
    } )

}

console.log(calcularSaldo(clientes))
 
//Exercicio 7
console.log("\nExercicio 7 \n")

const ajustaPreco = (preco :number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
}

type ProdutoEstoque = {
    nome:string, 
    quantidade: number, 
    valorUnitario: number | string
}

let estoqueLoja:ProdutoEstoque[] = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]


function ajustarEstoque(estoque:ProdutoEstoque[]):ProdutoEstoque[]{

    let precosAjustados = estoque.map( (produto) => {
        produto.valorUnitario = ajustaPreco(produto.valorUnitario as number)
        return produto; 
    })

    precosAjustados = precosAjustados.sort( (a,b) => {
        return  b.quantidade - a.quantidade 
    })



    return precosAjustados; 
}

console.log(ajustarEstoque(estoqueLoja))

 
//Exercicio 8
console.log("\nExercicio 8 \n")

function checarValidade(anoNascimento:string, anoEmissao:string):boolean {
    let dataNascimento = anoNascimento.split('/'); 
    let dataEmissao = anoEmissao.split('/')

    let nascimento = new Date( Number((dataNascimento[2])), Number(dataNascimento[1]), Number(dataNascimento[0]))  ; 
    let emissao = new Date(Number((dataEmissao[2])), Number(dataEmissao[1]), Number(dataEmissao[0])); 
    let hoje = new Date( Date.now()); 

    //ano em milisegundos
    let ano = 1000*60*60*24*365; 
    let idade = hoje.getTime() - nascimento.getTime(); 
    let tempoDeEmissao = hoje.getTime() - emissao.getTime(); 

    let renovarJovem:boolean = false; 
    let renovarAdulto:boolean = false; 
    let renovarIdoso:boolean = false; 

    if (idade%ano <= 20 && tempoDeEmissao%ano > 5 ) renovarJovem = true 

    if (idade%ano > 20 && idade%ano <= 50 && tempoDeEmissao%ano >10) renovarAdulto = true; 

    if (idade%ano > 50 && tempoDeEmissao%ano>15) renovarIdoso = true; 

    return renovarAdulto || renovarIdoso || renovarJovem; 


}

console.log(checarValidade("24/04/1993", "07/11/2010"))

 
//Exercicio 9
console.log("\nExercicio 9 \n")

function calcularAnagramas(palavra:string):number{

    let factorial = palavra.length; 

    if (factorial === 0 || factorial === 1) return 1; 

    else {
        let total:number = 1; 
        for(let i = 1; i <= factorial; i++)
        {
            total *= i; 
        }

        return total; 
    }


}


console.log(calcularAnagramas("mesa"))
 
//Exercicio 10
console.log("\nExercicio 10 \n")


function validarCpf(cpf:string):boolean {
    console.log(`VALIDANDO CPF: ${cpf}`)

    //separar entre numeros base e DVs 123.456.789-11 -> [123.456.789], [11]
    let cpfSeparado = cpf.split('-'); 

    //remover pontos da base 123.456.789 -> 123456789
    let cpfBaseSemFormatar = cpfSeparado[0].split('.'); 

    //obter numero base depois de formatar
    let cpfBase = cpfBaseSemFormatar.join('')

    //removendo char extra do split
    cpfSeparado[1] = cpfSeparado[1][0]+cpfSeparado[1][1]; 

    //guardar variavel teste formatada
    let cpfTeste = cpfBase.concat(cpfSeparado[1]); 



    let sum:number = 0;  

     //checagem de numero igual 
     for(let c of cpfTeste)
     {
         if (c === cpfTeste[0]) sum++; 
     }

     if(sum === 11) return false

     else {
         sum = 0; 
     }

    let primeiroDV:number; 


    //calculando primeiro dv
    for (let i = 0; i < cpfBase.length; i++) 
    {
        sum += (10 - i)*(Number(cpfBase[i]));
    }

    if ((11 - (sum%11)) >= 10) primeiroDV = 0; 

    else {
        primeiroDV = (11 - (sum%11)); 
    }

    //adicionar para cpf base para validar ultimo digito verificador
    cpfBase += (primeiroDV.toString()); 

    //repetindo loop 
    sum = 0; 
    let segundoDV:number; 

    //calculo de ultimo digito
    for (let i = 0; i < cpfBase.length; i++) 
    {
        sum += (11 - i)*(Number(cpfBase[i]));
    }

    if ((11 - (sum%11)) >= 10) segundoDV = 0; 

    else {
        segundoDV = (11 - (sum%11)); 
    }

    //adicionando ultimo numero validado
    cpfBase += (segundoDV.toString()); 

   
    return (cpfBase == cpfTeste)
}

console.log(validarCpf("145.382.206-20 "));
console.log(validarCpf("145.382.206-19 "));
console.log(validarCpf("111.111.111-11"))
 
//Exercicio 11
console.log("\nExercicio 11 \n")

function converterParaNumeroRomano(ano:number):string {
    console.log(`Convertendo numero: ${ano}`)

    let romanYear = ""; 

    //eu tenho codigo que se repete muito, sinto que daria para refatorar, mas vou deixar para depois

    if(Math.floor(ano/1000)> 0) 
    {
        romanYear += ("M").repeat(Math.floor(ano/1000)); 
        ano = ano - (1000*(Math.floor(ano/1000)))
    }


    if(Math.floor(ano/900)> 0) 
    {
        romanYear += ("CM").repeat(Math.floor(ano/900)); 
        ano = ano - (900*(Math.floor(ano/900)))
    }

    if(Math.floor(ano/500)> 0) 
    {
        romanYear += ("D").repeat(Math.floor(ano/500)); 
        ano = ano - (500*(Math.floor(ano/500)))
    }
     
    if(Math.floor(ano/400)> 0) 
    {
        romanYear += ("CD").repeat(Math.floor(ano/400)); 
        ano = ano - (400*(Math.floor(ano/400)))
    }
     
    if(Math.floor(ano/100)> 0) 
    {
        romanYear += ("C").repeat(Math.floor(ano/100)); 
        ano = ano - (100*(Math.floor(ano/100)))
    }
  
    if(Math.floor(ano/90)> 0) 
    {
        romanYear += ("XC").repeat(Math.floor(ano/90)); 
        ano = ano - (90*(Math.floor(ano/90)))
    }
     
    if(Math.floor(ano/50)> 0) 
    {
        romanYear += ("L").repeat(Math.floor(ano/50)); 
        ano = ano - (50*(Math.floor(ano/50)))
    }
     
    if(Math.floor(ano/40)> 0) 
    {
        romanYear += ("XL").repeat(Math.floor(ano/40)); 
        ano = ano - (40*(Math.floor(ano/40)))
    }
    
    if(Math.floor(ano/10)> 0) 
    {
        romanYear += ("X").repeat(Math.floor(ano/10)); 
        ano = ano - (10*(Math.floor(ano/10)))
    }

    if(Math.floor(ano/9)> 0) 
    {
        romanYear += ("IX").repeat(Math.floor(ano/9)); 
        ano = ano - (9*(Math.floor(ano/9)))
    }

     if(Math.floor(ano/5)> 0) 
    {
        romanYear += ("V").repeat(Math.floor(ano/5)); 
        ano = ano - (5*(Math.floor(ano/5)))
    }

    if(Math.floor(ano/4)> 0) 
    {
        romanYear += ("IV").repeat(Math.floor(ano/4)); 
        ano = ano - (4*(Math.floor(ano/4)))
    }

    if (ano !== 0) 
    { 
        romanYear += ("I").repeat(Math.floor(ano / 1));
        ano = ano - (1 * (Math.floor(ano / 1)))
        
    }

    return romanYear;
}

console.log(converterParaNumeroRomano(3432))
 