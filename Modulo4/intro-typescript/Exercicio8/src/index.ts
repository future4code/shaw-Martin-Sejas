function reverseString(inputString:string):string {

    let reversedString = ""; 

    for(let i = inputString.length-1; i >= 0 ; i-- )
    {
        reversedString = reversedString.concat(inputString[i]); 
    }


    return reversedString; 
}


console.log(reverseString("abcd"));