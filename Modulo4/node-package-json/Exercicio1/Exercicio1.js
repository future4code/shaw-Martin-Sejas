// A) Usamos o process.argv[2] para cima

// B) Assumindo que os inputs vao vir em forma de inputs do terminal

if (process.argv[2] === undefined && process.argv[3] === undefined)
{
    console.log("\x1b[31m ERRO: falta de parâmetros")
}

else if (process.argv[3] === undefined)
{
    console.log("\x1b[31m ERRO: Esperava 2 parâmetros, recebi 1")
}

else 
{
    console.log(`\x1b[36m Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos. Em sete anos você terá ${Number(process.argv[3])+7}`, "color: blue")
}


