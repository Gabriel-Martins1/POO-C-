class Produto{
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }



exibirInfo() {
    return `${this.nome} custa R$ ${this.preco}`;

}
}

const Camisa = new Produto('Camisapica', 50)
const avon = new Produto('Perfume', 50)

console.log(Camisa.exibirInfo())
console.log(avon.exibirInfo())

class carrinho{
    constructor(){
        this.item = [];
    }


adicionarProduto(Produto){
    this.item.push(Produto);
}

calcularTotal(){
    return this.itens.reduce((total, p ) => total + p.preco, 0); 
}
}

const celular = new Produto("Iphone", 5000)
const meuCarrinho = new carrinho();
meuCarrinho.adicionarProduto(celular)