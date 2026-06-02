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
        this.nome = nome;
        this.nota = nota
    }
    estaAprovado(){
        let aprovado = this.nota >= 7;
        return aprovado
    }
}

class Turma {
    constructor(listaDeAlunos) {
        this.Alunos = listaDeAlunos;
    }

    gerarRelatorio(){
        return this.Alunos.filter((Aluno) => Aluno.estaAprovado())
    }
}
let listaAluno = []

let Alunos = [
  { nome: "Flavio", nota: 3.5 },
  { nome: "Patrick",  nota: 5.2 },
  { nome: "Lucas",  nota: 7.0 },
  { nome: "Robson",  nota: 6.9 },
  { nome: "Mario", nota: 9.3 }
];


for (let i = 0; i < Alunos.length; i++) {
    let novoAluno = new Aluno(Alunos[i].nome, Alunos[i].nota)
    listaAluno.push(novoAluno);
}

const turmaB = new Turma(listaAluno);
console.log("Alunos Aprovados:", turmaB.gerarRelatorio());;