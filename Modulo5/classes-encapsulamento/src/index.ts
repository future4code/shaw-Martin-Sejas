//Exercicio 1 

//a) Um construtor de classe serve principalmente para inicializar um objeto de uma classe, eh uma funcao feita para isso


//B) 


class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    getCpf(){
        return this.cpf; 
    } 

    getName(){
        return this.name; 
    } 

    getAge(){
        return this.age; 
    }
    
    getTransactions() {
        return this.transactions; 
    }
  }




//Chamou uma vez


//C Precisamos de funcoes getters e setters para acessar propriedades privadas de uma classe


//Exercicio 2

class Transaction {
    private description: string; 
    private value: number;
    private date:string;

    constructor(description:string, value:number, date:string){
       this.description = description; 
       this.value = value; 
       this.date = date; 
    }

    getDescription(){
        return this.description; 
    }

    getValue(){
        return this.value; 
    } 

    getDate(){
        return this.date; 
    }
}

//Exercicio3 

class Bank {
    private accounts:UserAccount[]

    constructor(accounts:UserAccount[]) {
        this.accounts = accounts; 
    }
}