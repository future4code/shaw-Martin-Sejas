
/* 
Para o input `aabbb` o resultado deve ser `a2b3`

Para o input `aabcccccaaa` o resultado deve ser `a2b1c5a3`

Para o input `accurate` o resultado deve ser `accurate` (já que inicialmente o código retornaria `a1c2u1r1a1t1e1` que possui o tamanho maior do que `accurate`)

Para o input `escola` o resultado deve ser `escola` (já que inicialmente o código retornaria `e1s1c1o1l1a1` que possui o tamanho maior do que `escola`)

Para o input `accuraaaaaaaaaate`, o resultado deve ser `a1c2u1r1a10t1e1`
*/


function stringCompression(originalString:string):string {
   
    let compressedString:string = ""; 
    originalString = originalString.toLowerCase(); 
    let previousChar:string = originalString[0]; 
    let charRepetitions:number = 0; 

    for(let char of originalString)
    {
        
        if (previousChar === char)
        {
            charRepetitions++; 
        }

        else {
            
            compressedString = compressedString + `${previousChar}${charRepetitions}`; 
            previousChar = char; 
            charRepetitions =1; 
        }
    }

   compressedString = compressedString + `${previousChar}${charRepetitions}`;  


   if (compressedString.length > originalString.length) 
   {
    return originalString
   }

   else {
    return compressedString; 
   }

}

console.log(stringCompression("aabbb"));
console.log(stringCompression("aabccccaaa")); 
console.log(stringCompression("accurate")); 
console.log(stringCompression("escola"));
console.log(stringCompression("accuraaaaaaaaaate"))