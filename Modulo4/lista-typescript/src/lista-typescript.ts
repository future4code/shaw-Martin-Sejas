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

console.log(separarData("Martin", "14/2/1997"))






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

 
//Exercicio 8
console.log("\nExercicio 8 \n")
 
//Exercicio 9
console.log("\nExercicio 9 \n")
 
//Exercicio 10
console.log("\nExercicio 10 \n")
 
//Exercicio 11
console.log("\nExercicio 11 \n")
 