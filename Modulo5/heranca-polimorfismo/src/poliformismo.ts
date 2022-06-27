//Poliformismo 

//Exercicio 1 
export interface Client {
  name: string;
  // Refere-se ao nome do cliente

  registrationNumber: number;
  // Refere-se ao número de cadastro do cliente na concessionária
	// como se fosse um id

  consumedEnergy: number;
  // Refere-se à energia consumida pelo cliente no mês

  calculateBill(): number;
  // Retorna o valor da conta em reais
}

//Exercicio 1

class EnergyClient implements Client{

  constructor(
    public name:string,
    public registrationNumber:number, 
    public consumedEnergy:number = 0

  ){}

calculateBill(): number{
  return 2
}
}
let myClient = new EnergyClient("Light", 10000, 200); 

console.log(myClient.name)
console.log(myClient.registrationNumber)
console.log(myClient.consumedEnergy)
console.log(myClient.calculateBill())


//Exercicio 2

export abstract class Place {
  constructor(protected cep: string) {}

	public getCep(): string {
		return this.cep;
  }
}

//ERRO
//A) Cannot make instance of an abstract class

//B) Precisariamos fazer uma classe filho dessa classe abstrata


//Exercicio 3

export class Residence extends Place {
  constructor(
    protected residentsQuantity: number,
    // Refere-se ao número de moradores da casa

    cep: string
  ) {
    super(cep);
  }

  public getResidentsQuantity():number{
    return this.residentsQuantity;
  }
}

export class Commerce extends Place {
  constructor(
    protected floorsQuantity: number,
    // Refere-se à quantidade de andares do lugar

    cep: string
  ) {
    super(cep);
  }

  public getFloorsQuantity():number{
    return this.floorsQuantity;
  }
}


export class Industry extends Place {
  constructor(
    protected machinesQuantity: number, 
    // Refere-se à quantidade de máquinas do local 
    
    cep: string
		) {
	    super(cep);
  }

  public getMachinesQuantity():number{
    return this.machinesQuantity; 
  }
}

let casa = new Residence(100, "1111-765"); 
console.log(casa.getCep())
console.log(casa.getResidentsQuantity()); 

let comercio = new Commerce(25, "222543-659");
console.log(comercio.getCep()); 
console.log(comercio.getFloorsQuantity()); 

let fabrica = new Industry(1200, "225489-845"); 
console.log(fabrica.getCep()); 
console.log(fabrica.getMachinesQuantity()); 


//Exercicio 4
export class ResidentialClient extends Residence implements Client {
  constructor(
   public name:string, 
    public registrationNumber:number, 
    public consumedEnergy:number,
    private cpf:string,
    residentsQuantity:number, 
    cep:string

  ){
    super(residentsQuantity, cep)
  }

  public getCpf():string{
    return this.cpf;
  }

  public calculateBill(): number {
   return this.consumedEnergy*0.75;
  }

}

//Exercicio 5
export class CommercialClient extends Commerce implements Client {
  constructor(
    public name:string, 
    public registrationNumber:number, 
    public consumedEnergy:number, 
    private cnpj:string, 
    floorsQuantity:number, 
    cep:string
  ){
    super(floorsQuantity, cep); 
  }

  public calculateBill(): number {
    return this.consumedEnergy*0.53;
  }

  public getCnpj():string{
    return this.cnpj; 
  }
}

//Exercicio 6
export class IndustrialClient extends Industry implements Client {
  constructor(
    public name:string, 
    public registrationNumber:number, 
    public consumedEnergy:number, 
    private industrialNumber:number,
    machinesQuantity:number, 
    cep:string
  )
  {
    super(machinesQuantity, cep); 
  }

  public calculateBill(): number {
    return this.consumedEnergy*0.45 + this.machinesQuantity*100; 
  }

  public getIndustrialNumber():number{
    return this.industrialNumber; 
  }

}


class ClientManager {
  private clients: Client[] = [];

  // demais implementações

  public getClientsQuantity(): number {
    return this.clients.length;
  }
}





