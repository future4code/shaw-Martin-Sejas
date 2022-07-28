function intSum(num:number):number{
    if(num > 0)
    {
        return num + intSum(num-1)
    }
    else {
        return 0; 
    }
}


console.log(intSum(3))


