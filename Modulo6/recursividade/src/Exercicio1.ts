/* 
Escreva uma função recursiva que:

a. Receba um número e imprima todos os inteiros de 0 até esse número no console em ordem crescente

b. Receba um número e imprima todos os inteiros desse número até 0 em ordem decrescente
*/ 


//A 

const printAscendingNumbers = (n: number) => {
  if (n >= 0) {
    printAscendingNumbers(n - 1);
    console.log(n);
  }
}


//B 

const printDescendingNumbers = (num:number) => {
    if(num >= 0){
        console.log(num); 
        printDescendingNumbers(num -1)
    }
}

printDescendingNumbers(10)
