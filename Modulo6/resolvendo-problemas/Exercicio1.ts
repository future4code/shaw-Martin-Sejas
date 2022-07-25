console.log("Exercicio1 funcionando"); 

/* 
Considere que a gente só possa fazer três operações com string: adicionar um caractere ao final dele, 
remover um caractere do final dele ou substituir um caractere por outro. 
Dizemos que uma string é 'one edit' de outra se ela for o resultado da original a partir de UMA SÓ dessas operações. 
Escreva um método que determine se uma string é  'one edit' de outra.
*/



//add one character to the end of the original
//remove charcter from the end
//check if last character has changed 

/* 

`"banan"` é 'one edit' de `"banana"` (remoção de um caracter)

`"bananak"` é 'one edit' de `"banana"` (adição de um caracter)

`"panana"` é 'one edit' de `"banana"` (troca de um caracter)

`"bananaaa"` **não** é 'one edit' de `"banana"` (adição de dois caracteres)

*/ 

function isOneEdit(originalString:string, editedString:string):boolean {

    let isOneEdit:boolean = true; 
    
    if(originalString.length - editedString.length === 1)
    {
        //last character removed 
        //banan  a
        //banan

        //check if remaining characters are equal
        for( let i = 0; i < editedString.length; i++ )
        {
            if (originalString[i] !== editedString[i]) isOneEdit = false; 
        }

        return isOneEdit; 
    }

    else if(editedString.length - originalString.length === 1) 
    {
        //added one character at the end
        //banana
        //bananaa 

        //check if remaining characters are equal
        for( let i =0; i < originalString.length; i++)  
        {
            if(originalString[i] !== editedString[i]) isOneEdit = false;  
        }
        return isOneEdit;
    }

    else if (editedString.length === originalString.length){
        //check for changed characters
        let changedCharacters = 0; 

        for(let i =0; i< originalString.length; i++)
        {
            if(originalString[i] !== editedString[i]) changedCharacters++; 
        }

        return changedCharacters === 1; 
    }

    else{
        return false; 
    }

    
}


console.log(isOneEdit("banana", "banan"));
console.log(isOneEdit("banana", "bananak"));
console.log(isOneEdit("banana", "panana")); 
console.log(isOneEdit("banana", "bananaaa")); 