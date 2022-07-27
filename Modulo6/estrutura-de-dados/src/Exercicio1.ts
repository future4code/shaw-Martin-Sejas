export class NodeItem {
    constructor(
        public value:any, 
        public nextNode: NodeItem | null = null 
    ){
        this.value = value; 
        nextNode = null; 
    }
    //every node item has another node item, last one is null
}


export class LinkedList {
    constructor(
        public head: NodeItem| null = null
    )
    { }

    //while loop all nodes

    public add(value:any)
    {     
        if(this.head === null)
        {
            this.head = new NodeItem(value)
        }
        else {
            let node:NodeItem = this.head; 
            let nextNodeNotNull = true; 
            
            while(nextNodeNotNull)
            {
                if(node.nextNode === null)
                {
                    nextNodeNotNull = false;
                    node.nextNode = new NodeItem(value)               
                }
                else 
                {
                    node = node.nextNode; 
                }
            }
        }
    }

    public printList()
    {
        if(this.head === null)
        {
            console.log(null)
        }

        else {
            console.log(this.head.value)
            let node:NodeItem = this.head; 

            while(node.nextNode !== null)
            {
                node = node.nextNode; 
                console.log(node.value)
            }
        }
    }

}


let myList = new LinkedList(); 

myList.add(5); 
myList.add(6); 
myList.add(7)

myList.printList(); 