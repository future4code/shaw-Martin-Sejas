``` 
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
// Escreva seu código aqui
 let salarioBase = 2000
 let comissao = (qtdeCarrosVendidos*100)+(valorTotalVendas*0.05)

 return (salarioBase+comissao)
}