import { LinkedList, NodeItem } from "./Exercicio1";

export class Stack {
    constructor(
        public items = new LinkedList(),
      
    ){}
    isEmpty(){
        return this.items.head === null; 
    }

    push(item:any){
        
        this.items.add(item); 
      
    }

    pop(){
       if(this.items.head !== null)
       {
          if(this.items.head.nextNode === null)
          {
            let node = this.items.head; 
            this.items.head = null; 
            return node; 
          }

          else  {
            let prevNode = this.items.head; 
            let node = this.items.head.nextNode; 

            while(node?.nextNode !== null)
            {
                prevNode = node; 
                node = node.nextNode;
            }
            prevNode.nextNode = null; 
            return  node;
          }  
       }
       
    }

    print(){
        this.items.printList(); 
    }
}

let myStack = new Stack; 

console.log(`is my stack empty?: ${myStack.isEmpty()}`); 

myStack.push("martin"); 
myStack.push("hugo"); 
myStack.push("de");
myStack.push("Barros");
myStack.push("Sejas");

myStack.print(); 
console.log("POPPING LAST ITEM")
myStack.pop(); 
myStack.print();
 console.log(`is my stack empty?: ${myStack.isEmpty()}`); 
