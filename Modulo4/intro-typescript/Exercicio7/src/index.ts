function gerarRNA(DNA:string):string {

    let RNA:string =""; 
    for(let i of DNA)
    {
        switch(i){

            case 'A': 
           RNA = RNA.concat('U');
           break; 

           case 'T':
               RNA = RNA.concat('A')
               break; 
               
           case 'C':
               RNA = RNA.concat('G')
               break; 

           case 'G':
               RNA = RNA.concat('C')
               break;     

            default: 
            break;
        }
    }
    return RNA; 
}

console.log(gerarRNA("ATTGCTGCGCATTAACGACGCGTA"));