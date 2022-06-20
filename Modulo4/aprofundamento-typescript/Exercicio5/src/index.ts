//a) 

//o tsconfig.json tem muitas mais opções em comparação do que vimos em aula


//desafio 


type Paciente = {
    nome: string, 
    idade: number, 
    dataDaConsulta: string
}

let pacientes:Paciente[] = [
    { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
    { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
    { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
]


function ordenarPacientes(pacientes:Paciente[]):Paciente[] {

    let pacientesOrdenados = pacientes.sort( (a, b) => a.nome.toLowerCase().localeCompare(b.nome.toLowerCase())); 

    return pacientesOrdenados; 
}

console.table(ordenarPacientes(pacientes))