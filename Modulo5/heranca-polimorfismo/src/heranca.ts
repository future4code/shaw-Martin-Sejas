//Heranca 


//Exercicio 1 

class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(
		id: string,
		email: string,
		name: string,
		password: string
	){
		console.log("Chamando o construtor da classe User")
		this.id = id
		this.email = email
		this.name = name 
		this.password = password
	}

	public getId(): string {
		return this.id
	}

	public getEmail(): string {
		return this.email
	}

	public getName(): string {
		return this.name
	}
    
  public introduceYourself():string {
    return `Ola bom dia, sou ${this.name}`;     
  }
}

let myUser = new User("1", "astrodev@labenu.com", "AstroDev", "labenu1234");

console.log(myUser.getId())
console.log(myUser.getEmail())
console.log(myUser.getName())


//a) Nao, nao seria possivel imprimir a palavra password porque ela eh privada, soh pode ser acessada pela classe,
// caso existisse um metodo para isso

//b) Foi impresso uma vez

//Exercicio 2 

class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }

}

let newCustomer = new Customer("2", "customer@labenu.com", "Mr. Cliente", "cliente1234", "00000-00000")

//a) Foi impressa somente uma vez 

//b) Foi impressa 2 vezes, uma pela criacao do usuario e outra pela craicao do customer 


//Exercicio 3 

console.log(newCustomer.getName())
console.log(newCustomer.getEmail())
console.log(newCustomer.getCreditCard())
console.log(newCustomer.purchaseTotal)

//A) Nao seria possivel, eh privada e n tem o getter function 

//Exercicio 4  e 5
console.log(newCustomer.introduceYourself()); 

//Exercicio 6 - Desafios


class Employee extends User{
    protected admissionDate:Date; 
    protected baseSalary:number; 
    static BENEFITS_VALUE:number = 400; 

    constructor(
        id:string, 
        email:string,
        name:string, 
        password:string, 
        admissionDate:Date, 
        baseSalary:number
    ){
        super(id,email,name,password); 
        this.admissionDate = admissionDate; 
        this.baseSalary = baseSalary; 
    }

    public getAdmissionDate():Date{
        return this.admissionDate; 
    }

    public getBaseSalary():number{
        return this.baseSalary; 
    }

    public calculateTotalSalary():number{
        return this.baseSalary + Employee.BENEFITS_VALUE; 
    }
    
}

//
let starEmployee = new Employee("3", "msemployee@labenu.com", "Ms. Employee", "employee1234", new Date(Date.now()), 3500);

//A) Aparece 3 vezes 

console.log(starEmployee.getId())
console.log(starEmployee.getName())
console.log(starEmployee.getEmail())
console.log(starEmployee.getAdmissionDate())
console.log(starEmployee.getBaseSalary())

//b) todos


//Exercicio 7 

//Exercicio 8 
class Seller extends Employee{
    private salesQuantity:number = 0; 
    static SELLING_COMISSION:number = 0; 

public  setSalesQuantity(quantity:number):void {
        this.salesQuantity = quantity;
    }

    public calculateTotalSalary(): number {
        return this.baseSalary + Seller.BENEFITS_VALUE + 5*Seller.SELLING_COMISSION; 
    }



}

let snakeOil = new Seller("5", "snake@labenu.co", "Snake Oil Salesman", "snakey1234", new Date(Date.now()), 5000)
//A) Ela deve receber todos os paraemtros de Employee e User 

console.log(snakeOil.getName())
console.log(snakeOil.getId())
console.log(snakeOil.getEmail())
console.log(snakeOil.getAdmissionDate())
console.log(snakeOil.getBaseSalary())

//b) Consegui imprimir todas

//Exercicio 9 
//a) 

snakeOil.setSalesQuantity(20); 

//Nao eh possivel porq eh privada e n tenho um getter 

//Exercicio 10 

console.log(snakeOil.calculateTotalSalary()); 



