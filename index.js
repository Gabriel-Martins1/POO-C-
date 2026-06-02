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
//         this.item = [];
//     }


// adicionarProduto(Produto){
//     this.item.push(Produto);
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
// let alunos = [
//   { nome:'Ana', nota: 8 }, { nome:'Bruno', nota: 6 },  { nome:'Carla', nota: 9 }
// ];


// let somaNotas = 0;
// let aprovados = [];


// for (let i = 0; i < alunos.length; i++) {
//     somaNotas += alunos[i].nota;

//     if (alunos[i].nota >= 7) {
//         aprovados.push(alunos[i])
//     }
// }



//funcional 

class alunos {
    constructor(nome, nota){
        this.nome
        this.nota
    }
    
    estaAprovado(){
    let aprovado = nota >=7 ? "aprovado" : "reprovado";
    return
    }
}

class turma {
    gerarRelatorio(){
    return  this.aluno.filter((aluno) => aluno.estaAprovado())
    }
}

let Alunos = [];
let maxAlunos = 5;

const turmaB = new Turma();
turmaB.adicionarAluno(alunos("Carlos", 8));
turmaB.adicionarAluno(alunos("Geraldo", 7));
turmaB.adicionarAluno(alunos("Rivaldo", 5));
turmaB.adicionarAluno(alunos("Roberto", 2));
turmaB.adicionarAluno(alunos("Patricio", 10));

for (let  i = 0; i < maxAlunos; i++) {
    let novoAluno = new Aluno(`Aluno ${i + 1}`, 5 + i); 
    turmaB.adicionarAluno(novoAluno);
}