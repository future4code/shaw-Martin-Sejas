### Exercicio 1

a) Rounds e o nivel de complexidade dado a os nossas hashes e salts, o recomendado eh 16. Salt é uma string aleatoria adicionada aos nossas hashes para não dar erro. 

b) 
```ts
export async function generateHash(s:string):Promise<string> {
    const rounds= Number(process.env.BCRYPT_COST); 
    const salt = await bycrypt.genSalt(rounds); 
    const result = await bycrypt.hash(s, salt); 

    return result; 
}

export async function compareHase(s:string,hash:string): Promise<boolean> {
    return bycrypt.compare(s ,hash);
}
```

### Exercicio 2

a) temos que mudar a senha do cadastro 
