let operation = process.argv[2]; 
let firstNum = process.argv[3]; 
let secondNum = process.argv[4]; 
let answer = 0; 

if (process.argv[3] === undefined && process.argv[4] === undefined)
{
    console.log("\x1b[31m ERRO: falta de parâmetros")
}

else if (process.argv[4] === undefined)
{
    console.log("\x1b[31m ERRO: Esperava 2 parâmetros, recebi 1")
}

else {

    switch (operation) {
        case 'add': 
            answer = Number(firstNum) + Number(secondNum);
             break; 
    
        case 'sub':
            answer = Number(firstNum) - Number(secondNum);
            break; 
        
        case 'mult': 
            answer = Number(firstNum) * Number(secondNum);
            break; 
    
        case 'div':
            answer = Number(firstNum) / Number(secondNum); 
            break; 
    
        default:
            console.log("\x1b[31m Operacão não reconhecida por favor usar add, sub, mult ou div"); 
            answer = 'FAIL'; 
    
    }

    answer === 'FAIL' ? console.log("\x1b[33m Tente de novo por favor"): console.log(`%cResposta: ${answer}`, "color:blue")
}





