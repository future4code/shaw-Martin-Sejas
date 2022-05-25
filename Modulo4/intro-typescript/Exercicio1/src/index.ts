function checaTriangulo(a: Number, b:Number, c:Number):string {

    if (a !== b && b!== c) 
    {
        return "Escaleno"; 
    }
    
    else if (a === b && b===c) {
        return "Equilátero";
    }
    else {
        return "Isósceles"
    }
}


//checa "Isósceles"
console.log(checaTriangulo(5,5,2))

//checa Equilátero
console.log(checaTriangulo(5,5,5))

// checa Escaleno
console.log(checaTriangulo(5,3,2))