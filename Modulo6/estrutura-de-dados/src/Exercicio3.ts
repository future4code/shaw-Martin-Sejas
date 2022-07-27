export class Queue {
    constructor(
       public items:any[] = []
    ){}
    
    public isEmpty():boolean{
        return this.items.length === 0; 
    }

    public enqueue (item:any):void {
        this.items.push(item); 
    }

    public dequeue():void {
        this.items.pop(); 
    }

    public print():void{
        console.log(this.items)
    }

}