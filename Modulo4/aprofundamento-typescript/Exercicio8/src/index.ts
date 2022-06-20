//a) 

type Prato = {
    nome: string, 
    custo:number, 
    preco: number, 
    ingredientes:string[]
}

type Produto = {
    prato: Prato, 
    cliente:string
}

let todosOsProdutos:Produto[]; 

function cadastroProduto(produto:Produto):void {

    todosOsProdutos = [...todosOsProdutos, produto]; 
}

//b)
function acharProduto(nome:string):number|string {

    for(let produto of todosOsProdutos)
    {
        if(produto.prato.nome === nome)
        {
            return produto.prato.preco; 
        }
    }

    return "produto nao encontrado"
}


//c) 

let produtosVendidos:Produto[]; 

function venderProduto(produto:Produto):void {
    produtosVendidos = [...produtosVendidos, produto]
}

//d) 

function calcularLucro():number {
    
    let lucro = 0; 
    for (let produto of produtosVendidos)
    {
        lucro += produto.prato.preco - produto.prato.custo; 
    }
    
    
    
    return lucro; 

}



