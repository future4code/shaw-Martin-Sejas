enum TipoDeRoupa {
    VERAO = "Verao",
    INVERNO = "Inverno",
    BANHO = "Banho", 
    INTIMAS = "Intimas"
}

type Produto = {
    nome: string, 
    preco: number, 
    classifacao: TipoDeRoupa, 
    preco_desconto: number | undefined
}


let produtos:Produto[] = [
    {
        nome: 'Casaco',
        preco: 70, 
        classifacao: TipoDeRoupa.INVERNO,
        preco_desconto: undefined
    },
    {
        nome: 'Bikini',
        preco: 70, 
        classifacao: TipoDeRoupa.BANHO,
        preco_desconto: undefined
    },

    {
        nome: 'Cueca',
        preco: 70, 
        classifacao: TipoDeRoupa.INTIMAS,
        preco_desconto: undefined
    },

    {
        nome: 'Regata',
        preco: 70, 
        classifacao: TipoDeRoupa.VERAO,
        preco_desconto: undefined
    },
]


function precoComDesconto(produtos:Produto[]):Produto[] {

    let produtosDescontados = produtos.map((produto) => {
        switch (produto.classifacao) {
            case TipoDeRoupa.VERAO: 
                produto.preco_desconto = produto.preco*1.05; 
                break; 

            case TipoDeRoupa.INVERNO: 
                produto.preco_desconto = produto.preco*1.10; 
                break; 
             case TipoDeRoupa.BANHO: 
                produto.preco_desconto = produto.preco*1.04; 
                break; 

            default: 
            produto.preco_desconto = produto.preco*1.07; 
            break; 
        }

        return produto; 

    })

    return produtosDescontados; 
}

console.log(produtos); 
console.log(precoComDesconto(produtos))