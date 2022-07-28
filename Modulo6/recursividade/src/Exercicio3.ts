function sumToN(n:number):number {
    let totalSum:number = 0; 

    for(let i =0; i <=n; i++)
    {
        totalSum+= i; 
    }

    return totalSum; 
}