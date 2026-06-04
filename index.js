// class Produto{
//     constructor(nome, preco) {
//         this.nome = nome;
//         this.preco = preco;
//     }



// exibirInfo() {
//     return `${this.nome} custa R$ ${this.preco}`;

// }
// }

// const Camisa = new Produto('Camisapica', 50)
// const avon = new Produto('Perfume', 50)

// console.log(Camisa.exibirInfo())
// console.log(avon.exibirInfo())

// class carrinho{
//     constructor(){
//         this.itens = [];
//     }


// adicionarProduto(Produto){
//     this.itens.push(Produto);
// }

// calcularTotal(){
//     return this.itens.reduce((total, p ) => total + p.preco, 0); 
// }
// }

// const celular = new Produto("Iphone", 5000)
// const meuCarrinho = new carrinho();
// meuCarrinho.adicionarProduto(celular)

// console.log(meuCarrinho)

//imperativo
// let Alunos = [
//   { nome:'Ana', nota: 8 }, { nome:'Bruno', nota: 6 },  { nome:'Carla', nota: 9 }
// ];


// let somaNotas = 0;
// let aprovados = [];


// for (let i = 0; i < Alunos.length; i++) {
//     somaNotas += Alunos[i].nota;

//     if (Alunos[i].nota >= 7) {
//         aprovados.push(Alunos[i])
//     }
// }



//funcional 

class Aluno {
    constructor(nome, nota){
        this._nome = nome;
        this._nota = nota;
    }
    estaAprovado(){
        let aprovado = this._nota >= 7;
        return aprovado;
    }
}
class Turma {
    constructor(listaDeAlunos = []) {
        this.alunos = listaDeAlunos; 
    }

    gerarRelatorio(){
        return this.alunos.filter((aluno) => aluno.estaAprovado());
    }

    adicionarAluno(aluno){
        if(typeof aluno.estaAprovado !== "function"){
            throw new Error("O objeto não tem o método necessário");
        }
        this.alunos.push(aluno); 
    }
}
    

let cajuhub = new Turma();

let addAluno = new Aluno("Vitor", 9);

cajuhub.adicionarAluno(addAluno);


console.log(cajuhub);
console.log("Relatório de aprovados:", cajuhub.gerarRelatorio());